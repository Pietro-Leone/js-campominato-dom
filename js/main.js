'use strict'

const container = document.getElementById("block-container");
const select = document.getElementById("difficulty");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    let score = [];
    document.getElementById("score").innerHTML = `0${score.length}`;

    container.style.zIndex = 1;

    container.classList.replace("d-none", "d-flex")

    container.innerHTML = "";

    const selectDifficulty = parseInt(select.value);

    const difficulty = selectRow(selectDifficulty);

    const bomb = randomNumber(difficulty);
    console.log(bomb)

    for (let i = 0; i < difficulty; i++) {

        createBlock(container, difficulty, i, bomb, score);

    }
})

// Funzione che crea una div class "block"
function createBlock(containerBlock, y, i, bomb, score) {
    let block = document.createElement("div");
    block.classList.add("block");
    block.style.flexBasis = `calc(100% / ${Math.sqrt(y)})`;
    containerBlock.append(block);

    if (bomb.indexOf(i) !== -1) {
        block.dataset.bomb = 1;
        block.addEventListener("click", function () {

            block.classList.add("block-bomb", "bg-danger");
            console.log("HAI PERSO");
            alert(`HAI PERSO! \n\nSCORE: ${score.length}`);
            containerBlock.style.zIndex = -1;

            let bombs = document.querySelectorAll('[data-bomb="1"]');
            for (let i = 0; i < bombs.length; i++) {
                bombs[i].classList.add("block-bomb");
            }

        })
    } else {
        block.addEventListener("click", function () {

            if (block.dataset.click === "1") {
                return
            }

            block.dataset.click = 1;
            block.classList.toggle("block-click");
            console.log(i);
            score.push(1);
            if (score.length < 10) {
                document.getElementById("score").innerHTML = `0${score.length}`;
            }
            else {
                document.getElementById("score").innerHTML = `${score.length}`;
            }

            if (score.length === y - bomb.length) {
                console.log("HAI VINTO");
                alert(`HAI VINTO! \n\nSCORE: ${score.length}`);
                containerBlock.style.zIndex = -1;
            }
        })
    }
}

// Funzione che controlla il valore selezionato nella select dall'utente
function selectRow(x) {
    let blockInRow = 0;

    if (x === 1) {
        blockInRow = 100;
    }
    else if (x === 2) {
        blockInRow = 81;
    }
    else if (x === 3) {
        blockInRow = 49;
    }
    return blockInRow;
}

// Funzione che crea 16 numeri random da 0 a x (quantità di celle scelta in base alla select)
function randomNumber(x) {
    x++;
    const array = [];

    while (array.length < 16) {

        const randomNum = Math.floor(Math.random() * x);

        if (array.indexOf(randomNum) === -1) {
            array.push(randomNum);
        }
    }
    return array;
}