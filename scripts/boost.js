let _wheelRotated;
var _countdownInterval;
console.log('boost js');

document.addEventListener('loadBoost', function() {
    console.log('load boost');
    _wheelRotated = !!_player.time_to_next_spin;

    const screenTopNotification = document.getElementById("screenTopNotification");
    const timer = document.getElementById("screenTopNotification--boostCountdown");

    clearInterval(_countdownInterval);
    _countdownInterval = setInterval(() => {
        timer.innerHTML = new Date(_player.time_to_next_spin * 1000).toISOString().slice(11, 19);

        if (_player.time_to_next_spin <= 0) {
            _wheelRotated = false;
            window.clearInterval(_countdownInterval);
            screenTopNotification.style.display = "none";
        }
    }, 1000);
});

async function spinWheel() {
    if (_player.friends_total < 3) {
        console.log('Navigate to friends page');
        return await loadFriendsPage();
    }

    if (_wheelRotated) {
        return ;
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
    if (result.status !== 200) {

    }
    const data = JSON.parse(result.body);
    const targetSector = data.sector_id - 1;

    let div = document.getElementById('wheelOfFortune--spinner'),
        deg = 3600 - targetSector * 36 - Math.floor(Math.random() * 25);

    div.style.transform = 'rotate('+deg+'deg)';
    div.style.webkitTransform = 'rotate('+deg+'deg)';

    console.log(`Target sector: ${targetSector}, points: ${sectors[targetSector]}`);
    _wheelRotated = true;


    const screenTopNotification = document.getElementById("screenTopNotification");
    const timer = document.getElementById("screenTopNotification--boostCountdown");

    timer.innerHTML = new Date(data.time_to_next_spin * 1000).toISOString().slice(11, 19);
    _player.time_to_next_spin = data.time_to_next_spin;
    _player.balance += data.prize;

    setTimeout(() =>{
        screenTopNotification.style.display = "block";
        document.getElementById("toast-body").innerHTML = `${_translations[_player.language_code].boost.spin_success} ${sectors[targetSector]}`;
        _toast.show();

        _countdownInterval = setInterval(() => {
            timer.innerHTML = new Date(_player.time_to_next_spin * 1000).toISOString().slice(11, 19);

            if (_player.time_to_next_spin <= 0) {
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
        console.log(response);
        if (response.status === 200) {
            console.log('Success');
            const data = JSON.parse(response.body);
            _player.balance += data.bonus;
            document.getElementById("toast-body").innerHTML = `${_translations[_player.language_code].boost.promocode_success} ${data.bonus}`;
            _toast.show();
        } else {
            document.getElementById("toast-body").innerHTML = _translations[_player.language_code].boost.promocode_error;
            _toast.show();
        }
    } catch (ex) {
        console.log('Ex:', ex);
        document.getElementById("toast-body").innerHTML = _translations[_player.language_code].boost.promocode_error;
        _toast.show();
    }
}