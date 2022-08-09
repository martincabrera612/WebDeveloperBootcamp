const botonColor = document.querySelector('#btnColor');
const h1Titulo = document.querySelector('#h1Titulo');
var textVis = true;


botonColor.addEventListener('click', function () {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1Titulo.innerText = newColor;
    if (textVis) {
        h1Titulo.style.color = "black";
    }else {
        h1Titulo.style.color = "white";
    }
});

function randomColor () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if ((r+g+b) < 150) {
        textVis = false;
    }else {
        textVis = true;
    }
    return `rgb(${r},${g},${b})`;
}

