const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const btnWhite = document.createElement('button');
const buttonContainer = document.querySelector('.buttons');


function createDivs(col, row){
    for(let i = 0; i < (col * row); i++){
        const div = document.createElement('div');
        div.style.border = '1px solid red';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}


createDivs(16, 16);

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


function rgbColor() {
    const boxs = container.querySelectorAll('.box');
    btnRGB.textContent = 'RGB';
    btnRGB.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=>{
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${red}, ${blue}, ${green})`;
        }))
    })
    buttonContainer.appendChild(btnRGB).classList.add('btn')
}

rgbColor()

function reset() {
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.remove())
}

function reSize() {
    btnSize.textContent = 'GRID SIZE';
    btnSize.addEventListener('click', () => {
        let user = prompt('Type the size of columns and rows');
        if(user === null || user < 1) {
            reset();
            createDivs(16, 16);
            blackColor();
            grayColor();
            rgbColor()
        }
        else {
            reset();
            createDivs(user, user);
            blackColor();
            grayColor();
            rgbColor()
        }
    })
    buttonContainer.appendChild(btnSize).classList.add('btn')
}


reSize()