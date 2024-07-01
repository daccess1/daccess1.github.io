let _boostCountdownTime = 10;
let _wheelRotated = !!_boostCountdownTime;

document.addEventListener("loadBoost", function() {
    console.log('load');
    const screenTopNotification = document.getElementById("screenTopNotification");
    const timer = document.getElementById("screenTopNotification--boostCountdown");

    const countDown = setInterval(() => {
        _boostCountdownTime--;
        timer.innerHTML = new Date(_boostCountdownTime * 1000).toISOString().slice(11, 19);

        if (_boostCountdownTime <= 0) {
            _wheelRotated = false;
            window.clearInterval(countDown);
            screenTopNotification.style.display = "none";
        }
    }, 1000);
});

async function spinWheel() {
    if (_player.friends_total < 3) {
        console.log('Navigate to friends page');
        return await loadFriendsPage();
    }
    if (_wheelRotated || _boostCountdownTime) {
        return;
    }

    const sectors = [
        0, 1000, -1, 1000, 3000, 10000, 0, 1000, 5000, 3000
    ]
    // let targetSector = Math.floor(Math.random() * 10);
    //
    // while (targetSector === 2) {
    //     targetSector = Math.floor(Math.random() * 10) + 1;
    // }

    const result = await backendAPIRequest(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/${_tg_user.id}/spin_wheel`);
    console.log(result);

    let div = document.getElementById('wheelOfFortune--spinner'),
        deg = 3600 - targetSector * 36 - Math.floor(Math.random() * 25);

    div.style.transform = 'rotate('+deg+'deg)';
    div.style.webkitTransform = 'rotate('+deg+'deg)';

    console.log(`Target sector: ${targetSector}, points: ${sectors[targetSector]}`);
    _wheelRotated = true;


    const screenTopNotification = document.getElementById("screenTopNotification");
    const timer = document.getElementById("screenTopNotification--boostCountdown");
    _boostCountdownTime = 7200;
    timer.innerHTML = new Date(_boostCountdownTime * 1000).toISOString().slice(11, 19);

    setTimeout(() =>{
        screenTopNotification.style.display = "block";
        document.getElementById("toast-body").innerHTML = `Ваш выигрыш: ${sectors[targetSector]} очков`;
        _toast.show();

        const countDown = setInterval(() => {
            _boostCountdownTime--;
            timer.innerHTML = new Date(_boostCountdownTime * 1000).toISOString().slice(11, 19);

            if (_boostCountdownTime <= 0) {
                _wheelRotated = false;
                window.clearInterval(countDown);
                screenTopNotification.style.display = "none";
            }
        }, 1000);

    }, 3000);
}

async function applyPromocode() {
    const input = document.getElementById('promocodeValue');
    const code = input.value;

    console.log(code);

    try {
        const response = await backendAPIRequest(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/${_tg_user.id}/redeem_promo_code`, "post", {
            code: code
        });
        if (response.status === 200) {
            const data = JSON.parse(response.body);
            document.getElementById("toast-body").innerHTML = `Промокод применен! Получено ${data.balance}`;
            _toast.show();
        } else {
            document.getElementById("toast-body").innerHTML = `Не удалось применить промокод`;
            _toast.show();
        }
    } catch (ex) {
        document.getElementById("toast-body").innerHTML = `Не удалось применить промокод`;
        _toast.show();
    }
}