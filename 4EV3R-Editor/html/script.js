const menu = document.querySelector('.menu');
const fabClose = document.getElementById('fab-close');
const openMenuSound = new Audio('sound/openmenu.mp3');
const clickSound = new Audio('sound/click.mp3');

window.addEventListener('message', (event) => {
    if (event.data.action === 'open') {
        openMenuSound.play();

        menu.classList.remove('closing');
        menu.classList.add('open');
    }

    if (event.data.action === 'close') {
        menu.classList.add('closing');
        setTimeout(() => {
            menu.classList.remove('open');
            menu.classList.remove('closing');
        }, 400);
    }
});

fabClose.addEventListener('click', () => {
    fetch(`https://${GetParentResourceName()}/closeMenu`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
});

document.querySelectorAll('li').forEach((item, index) => {
    item.addEventListener('click', () => {
        clickSound.play();

        if (index === 0) {
            fetch(`https://${GetParentResourceName()}/startRecording`, { method: 'POST' });
        } else if (index === 1) {
            fetch(`https://${GetParentResourceName()}/stopRecording`, { method: 'POST' });
        } else if (index === 2) {
            fetch(`https://${GetParentResourceName()}/stopAndSaveRecording`, { method: 'POST' });
        }
    });
});
