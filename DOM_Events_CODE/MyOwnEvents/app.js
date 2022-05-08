const btn = document.querySelector("#v2");

btn.onclick = function () {
    console.log("YOU CLICKED ME");
    console.log("I hope it worked");
}

function scream() {
    console.log ("AAAHHHHHH");
    console.log ("STOP TOUCHING ME");
}

btn.onmouseenter = scream;
document.querySelector("h1").onclick = () => {
    alert("Este es el header");
};

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {alert('CLICKED')})

function twist() {
    console.log('TWIST');
}

function shout() {
    console.log('Shout')
}

const tasButton = document.querySelector('#ts');

tasButton.addEventListener('click',twist, {once: true});

tasButton.addEventListener('click',shout);
