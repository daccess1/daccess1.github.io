function showActivesModal(el) {
    const modal = document.getElementById('activesModal');
    const blur = document.getElementById('activesBlur');

    document.getElementById('activesModal--titleContent').innerHTML = el.dataset.title;
    document.getElementById('activesModal--logoImg').src = el.dataset.icon;
    document.getElementById('activesModal--incomePrice').innerHTML = el.dataset.incomePrice;
    document.getElementById('activesModal--incomeValue').innerHTML = el.dataset.incomeValue;
    document.getElementById('activesModal--text').innerHTML = el.dataset.text;
    document.getElementById('activesModal--level').innerHTML = el.dataset.level;
    document.getElementById('activesModal--income').innerHTML = el.dataset.income;
    document.getElementById('activesModal--startPrice').innerHTML = el.dataset.startPrice;

    document.getElementById('body').classList.add('modalShown');
    blur.classList.remove('activesBlur--hidden');
    modal.classList.remove('activesModal--hidden');
}

function hideActivesModal() {
    document.getElementById('activesBlur').classList.add('activesBlur--hidden');
    document.getElementById('activesModal').classList.add('activesModal--hidden');
    document.getElementById('body').classList.remove('modalShown');
}

async function loadRounds() {
    const payload = await fetch(`https://bba7p9tu9njf9teo8qkf.containers.yandexcloud.net/cards/player/${_tg_user.id}/round`);
    const view = await payload.json();

    console.log(view);
}