document.addEventListener('preload', async () => {
    console.log('loadscreen event');
    _wa = window.Telegram.WebApp;
    _wa.headerColor = '#01290F';
    _wa.backgroundColor = '#01290F';
    _wa.expand();

    _wa.BackButton.onClick(() => {
        loadHomePage();
    });

    const toastEl = document.getElementById('toast');
    _toast = new bootstrap.Toast(toastEl);

    await loadHomePage();
    document.getElementById('bottomMenu').classList.remove('d-none');
    // await loadBoostPage();
    // await loadFriendsPage();
});

async function preload() {
    const scripts = [
        '/scripts/bootstrap.bundle.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.1.0/mustache.min.js',
        '/scripts/index.js?v=32',
        '/scripts/home.js?v=32',
        '/scripts/navigate.js?v=32',
        '/scripts/boost.js?v=32',
        '/scripts/actives.js?v=32',
    ];
    const styles = [
        '/scss/bootstrap.min.css',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        '/scss/index.css?v=32',
        '/scss/home.css?v=32',
        '/scss/friends.css?v=32',
        '/scss/boost.css?v=32',
        '/scss/actives.css?v=32',
        '/scss/airdrop.css?v=32',
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
        script.src = url;
        document.head.appendChild(script);
        eval(payload);
    }
}