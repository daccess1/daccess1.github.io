async function showLevelModal() {
    document.getElementById('levelModal').classList.remove('d-none');
    _wa.BackButton.show();
}

document.addEventListener('loadHome', () => {
    const target = document.getElementById("tapGame--game");
    const container = document.getElementById('tapGame');
    target.addEventListener('mousedown', (event) => {
        console.log(`x: ${event.pageX} y: ${event.pageY}`);
        container.classList.add('tapGame--tapped');
    });
    target.addEventListener('mouseup', (event) => {
        console.log(`x: ${event.pageX} y: ${event.pageY}`);
        container.classList.remove('tapGame--tapped');
    });
});