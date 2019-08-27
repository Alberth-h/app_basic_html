const buttons = document.querySelectorAll('button');

const playnote = event =>{
    console.log(event.target.dataset.note);
    alert('Arriba España!!!');
    const note = button.dataset.note;
    console.log(`audio${note}`);
    const audio = document.getElementById(`audio${note}`);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);