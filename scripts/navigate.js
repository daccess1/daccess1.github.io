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
        pnl: _player.average_cards_profit
    }

    const templateRequest = await fetch("/pages/home/page.template.html?v=2");
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
        friends: viewData
    }

    const templateRequest = await fetch("/pages/friends/page.template.html?v=25");
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
        countdown: new Date(1 * 1000).toISOString().slice(11, 19),
        can_spin: _player.friends_total >= 3,
        can_not_spin: _player.friends_total < 3,
        invites_left: 3 - _player.friends_total
    }
    _boostCountdownTime = 5;

    const templateRequest = await fetch("/pages/boost/boost.template.html?v=2");
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
        header_notification: `активы: ${total_purchased} | доход: ${total_income}`,
        items: data,
    };

    const templateRequest = await fetch("/pages/actives/actives.template.html?v=1");
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    _wa.BackButton.show();
}

async function loadAirdropPage() {
    changeActiveButton('airdrop');

    const view = {
        balance: _player.balance
    }

    const templateRequest = await fetch("/pages/airdrop/airdrop.template.html");
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    _wa.BackButton.show();
}