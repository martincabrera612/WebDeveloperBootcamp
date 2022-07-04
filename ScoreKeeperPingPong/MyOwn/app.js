const select = document.querySelector("#select");
const btnReset = document.querySelector("#btnReset");
const h1Score = document.querySelector("#h1Score");
const winSelect = document.querySelector("#winSelect");

let gameOver = false;
let winningScore = 3;

const p1 = {
    score: 0,
    button : document.querySelector("#btnP1"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button : document.querySelector("#btnP2"),
    display: document.querySelector("#p2Display")
}


btnReset.addEventListener('click', reset);
p1.button.addEventListener('click', function () {updateScore(p1,p2)});
p2.button.addEventListener('click', function () {updateScore(p2,p1)});
winSelect.addEventListener('change', winSelector);


function winSelector () {
    winningScore = parseInt(winSelect.value);
    reset();
}

function updateScore(p, opp) {
    
    if(!gameOver) {
        p.score += 1;
        if (winningScore === p.score) {
            gameOver = true;
            p.button.disabled = true;
            opp.button.disabled = true;
            p.display.textContent = p.score;
            p.display.classList.add('has-text-success');
            opp.display.classList.add('has-text-danger');
        }
        p.display.textContent = p.score;
    }
    
}


function reset() {
    gameOver = false;
    for(let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = "0";
        p.button.disabled = false;
        p2.display.classList.remove('has-text-success' , 'has-text-danger');
        p1.display.classList.remove('has-text-danger' , ('has-text-success'));
    }
};
