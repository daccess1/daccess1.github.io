let _wa;
let _tg_user;
let _player;
let _toast;


window.addEventListener('load', async () => {
    _wa = window.Telegram.WebApp;
    await getUserData().then(() => {
        _wa.expand();
    });

    _wa.BackButton.onClick(() => {
        loadHomePage();
    });

    const toastEl = document.getElementById('toast');
    _toast = new bootstrap.Toast(toastEl);

    await loadHomePage();
});

function inviteButtonClick() {
    window.Telegram.WebView.postEvent(
        "web_app_open_tg_link",
        () => {
            console.log('postEvent callback')
        },
        {
            path_full: "/share/url?text=Share"
        }
    );
}

function copyUrlButtonClick() {
    navigator.clipboard.writeText("Umperium bot share url");
}
``
async function getUserData() {
    // let userPayload = decodeURIComponent(_wa.initData);
    // userPayload = userPayload.substring(userPayload.indexOf('user=') + 5, userPayload.lastIndexOf('}') + 1);
    //
    // if (userPayload) {
    //     _tg_user = JSON.parse(userPayload);
    // }

    _tg_user = {
        id: 131705404
    }

    if (_tg_user) {
        const playerPayload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/${_tg_user.id}`);
        _player = await playerPayload.json();
        _player.tap_increment = 10;
        console.log(_player);
    }
}

function backendAPIRequest(url, method = 'post', data = null) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            console.log('XHR type:', xhr.responseType);
            var status = xhr.status;
            if (status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(status);
            }
        };
        xhr.send(data);
    });
}