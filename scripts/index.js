function copyUrlButtonClick() {
    navigator.clipboard.writeText(`https://t.me/big_bad_bot/bigbadgame?startapp${_player.ref_id}`);
    document.getElementById("toast-body").innerHTML = `Ссылка скопирована`;
    _toast.show();
}

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
    }

    if (!_tg_user) {
        _tg_user = {
            id: 131705404,
            language_code: 'ru'
        }
    }

    if (!_available_translations.includes(_tg_user.language_code)) {
        _tg_user.language_code = 'en';
    }

    if (_tg_user) {
        console.log('Loading player');
        let playerPayload;
        try {
            playerPayload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/${_tg_user.id}`);
        } catch (ex) {

        }
        if (playerPayload.status === 200) {
            _player = await playerPayload.json();
            _player.tap_increment = 10;
            _player.language_code = _lang;
            console.log(_player);
        } else {
            const body = {
                "user_id": _tg_user.id,
                "user_name": _tg_user.first_name + ' ' + _tg_user.last_name,
                "inviter_ref_id": _start_param,
                "avatar_link": ""
            }
            const response = await backendAPIRequest('https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player', 'post', body);
            if (response.status === 201) {
                _player = JSON.parse(response.body);
            }
        }

        clearInterval(_wheel_interval);
        _wheel_interval = setInterval(() => {
            _player.time_to_next_spin--;
            if (_player.time_to_next_spin <= 0) {
                _player.time_to_next_spin = 0;
                clearInterval(_wheel_interval);
            }
        }, 1000);
    }
}

async function backendAPIRequest(url, method = 'post', data = null) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var status = xhr.status;
            if (status < 300) {
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

function renderBottomMenu() {
    document.getElementById('bottomMenu--itemText--home').innerHTML = _translations[_player.language_code].menu.home;
    document.getElementById('bottomMenu--itemText--actives').innerHTML = _translations[_player.language_code].menu.actives;
    document.getElementById('bottomMenu--itemText--friends').innerHTML = _translations[_player.language_code].menu.friends;
    document.getElementById('bottomMenu--itemText--boost').innerHTML = _translations[_player.language_code].menu.boost;
    document.getElementById('bottomMenu--itemText--airdrop').innerHTML = _translations[_player.language_code].menu.airdrop;
}