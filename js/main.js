'use strict'

const container = document.getElementById("block-container");
const select = document.getElementById("difficulty");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    container.classList.replace("d-none", "d-flex")

    container.innerHTML = "";

    const selectDifficulty = parseInt(select.value);

    const difficulty = selectRow(selectDifficulty);

    for (let i = 0; i < difficulty; i++) {

        createBlock(container, difficulty, i);

    }

    const bomb = randomNumber(difficulty);
    console.log(bomb);

})


// Funzione che crea una div class "block"
function createBlock(containerBlock, y, i) {
    let block = document.createElement("div");
    block.classList.add("block");
    block.style.flexBasis = `calc(100% / ${Math.sqrt(y)})`;
    containerBlock.append(block);

    block.addEventListener("click", function () {

        if (block.dataset.click === "1") {
            return
        }

        block.classList.toggle("block-click");
        block.dataset.click = 1;
        console.log(i)
    })
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