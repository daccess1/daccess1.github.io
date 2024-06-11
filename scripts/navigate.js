function backendAPIRequest(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = function () {
            console.log('XHR type:', xhr.responseType);
            var status = xhr.status;
            if (status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
}

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

function loadHomePage() {
    changeActiveButton('home');
    _wa.BackButton.hide();
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