/* Creating the elements that will be used in the program. */


const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const btnWhite = document.createElement('button');
const buttonContainer = document.querySelector('.buttons');


/**
 * Create a grid of divs
 * @param col - The number of columns in the grid.
 * @param row - The number of rows in the grid.
 */


function createGrids(col, row){
    for(let i = 0; i < (col * row); i++){
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}


createGrids(16, 16);

/**
 * It adds a button to the page that changes the color of the boxes to gray when clicked.
 */


function grayColor() {
    const boxs = container.querySelectorAll('.box');
    btnGray.textContent = 'Gray';
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=>{
            let RandomNum = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${RandomNum}, ${RandomNum}, ${RandomNum})`
        }))
    })
    buttonContainer.appendChild(btnGray).classList.add('btn')
}

grayColor()

/**
 * It adds a button to the page that changes the color of all the boxes to white when clicked.
 */


function whiteColor() {
    const boxs = container.querySelectorAll('.box');
    btnWhite.textContent = 'White';
    btnWhite.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'White';
        }))
    })
    buttonContainer.appendChild(btnWhite).classList.add('btn')
}


whiteColor()

/**
 * It adds a button to the page that changes the background color of all the boxes to black when
 * clicked.
 */


function blackColor() {
    const boxs = container.querySelectorAll('.box');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=>{
            box.style.background = 'black'
        }))
    })
    buttonContainer.appendChild(btnBlack).classList.add('btn')
}

blackColor()


/**
 * It creates a button that when clicked will change the background color of all the boxes to a random
 * color.
 */


function rgbColor() {
    const boxs = container.querySelectorAll('.box');
    btnRGB.textContent = 'RGB';
    btnRGB.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=>{
            let rRandom = Math.floor(Math.random() * 255);
            let bRandom = Math.floor(Math.random() * 255);
            let gRandom = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${rRandom}, ${bRandom}, ${gRandom})`;
        }))
    })
    buttonContainer.appendChild(btnRGB).classList.add('btn')
}

rgbColor()
/**
 * It resets the grid and creates a new grid with the user input.
 */

function reset() {
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.remove())
}

/**
 * This function creates a button that allows the user to change the size of the grid
 */

function reSize() {
    btnSize.textContent = 'GRID SIZE';
    btnSize.addEventListener('click', () => {
        let user = prompt('Type the size of columns and rows');
        if(user === null || user < 1) {
            reset();
            createGrids(16, 16);
            blackColor();
            grayColor();
            rgbColor();
        }
        else {
            reset();
            createGrids(user, user);
            blackColor();
            grayColor();
            rgbColor();
        }
    })
    buttonContainer.appendChild(btnSize).classList.add('btn')
}


reSize()