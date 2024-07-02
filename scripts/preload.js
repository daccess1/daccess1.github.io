var _wa;
var _tg_user;
var _player;
var _toast;
var _current_actives_tab = 'round';
var _start_param = null;
var _wheel_interval;

document.addEventListener('DOMContentLoaded', async () => {
    _wa = window.Telegram.WebApp;
    _wa.headerColor = '#01290F';
    _wa.backgroundColor = '#01290F';
    _wa.expand();
} );

document.addEventListener('preload', async () => {
    console.log('loadscreen event');


    _wa.BackButton.onClick(() => {
        loadHomePage();
    });

    const toastEl = document.getElementById('toast');
    _toast = new bootstrap.Toast(toastEl);

    await loadHomePage();
    document.getElementById('bottomMenu--itemText--home').innerHTML = _translations[_player.language_code].menu.home;
    document.getElementById('bottomMenu--itemText--actives').innerHTML = _translations[_player.language_code].menu.actives;
    document.getElementById('bottomMenu--itemText--friends').innerHTML = _translations[_player.language_code].menu.friends;
    document.getElementById('bottomMenu--itemText--boost').innerHTML = _translations[_player.language_code].menu.boost;
    document.getElementById('bottomMenu--itemText--airdrop').innerHTML = _translations[_player.language_code].menu.airdrop;
    document.getElementById('bottomMenu').style = null;
    document.getElementById('toast').style = null;
    // await getUserData();
    // await loadBoostPage();
    // await loadFriendsPage();
});

async function preload() {
    const ver = 46;

    const scripts = [
        `/scripts/index.js?v=${ver}`,
        `/scripts/bootstrap.bundle.min.js?v=${ver}`,
        `/scripts/mustache.min.js?v=${ver}`,
        `/scripts/swiper-bundle.min.js?v=${ver}`,
        `/scripts/navigate.js?v=${ver}`,
        `/scripts/boost.js?v=${ver}`,
        `/scripts/actives.js?v=${ver}`,
        `/scripts/translations.js?v=${ver}`,
    ];
    const styles = [
        `/scss/bootstrap.min.css?v=${ver}`,
        `/scss/swiper-bundle.min.css?v=${ver}`,
        `/scss/index.css?v=${ver}`,
        `/scss/home.css?v=${ver}`,
        `/scss/friends.css?v=${ver}`,
        `/scss/boost.css?v=${ver}`,
        `/scss/actives.css?v=${ver}`,
        `/scss/airdrop.css?v=${ver}`,
    ];

    let promises = [];
    scripts.forEach(style => {
        const promise = fetchResource(style, 'script');
        promises.push(promise);
    });

    styles.forEach(style => {
        const promise = fetchResource(style, 'style');
        promises.push(promise);
    });

    await Promise.all(promises);

    document.dispatchEvent(new Event('preload'));
}

async function fetchResource(url, type) {
    const response = await fetch(url);
    const payload = await response.text();

    if (type === 'style') {
        const style = document.createElement('style');
        // const head =  || document.getElementsByTagName('head')[0];
        style.rel = 'stylesheet';
        style.innerHTML = payload;
        document.head.appendChild(style);
    }

    if (type === 'script') {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = payload;
        document.body.appendChild(script);
    }
}