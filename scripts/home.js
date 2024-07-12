var tapsCount = 0;
var tapsTimeout, animateTimeout;
var energyCurrent, homePlayerBalance, homeTapContainer;
var energyInterval;

function tapEventListener(event) {
    console.log('tap', event);
    console.log('type', event.type);
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

        if (_player.balance >= _levels[_player.player_level.level + 1]) {
            _player.player_level.level++;

            const image = document.getElementById('tapGame--player');
            image.src = `/img/character-level-${_player.player_level.level}.png.webp`;
            image.srcset = `/img/character-level-${_player.player_level.level}@2x.png.webp 2x, /img/character-level-${_player.player_level.level}@3x.png.webp 3x`;

            document.getElementById('level--infoNumberValue').innerHTML = _player.player_level.level;
        }

        homeTapContainer.classList.add('tapGame--tapped');
        drawTapResult(posX, posY);
        drawLevelBars();
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
    const selectedLangButton = document.getElementsByClassName(`changeLangButton--${_player.language_code}`)[0];

    selectedLangButton.classList.add('changeLangButton--active');

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
                    backendAPIRequest(`/player/${_tg_user.id}/update_taps`, 'post', {
                        "taps": tapsCount
                    }).then(res => {
                        console.log(res);
                    });
                }
                tapsCount = 0;
            }, 300);
            animateTimeout = setTimeout(() => {
                homeTapContainer.classList.remove('tapGame--tapped');
            }, 100);
        });
    });
});

async function showLevelModal() {
    _active_page = "level_modal";

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

    const response = await fetch(`${_base_url}/player/${_tg_user.id}/stats`);
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

    const progress = document.getElementsByClassName('progress--level');
    for (let el of progress) {
        el.classList.add('d-none');
    }
    const scores = document.getElementsByClassName('progress--minScore');
    for (let el of scores) {
        el.classList.remove('d-none');
    }

    const progressEL = document.getElementById(`progress--level--${_player.player_level.level}`);
    progressEL.classList.remove('d-none');
    document.getElementById(`progress--minScore--${_player.player_level.level}`).classList.add('d-none');

    const width = Math.floor(_player.balance / _levels[_player.player_level.level + 1] * 100);
    progressEL.getElementsByClassName('progress-bar')[0].style.width = `${width}%`;
    progressEL.getElementsByClassName('progress-bar')[0].getElementsByClassName('progress--levelText')[0].innerHTML = `${_player.balance} / ${_levels[_player.player_level.level + 1]}`;

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

async function changeLanguage(el) {
    const newLang = el.dataset.lang;
    if (_player.language_code === newLang) {
        return;
    }

    console.log('lang change:', newLang);
    _player.language_code = newLang;
    await backendAPIRequest(`/player/${_tg_user.id}/lang`, 'post', {
        language_code: newLang
    });
    renderBottomMenu();
    console.log('Reloading home');
    loadHomePage(true);
}

function drawLevelBars() {
    const pointsPerBar = Math.floor(_levels[_player.player_level.level + 1] / 9);

    let coloredBars = 0;
    let barsScore = 0;

    if (_player.player_level.level === 7) {
        coloredBars = 9;
    } else {
        while (barsScore < _player.balance) {
            barsScore += pointsPerBar;
            coloredBars++;
        }
    }

    for (let i = 1; i <= coloredBars; i++) {
        document.getElementsByClassName(`level--bar--${i}`)[0].classList.add('level--bar--active');
    }
    for (let i = coloredBars + 1; i <= 9; i++) {
        document.getElementsByClassName(`level--bar--${i}`)[0].classList.remove('level--bar--active');
    }
}

function hideIncomeModal() {
    document.getElementById('incomeModal').classList.add('incomeModal--hidden');
    document.getElementById('incomeModal--backdrop').classList.add('d-none');
}