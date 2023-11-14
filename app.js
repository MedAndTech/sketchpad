const GRID_SIZE = 480;

function createGrid(size) {
    resetGrid();
    if (size > 100) size = 100;
    if (size < 16) size = 16;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.addEventListener("mouseover", () => {
                colorSquare(div);
            })
            div.style.width = GRID_SIZE / size + "px";
            div.style.height = GRID_SIZE / size + "px";
            div.classList.add("square");
            grid.appendChild(div);
        }
    }
}

function resetGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild)
    }
}

function colorSquare(elem) {
    if (mouseDown) {
        elem.style.backgroundColor = color;
    }
}


const grid = document.querySelector(".grid")

const sizeButton = document.querySelector("#sizeButton");
sizeButton.addEventListener("click", () => {
    let gridSize = +prompt("Number of square per size (min 16, max 100)");
    createGrid(gridSize);
})

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
let color = "black";



createGrid(16);