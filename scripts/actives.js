function showActivesModal(el) {
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
    active_modal_id = el.dataset.id;

    console.log(`Show modal for ${active_modal_id}`);

    document.getElementById('body').classList.add('modalShown');
    blur.classList.remove('activesBlur--hidden');
    modal.classList.remove('activesModal--hidden');
    content.classList.add('blur');
}

function hideActivesModal() {
    document.getElementById('activesBlur').classList.add('activesBlur--hidden');
    document.getElementById('activesModal').classList.add('activesModal--hidden');
    document.getElementById('body').classList.remove('modalShown');
    document.getElementById('pageContent').classList.remove('blur');
}

async function loadActives(type = 'round') {
    const payload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/cards/player/${_tg_user.id}/${type}`);
    return await payload.json();
}

async function upgradeActive(el) {
    let is_success = await upgradeRequest(el.dataset.id);
    hideActivesModal();

    console.log('Card upgrade result:', is_success);

    if (is_success) {
        document.getElementById("toast-body").innerHTML = _translations[_player.language_code].actives.toast_success;
        _toast.show();
        await loadActivesPage(_current_actives_tab);
    } else {
        document.getElementById("toast-body").innerHTML = _translations[_player.language_code].actives.toast_fail;
        _toast.show();
    }
}

async function upgradeRequest(id) {
    return new Promise(function (resolve, ) {
        let xhr = new XMLHttpRequest();
        xhr.open('post', `https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/cards/player/${_tg_user.id}/upgrade`, true);
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