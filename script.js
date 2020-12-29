const controls = document.querySelector('#controls');
const resetButton = document.createElement('button');
resetButton.textContent = 'RESET';
controls.appendChild(resetButton);

const background = document.querySelector('#background');

const container = document.querySelector('#container');
const testDiv = Create2DArray(16);
let numOfRowsAndCols = 16;
let colorChosen = '#AAAAAA';

designResetButton();
createGrid();
changeColor();
resetColor();

function designResetButton() {
    resetButton.style.cssText = 'background-color: white; color: #CF0000; font-size: 1rem; font-weight: bold;';
}

function createGrid() {
    for (let i = 0; i < numOfRowsAndCols; i++) {
        for (let j = 0; j < numOfRowsAndCols; j++) {
            testDiv[i][j] = document.createElement('div');
            testDiv[i][j].style.cssText = `height: 2.5rem; background-color: lightgrey; border: 0.0625rem solid black;`;
            container.appendChild(testDiv[i][j]);
        }

        container.style.cssText = `display: grid; grid-template-columns:  repeat(${numOfRowsAndCols}, 1fr); border: 0.3125rem solid black;`;
    }
}

function changeColor() {
    modeChoice();
    for (let i = 0; i < numOfRowsAndCols; i++) {
        for (let j = 0; j < numOfRowsAndCols; j++) {
            testDiv[i][j].addEventListener('mouseenter', () => {
                testDiv[i][j].style.cssText += `background-color: ${colorChosen};`;
            });
        }
    }
}

function modeChoice() {
    let colorChoice;
    let defaultColor = "#AAAAAA";

    colorChoice = document.querySelector("#colorChoice");
    colorChoice.value = defaultColor;
    colorChoice.addEventListener("input", updateColor, false);
    colorChoice.select();
}

function updateColor(event) {
    colorChosen = event.target.value;
}

function resetColor() {
    for (let i = 0; i < numOfRowsAndCols; i++) {
        for (let j = 0; j < numOfRowsAndCols; j++) {
            testDiv[i][j].style.cssText = 'height: 2.5rem; background-color: lightgrey; border: 0.0625rem solid black;';
        }
    }
}

function Create2DArray(rows) {
    let arr = [];

    for (let i = 0; i < rows; i++) {
        arr[i] = [];
    }
    return arr;
}

resetButton.addEventListener('click', resetColor);
