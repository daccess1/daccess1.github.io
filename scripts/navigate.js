var page_version = 58;

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

async function loadHomePage() {
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
        language_code: _player.language_code
    }

    const templateRequest = await fetch(`/pages/home/home.template.html?v=${page_version}`);
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);

    for (let i = 1; i <= view.level; i++) {
        document.getElementsByClassName(`level--bar--${i}`)[0].classList.add('level--bar--active');
    }

    _wa.BackButton.hide();
    document.dispatchEvent(new Event('loadHome'));
}

async function loadFriendsPage() {
    console.log('Loading friends page');
    changeActiveButton('friends');
    const viewDataPayload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/friends/${_player.ref_id}`);
    const viewData = await viewDataPayload.json();

    const view = {
        friends_count: viewData.length,
        ref_id: _player.ref_id,
        friends: viewData,
        text: _translations[_player.language_code].friends
    }

    const templateRequest = await fetch(`/pages/friends/friends.template.html?v=${page_version}`);
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    _wa.BackButton.show();
}

async function loadBoostPage() {
    console.log('Loading boost page');
    changeActiveButton('boost');
    // const viewDataPayload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/friends/${_player.ref_id}`);
    // const viewData = await viewDataPayload.json();

    const view = {
        countdown: new Date(_player.time_to_next_spin * 1000).toISOString().slice(11, 19),
        can_spin: _player.friends_total >= 3,
        can_not_spin: _player.friends_total < 3,
        invites_left: 3 - _player.friends_total,
        timer_hidden: _player.time_to_next_spin <= 0,
        text: _translations[_player.language_code].boost
    }
    _boostCountdownTime = 5;

    const templateRequest = await fetch(`/pages/boost/boost.template.html?v=${page_version}`);
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    document.dispatchEvent(new Event('loadBoost'));
    _wa.BackButton.show();
}

async function loadActivesPage(tab = 'round') {
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

    const view = {
        tab_rounds: tab === 'round',
        tab_directions: tab === 'direction',
        tab_projects: tab === 'project',
        tab_specials: tab === 'special',
        header_notification: `${_translations[_player.language_code].actives.header_actives}: ${total_purchased} | ${_translations[_player.language_code].actives.header_income}: ${total_income}`,
        items: data,
        text: _translations[_player.language_code].actives
    };

    const templateRequest = await fetch(`/pages/actives/actives.template.html?v=${page_version}`);
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    _wa.BackButton.show();
}

async function loadAirdropPage() {
    changeActiveButton('airdrop');

    const view = {
        balance: _player.balance,
        text: _translations[_player.language_code].airdrop
    }

    const templateRequest = await fetch(`/pages/airdrop/airdrop.template.html?v=${page_version}`);
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    _wa.BackButton.show();
}