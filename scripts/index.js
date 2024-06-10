let _wa;


window.addEventListener('load', () => {
    _wa = window.Telegram.WebApp;
    _wa.expand();

    console.log(_wa.initData);
    console.log(getUserData());

    _wa.BackButton.onClick(() => {
        navigations.pop();
        _wa.BackButton.hide();
    });
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

function getUserData() {
    const decoded = decodeURI(_wa.initData);
    return decoded;
}

function navigate(page) {
    _wa.BackButton.show();
}