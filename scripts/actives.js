document.addEventListener('loadActives', async () => {
    console.log('loadActives')

    clearInterval(_actives_daily_interval);
    _actives_daily_interval = setInterval(() => {
        _actives_daily_countdown--;

        if (_actives_daily_countdown <= 0) {
            try {
                const wrapper = document.getElementById('dailyCardWrapper');

                if (wrapper) {
                    wrapper.classList.add('d-none');
                }
            } catch (ex) {

            }

            hideActivesModal();
            console.log('Hide actives daily');
            clearInterval(_actives_daily_interval);
            return;
        }

        document.getElementById("dailyCard--timerCountdown").innerHTML = new Date(_actives_daily_countdown * 1000).toISOString().slice(11, 16);;
    }, 1000);
});

function showActivesModal(el) {
    resetOfflineTimeout();

    const modal = document.getElementById('activesModal');
    const blur = document.getElementById('activesBlur');
    const content = document.getElementById('pageContent');

    document.getElementById('activesModal--titleContent').innerHTML = el.dataset.title;
    document.getElementById('activesModal--logoImg').src = el.dataset.icon;
    document.getElementById('activesModal--incomePrice').innerHTML = el.dataset.incomePrice;
    document.getElementById('activesModal--incomeValue').innerHTML = el.dataset.incomeValue;
    document.getElementById('activesModal--text').innerHTML = el.dataset.text;
    document.getElementById('activesModal--level').innerHTML = el.dataset.level;
    document.getElementById('activesModal--income').innerHTML = el.dataset.income;
    document.getElementById('activesModal--startPrice').innerHTML = el.dataset.startPrice;
    document.getElementById('activesModal--button').dataset.id = el.dataset.id;

    document.getElementById('body').classList.add('modalShown');
    blur.classList.remove('activesBlur--hidden');
    modal.classList.remove('activesModal--hidden');
    content.classList.add('blur');
}

function showActivesModalDaily() {
    resetOfflineTimeout();

    const modal = document.getElementById('activesModalDaily');
    const blur = document.getElementById('activesBlur');
    const content = document.getElementById('pageContent');

    document.getElementById('body').classList.add('modalShown');
    blur.classList.remove('activesBlur--hidden');
    modal.classList.remove('activesModal--hidden');
    content.classList.add('blur');
}

function hideActivesModal() {
    resetOfflineTimeout();

    console.log('Hiding actives modals');
    document.getElementById('activesBlur').classList.add('activesBlur--hidden');
    document.getElementById('activesModal').classList.add('activesModal--hidden');
    document.getElementById('activesModalDaily').classList.add('activesModal--hidden');
    document.getElementById('body').classList.remove('modalShown');
    document.getElementById('pageContent').classList.remove('blur');
}

async function loadActives(type = 'round') {
    resetOfflineTimeout();

    const payload = await fetch(`${_base_url}/cards/player/${_tg_user.id}/${type}`);
    return await payload.json();
}

async function loadDaily() {
    const payload = await fetch(`${_base_url}/player/${_tg_user.id}/daily`);
    return await payload.json();
}

async function upgradeActive(el) {
    resetOfflineTimeout();

    let is_success = await upgradeRequest(el.dataset.id);
    hideActivesModal();

    console.log('Card upgrade result:', is_success);

    if (is_success) {
        document.getElementById("toast-body").innerHTML = _translations[_player.language_code].actives.toast_success;
        _toast.show();
        await loadActivesPage(_current_actives_tab, true);
    } else {
        document.getElementById("toast-body").innerHTML = _translations[_player.language_code].actives.toast_fail;
        _toast.show();
    }
}

async function upgradeRequest(id) {
    return new Promise(function (resolve, ) {
        let xhr = new XMLHttpRequest();
        xhr.open('post', `${_base_url}/cards/player/${_tg_user.id}/upgrade`, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                resolve(true);
            } else {
                resolve(false);
            }
        };
        xhr.send(JSON.stringify({
            card_id: id
        }));
    });
}

async function dailyAnswerClick(el) {
    const answer = el.dataset.answer;
    console.log(answer);

    const response = await backendAPIRequest(`/player/${_tg_user.id}/daily`, 'post', {
        value: answer
    });

    console.log(response);

    if (response.body === '"wrong answer"') {
        console.log('Wrong answer');
    } else {
        console.log('Correct answer');
    }


    hideActivesModal();

    // document.getElementById("toast-body").innerHTML = `${_translations[_player.language_code].airdrop.error_insufficient_funds}`;
    // _toast.show();
}