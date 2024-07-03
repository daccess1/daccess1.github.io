var tapsCount = 0;
var tapsTimeout, animateTimeout;
var energyCurrent, homePlayerBalance, homeTapContainer;
var energyInterval;

function tapEventListener(event) {
    console.log('tap', event);
    console.log('type', event.type);
    console.log(event.changedTouches[0].clientX);
    let posX, posY;

    if (event.type === 'touchstart') {
        console.log('touchend evt pos')
        posX = event.changedTouches[0].clientX;
        posY = event.changedTouches[0].clientY;
    } else {
        posX = event.pageX;
        posY = event.pageY;
    }

    console.log(posX, posY);

    if (_player.current_energy > 0) {
        _player.current_energy--;
        energyCurrent.innerHTML = _player.current_energy;

        _player.balance += _player.tap_increment;
        homePlayerBalance.innerHTML = _player.balance;

        homeTapContainer.classList.add('tapGame--tapped');
        drawTapResult(posX, posY);
        tapsCount++;
        clearTimeout(tapsTimeout);
    }
}

document.addEventListener('loadHome', () => {
    console.log('load home event');
    const target = document.getElementById("tapGame--game");
    homeTapContainer = document.getElementById('tapGame');
    energyCurrent = document.getElementById('level--energyValueCurrent');
    homePlayerBalance = document.getElementById('screenHeader--balance');
    const langSelect =  document.getElementById('langSelect');

    langSelect.value = _player.language_code;

    clearInterval(energyInterval);
    energyInterval = setInterval(() => {
        if (_player.current_energy < _player.max_energy) {
            _player.current_energy++;
        }

        energyCurrent.innerHTML = _player.current_energy;
    }, 1000);

    const eventParams = { passive: false };
    target.addEventListener('touchcancel', ignore, eventParams);
    target.addEventListener('touchend', ignore, eventParams);

    function ignore(e) {
        e.preventDefault();
    }

    ['mousedown', 'touchstart'].forEach(eventType => {
    // ['click'].forEach(eventType => {
        target.addEventListener(eventType, tapEventListener);
    });

    ['mouseup', 'mouseleave', 'touchend'].forEach(eventType => {
        target.addEventListener(eventType, (e) => {
            console.log(eventType, e.type);
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
                homeTapContainer.classList.remove('tapGame--tapped');
            }, 100);
        });
    });

    langSelect.addEventListener('change', () => {
        const newLang = langSelect.value;
        console.log('lang change:', newLang);
        _lang = newLang;
        _player.language_code = newLang;
        renderBottomMenu();
        loadHomePage();
    });
});

async function showLevelModal() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        initialSlide: _player.player_level.level - 1,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const response = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/player/${_tg_user.id}/stats`);
    const data = await response.json();

    document.getElementById('levelModal--statsValue--totalActives').innerHTML = data.total_investments_count;
    document.getElementById('levelModal--statsValue--totalSpent').innerHTML = data.total_investments_amout;
    document.getElementById('levelModal--statsValue--totalIncome').innerHTML = data.total_income_from_cards;
    document.getElementById('levelModal--statsValue--pnl').innerHTML = data.total_average_cards_profit_percent + '%';
    document.getElementById('levelModal--statsValue--rounds').innerHTML = data.card_type_distribution.round + '%';
    document.getElementById('levelModal--statsValue--directions').innerHTML = data.card_type_distribution.direction + '%';
    document.getElementById('levelModal--statsValue--projects').innerHTML = data.card_type_distribution.project + '%';
    document.getElementById('levelModal--statsValue--specials').innerHTML = data.card_type_distribution.special + '%';
    document.getElementById('levelModal--rankingCurrent').innerHTML = data.leaderboard_position;
    document.getElementById('levelModal--rankingTotal').innerHTML = data.total_players;

    document.getElementById('levelModal').classList.remove('d-none');
    _wa.BackButton.show();
}


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