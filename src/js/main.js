const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player1Current = document.getElementById("player1-current-score");
const player2Current = document.getElementById("player2-current-score");
const player1Total = document.getElementById("player1-total-score");
const player2Total = document.getElementById("player2-total-score");
const resetBtn = document.getElementById("reset");
const rollBtn = document.getElementById("roll");
const holdBtn = document.getElementById("hold");
const diceValue = document.getElementById("dice-value");
const players = [
    {
        "current": 0,
        "total": 0
    },
    {
        "current": 0,
        "total": 0
    }
]
var turn = 0;

document.addEventListener("DOMContentLoaded", function () {
    updateNumbers(players)
});

const reset = () => {
    players[0].current = 0;
    players[0].total = 0;
    players[1].current = 0;
    players[1].total = 0;
    updateNumbers();
    diceValue.style.visibility = "hidden";
    turn = 0;
}

const updateNumbers = () => {
    player1Current.innerHTML = players[0].current;
    player1Total.innerHTML = players[0].total;
    player2Current.innerHTML = players[1].current;
    player1Total.innerHTML = players[0].total;
}

const endTurn = () => {
    if (turn === 0) {
        player1.classList.add("active");
        player2.classList.remove("active");
    } else {
        player1.classList.remove("active");
        player2.classList.add("active");
    }
}

const roll = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    diceValue.style.visibility = "visible";
    diceValue.src = `assets/images/${random}.png`;
}

resetBtn.addEventListener("click", function () {
    reset();
    endTurn();
});