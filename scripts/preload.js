var _wa;
var _tg_user;
var _player;
var _toast;
var _current_actives_tab = 'round';
var _start_param = null;
var _wheel_interval;
var _active_page = 'loadscreen';
var _levels = {
    1: 0,
    2: 5000,
    3: 25000,
    4: 100000,
    5: 1000000,
    6: 10000000,
    7: 50000000,
    8: 100000000
}
var _actives_daily_interval;
var _actives_daily_countdown;

document.addEventListener('DOMContentLoaded', async () => {
    _wa = window.Telegram.WebApp;
    _wa.headerColor = '#295067';
    _wa.backgroundColor = '#295067';
    // _wa.headerColor = '#01290F';
    // _wa.backgroundColor = '#01290F';
    _wa.expand();
} );

document.addEventListener('preload', async () => {
    console.log('loadscreen event');


    _wa.BackButton.onClick(() => {
        loadHomePage();
        _active_page = "home";
    });

    const toastEl = document.getElementById('toast');
    _toast = new bootstrap.Toast(toastEl);

    await loadHomePage();
    _wa.headerColor = '#01290F';
    _wa.backgroundColor = '#01290F';
    renderBottomMenu();
    document.getElementById('bottomMenu').style = null;
    document.getElementById('toast').style = null;
    document.getElementById('body').style.backgroundColor = '#01290F';
    // await loadActivesPage('round');
    // await getUserData();
    // await loadBoostPage();
    // await loadFriendsPage();
});

async function preload() {
    const ver = 68;

    const scripts = [
        `/scripts/index.js?v=${ver}`,
        `/scripts/bootstrap.bundle.min.js?v=${ver}`,
        `/scripts/mustache.min.js?v=${ver}`,
        `/scripts/swiper-bundle.min.js?v=${ver}`,
        `/scripts/translations.js?v=${ver}`,
        `/scripts/navigate.js?v=${ver}`,
        `/scripts/boost.js?v=${ver}`,
        `/scripts/actives.js?v=${ver}`,
        `/scripts/airdrop.js?v=${ver}`,
    ];
    const styles = [
        `/scss/bootstrap.min.css?v=${ver}`,
        `/scss/swiper-bundle.min.css?v=${ver}`,
        `/scss/bundle.min.css?v=${ver}`,
        `/scss/tmp.min.css?v=${ver}`
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