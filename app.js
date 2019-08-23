alert('dude js working!');

let btn = document.getElementById('btnDo');

let func = () => {
    console.log('hola boton do');
}
btnDo.addEventListener('click', func);