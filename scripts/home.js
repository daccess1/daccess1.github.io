async function showLevelModal() {
    document.getElementById('levelModal').classList.remove('d-none');
    _wa.BackButton.show();
}

document.addEventListener('loadHome', () => {
    const target = document.getElementById("tapGame--game");
    const container = document.getElementById('tapGame');
    ['mousedown', 'touchstart'].forEach(eventType => {
        target.addEventListener(eventType, (event) => {
            console.log(`x: ${event.pageX} y: ${event.pageY}`);
            container.classList.add('tapGame--tapped');
        });
    });
    ['mouseup', 'touchend', 'mouseleave'].forEach(eventType => {
        target.addEventListener(eventType, (event) => {
            console.log(`x: ${event.pageX} y: ${event.pageY}`);
            container.classList.remove('tapGame--tapped');
        });
    });
});