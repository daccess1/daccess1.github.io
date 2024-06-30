document.addEventListener('load', async () => {
    _wa = window.Telegram.WebApp;
    _wa.headerColor = '#01290F';
    _wa.backgroundColor = '#01290F';
    _wa.expand();

    const toastEl = document.getElementById('toast');
    _toast = new bootstrap.Toast(toastEl);
});

document.addEventListener('preload', async () => {
    console.log('loadscreen event');

    _wa.BackButton.onClick(() => {
        loadHomePage();
    });

    await loadHomePage();
    document.getElementById('bottomMenu').classList.remove('d-none');
    // await loadBoostPage();
    // await loadFriendsPage();
});

async function preload() {
    const ver = 33;

    const scripts = [
        `/scripts/bootstrap.bundle.min.js?v=${ver}`,
        `/scripts/mustache.min.js?v=${ver}`,
        `/scripts/swiper-bundle.min.js?v=${ver}`,
        `/scripts/index.js?v=${ver}`,
        `/scripts/home.js?v=${ver}`,
        `/scripts/navigate.js?v=${ver}`,
        `/scripts/boost.js?v=${ver}`,
        `/scripts/actives.js?v=${ver}`,
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

    console.log('promises finished');
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
        document.head.appendChild(script);
        eval(payload);
    }
}