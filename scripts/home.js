async function showLevelModal() {
    document.getElementById('levelModal').classList.remove('d-none');
    _wa.BackButton.show();
}

document.addEventListener('loadHome', () => {
    const target = document.getElementById("tapGame--game");
    const container = document.getElementById('tapGame');
    ['mousedown', 'touchstart'].forEach(eventType => {
        target.addEventListener(eventType, (event) => {
            console.log(eventType);
            container.classList.add('tapGame--tapped');
            container.classList.add(eventType);
            drawTapResult(event.pageX, event.pageY);
        });
    });
    ['mouseup', 'touchend', 'mouseleave'].forEach(eventType => {
        target.addEventListener(eventType, () => {
            //container.classList.remove('tapGame--tapped');
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