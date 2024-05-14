window.addEventListener('load', () => {
    window.Telegram.WebApp.expand();
    document.getElementById('loadResult').innerHTML = window.Telegram.WebApp.initData;
});