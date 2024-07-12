var _page_version = 75;

function changeActiveButton(page) {
    console.log('Active Button:', page);
    const buttons = document.getElementsByClassName('bottomMenu--item');
    for (let button of buttons) {
        const icon = button.getElementsByClassName('bottomMenu--itemIcon')[0];
        if (button.dataset.page === page) {
            button.classList.add('bottomMenu--item--active');
            icon.src = icon.dataset.active;
        } else {
            button.classList.remove('bottomMenu--item--active');
            icon.src = icon.dataset.inactive;
        }
    }
}

async function loadHomePage(reload = false) {
    if (_active_page === "home" && !reload) {
        return;
    }

    let offline_income = 0;

    if (_show_offline_income) {
        //TODO: get income from API
        offline_income = 5123;
    }

    if (offline_income === 0) {
        _show_offline_income = false;
    }

    await getUserData();
    changeActiveButton('home');

    const view = {
        avatar: _player.avatar_link,
        name: _player.name,
        balance: _player.balance,
        current_energy: _player.current_energy,
        max_energy: _player.max_energy,
        level: _player.player_level.level,
        pnl: _player.average_cards_profit,
        text: _translations[_player.language_code].home,
        text_levels: _translations[_player.language_code].levels,
        language_code: _player.language_code,
        show_offline_income: _show_offline_income,
        offline_income: offline_income,
    }

    const template = _page_templates['home'];
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);

    drawLevelBars();

    _wa.BackButton.hide();
    document.dispatchEvent(new Event('loadHome'));
    _toast.hide();
    _active_page = "home";
    clearInterval(_actives_daily_interval);
    _show_offline_income = false;
}

async function loadFriendsPage(reload = false) {
    if (_active_page === "friends" && !reload) {
        return;
    }

    console.log('Loading friends page');
    changeActiveButton('friends');
    const viewDataPayload = await fetch(`${_base_url}/player/friends/${_player.ref_id}`);
    const viewData = await viewDataPayload.json();
    console.log(viewData);

    for (let item of viewData) {
        item.level_name = _translations[_player.language_code].levels[item.player_level.level].name;
    }

    const view = {
        friends_count: viewData.length,
        ref_id: _player.ref_id,
        friends: viewData,
        text: _translations[_player.language_code].friends
    }

    const template = _page_templates['friends'];
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    _wa.BackButton.show();
    _toast.hide();
    _active_page = "friends";

    clearInterval(_actives_daily_interval);
}

async function loadBoostPage() {
    if (_active_page === "boost") {
        return;
    }

    console.log('Loading boost page');
    changeActiveButton('boost');
    const tasksRequest = await fetch(`${_base_url}/player/${_tg_user.id}/tasks`);
    const tasks = await tasksRequest.json();

    console.log(tasks);

    const view = {
        countdown: new Date(_player.time_to_next_spin * 1000).toISOString().slice(11, 19),
        can_spin: _player.friends_total >= 3,
        can_not_spin: _player.friends_total < 3,
        invites_left: 3 - _player.friends_total,
        timer_hidden: _player.time_to_next_spin <= 0,
        tasks: tasks,
        text: _translations[_player.language_code].boost
    }

    const template = _page_templates['boost'];
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    document.dispatchEvent(new Event('loadBoost'));
    _wa.BackButton.show();
    _toast.hide();
    _active_page = "boost";

    clearInterval(_actives_daily_interval);
}

async function loadActivesPage(tab = 'round', reload = false) {
    if (_active_page === `actives_${tab}` && !reload) {
        return;
    }

    changeActiveButton('actives');
    _current_actives_tab = tab;

    let data = await loadActives(tab);
    let total_income = 0;
    let total_purchased = 0;

    for (let item of data) {
        if (item.level > 0) {
            total_purchased++;
            total_income += item.income;
        }
    }

    _actives_daily_countdown = 46325;

    const view = {
        tab_rounds: tab === 'round',
        tab_directions: tab === 'direction',
        tab_projects: tab === 'project',
        tab_specials: tab === 'special',
        header_notification: `${_translations[_player.language_code].actives.header_actives}: ${total_purchased} | ${_translations[_player.language_code].actives.header_income}: ${total_income}`,
        items: data,
        text: _translations[_player.language_code].actives,
        daily: {
            question: "Какая криптовалюта крупнейшая по капитализации?",
            answers: [
                'Bitcoin',
                'Ethereum',
                'TON'
            ],
            reward: 5000,
            countdown_text: new Date(_actives_daily_countdown * 1000).toISOString().slice(11, 16)
        },
        daily_active: true,
    };

    const template = _page_templates['actives'];
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    _wa.BackButton.show();

    if (!reload) {
        _toast.hide();
    }
    _active_page = `actives_${tab}`;
    document.dispatchEvent(new Event('loadActives'));
}

async function loadAirdropPage() {
    if (_active_page === "airdrop") {
        return;
    }

    changeActiveButton('airdrop');

    const view = {
        balance: _player.balance,
        text: _translations[_player.language_code].airdrop
    }

    const template = _page_templates['airdrop'];
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    _wa.BackButton.show();
    _toast.hide();
    _active_page = "airdrop";

    clearInterval(_actives_daily_interval);
}