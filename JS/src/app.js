//Script para juego de adivinar numero
let numeroMax = parseInt(prompt("Ingresa tu numero maximo"));
while (!numeroMax) {
    numeroMax = parseInt(prompt("Ingresa un numero valido por favor: "));
}

const numeroSecreto = Math.floor(Math.random() * numeroMax) + 1;
let numeroUsuario = parseInt(prompt("Primer Intento: "));
let intentos = 1;

while (parseInt(numeroUsuario) !== numeroSecreto) {
    if (numeroUsuario == 'q') break;
    intentos++;
    if (numeroUsuario < numeroSecreto) {
        numeroUsuario = prompt("El numero es muy chico, intente de nuevo: ");
    } else {
        numeroUsuario = prompt("El numero es muy grande, intente de nuevo: ");
    }
}

if (numeroUsuario.toLowerCase() === 'q') {
    alert("Ha salido del juego.")
} else {
    alert(`Ha adivinado el numero, Felicitaciones! , le tomo ${intentos} intentos. `);
}