let _wa;
let _tg_user;
let _player;
let _toast;
let _current_actives_tab = 'round';
let _start_param = null;

window.addEventListener('load', async () => {
    _wa = window.Telegram.WebApp;
    _wa.headerColor = '#01290F';
    _wa.backgroundColor = '#01290F';
    _wa.expand();

    await getUserData();

    _wa.BackButton.onClick(() => {
        loadHomePage();
    });

    const toastEl = document.getElementById('toast');
    _toast = new bootstrap.Toast(toastEl);

    await loadHomePage();
    // await loadBoostPage();
    // await loadFriendsPage();
});

function inviteButtonClick() {
    window.Telegram.WebView.postEvent(
        "web_app_open_tg_link",
        () => {
            console.log('postEvent callback')
        },
        {
            path_full: `https://t.me/share/url?text=${encodeURI('Share bot url https://t.me/big_bad_bot?ref_id=123')}`
        }
    );
}

function copyUrlButtonClick() {
    navigator.clipboard.writeText("Umperium bot share url");
}
``
async function getUserData() {
    let userPayload = decodeURIComponent(_wa.initData);
    userPayload = userPayload.substring(userPayload.indexOf('user=') + 5, userPayload.lastIndexOf('}') + 1);

    if (userPayload) {
        _tg_user = JSON.parse(userPayload);
        console.log(_tg_user);
    }

    const urlParams = new URLSearchParams(decodeURIComponent(window.location.href));
    if (urlParams.has('start_param')) {
        _start_param = urlParams.get('start_param');
        console.log('Start param', _start_param);
    }

    // _tg_user = {
    //     id: 131705404
    // }

    if (_tg_user) {
        const playerPayload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/${_tg_user.id}`);
        if (playerPayload.status === 200) {
            _player = await playerPayload.json();
            _player.tap_increment = 10;
            _player.friends_total = 4;
            console.log(_player);
        } else if (playerPayload.status === 404) {
            const body = {
                "user_id": _tg_user.id,
                "user_name": _tg_user.first_name + ' ' + _tg_user.last_name,
                "inviter_ref_id": _start_param,
                "avatar_link": "https://storage.yandexcloud.net/umperium-storage/uploads/test-upload.jpg"
            }
            const response = await backendAPIRequest('https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player', 'post', body);
            if (response.status === 200) {
                const playerPayload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/${_tg_user.id}`);
                _player = await playerPayload.json();
            }

        }
    }
}

async function backendAPIRequest(url, method = 'post', data = null) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            console.log('XHR type:', xhr.responseType);
            var status = xhr.status;
            if (status === 200) {
                resolve({
                    status: status,
                    body: xhr.responseText
                });
            } else {
                reject({
                    status: status
                });
            }
        };
        xhr.send(data ? JSON.stringify(data) : null);
    });
}