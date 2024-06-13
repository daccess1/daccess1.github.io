let _wa;
let _tg_user;
let _player;
let _toast;


window.addEventListener('load', () => {
    _wa = window.Telegram.WebApp;
    getUserData().then(() => {
        _wa.expand();
    });

    _wa.BackButton.onClick(() => {
        loadHomePage();
    });

    const myToastEl = document.getElementById('toast');
    _toast = new bootstrap.Toast(myToastEl);

    loadActivesPage();
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
    let userPayload = decodeURIComponent(_wa.initData);
    userPayload = userPayload.substring(userPayload.indexOf('user=') + 5, userPayload.lastIndexOf('}') + 1);

    if (userPayload) {
        _tg_user = JSON.parse(userPayload);
    }

    if (_tg_user) {
        const playerPayload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/${_tg_user.id}`);
        _player = await playerPayload.json();
    }
}