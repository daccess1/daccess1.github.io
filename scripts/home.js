async function showLevelModal() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    document.getElementById('levelModal').classList.remove('d-none');
    _wa.BackButton.show();
}

var tapsCount = 0;
var tapsTimeout, animateTimeout;

document.addEventListener('loadHome', () => {
    const target = document.getElementById("tapGame--game");
    const container = document.getElementById('tapGame');
    const energyCurrent = document.getElementById('level--energyValueCurrent');
    const playerBalance = document.getElementById('screenHeader--balance');
    showLevelModal();

    setInterval(() => {
        if (_player.current_energy < _player.max_energy) {
            _player.current_energy++;
        }

        energyCurrent.innerHTML = _player.current_energy;
    }, 1000);

    // ['mousedown', 'touchstart'].forEach(eventType => {
    ['mousedown'].forEach(eventType => {
        target.addEventListener(eventType, (event) => {
            if (_player.current_energy > 0) {
                _player.current_energy--;
                energyCurrent.innerHTML = _player.current_energy;

                _player.balance += _player.tap_increment;
                playerBalance.innerHTML = _player.balance;

                container.classList.add('tapGame--tapped');
                drawTapResult(event.pageX, event.pageY);
                tapsCount++;
                clearTimeout(tapsTimeout);
            }
        });
    });
    ['mouseup', 'mouseleave'].forEach(eventType => {
        target.addEventListener(eventType, () => {
            tapsTimeout = setTimeout(() => {
                if (tapsCount > 0) {
                    backendAPIRequest(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/${_tg_user.id}/update_taps`, 'post', {
                        "taps": tapsCount
                    }).then(res => {
                        console.log(res);
                    });
                }
                tapsCount = 0;
            }, 1000);
            animateTimeout = setTimeout(() => {
                container.classList.remove('tapGame--tapped');
            }, 100);
        });
    });
});

function drawTapResult(x, y) {
    var el = document.createElement('div');
    el.innerHTML = '+' + _player.tap_increment;
    el.classList.add('tapResult');
    el.style.left = `${x - 20}px`;
    el.style.top = `${y - 20}px`;
    document.body.appendChild(el);

    el.animate([
        { transform:'translateY(0px)', opacity: 1 },
        { transform:'translateY(-150px)', opacity: 0 },
    ], {
        duration: 500,
        iterations: 1,
    });

    setTimeout(() => {
        el.remove();
    }, 500);
}