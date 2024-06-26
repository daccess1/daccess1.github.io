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
    changeActiveButton('home');

    const view = {
        avatar: _player.avatar_link,
        name: _player.name,
        balance: _player.balance,
        current_energy: _player.current_energy,
        max_energy: _player.max_energy,
        level: 4,
        pnl: 453
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
        friends: viewData
    }

    const templateRequest = await fetch("/pages/friends/page.template.html?v=2");
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
        countdown: new Date(5 * 1000).toISOString().slice(11, 19)
    }
    _boostCountdownTime = 5;

    const templateRequest = await fetch("/pages/boost/boost.template.html?v=2");
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    document.dispatchEvent(new Event('loadBoost'));
    _wa.BackButton.show();
}

async function loadActivesPage() {
    changeActiveButton('actives');


    await loadRounds();

    // const view = {
    //     header_notification: "5 раундов - 15 000",
    //     items: [
    //         {
    //             icon: "/img/actives-item-icon.svg",
    //             title: "Pre-seed",
    //             level: "12",
    //             income: "100%",
    //             start_price: "35 000",
    //             income_price: "15 000",
    //             income_value: "+10",
    //             text: "Торговые пары, включающие биткойн и другую криптовалюту",
    //             id: 1
    //         },
    //         {
    //             icon: "/img/actives-item-icon-2.svg",
    //             title: "Seed",
    //             level: "1",
    //             income: "150%",
    //             start_price: "40 000",
    //             income_price: "20 000",
    //             income_value: "+15",
    //             text: "Lorem ipsum dolor sit amet",
    //             id: 2
    //         }
    //     ],
    // }

    const templateRequest = await fetch("/pages/actives/actives.template.html?v=1");
    const template = await templateRequest.text();
    document.getElementById('pageContent').innerHTML = Mustache.render(template, view);
    _wa.BackButton.show();
}