
const grid = document.getElementById("grid");
grid.classList.add("test");

var gridSize = 16;
var color = "black";
var rainbowColor = false;
var letters = "0123456789ABCDEF";

function getGrid(size) {
    for (let i = 0; i < size; i++) {
        var row = document.createElement('div');
        row.setAttribute('id', "id" + i);
        row.classList.add("row")

        grid.appendChild(row);
        for (let j = 0; j < size; j++) {
            var block = document.createElement('div');
            block.setAttribute("id", i + "," + j);
            block.classList.add("square");
            block.style.width = 500 / size + "px";
            block.style.height = 500 / size + "px";
            block.style.border = "1px solid rgb(188, 191, 194)";
            block.style["box-sizing"] = "border-box"
            block.addEventListener('mouseover', draw);

            row.appendChild(block);
        }
    }
}

getGrid(gridSize);

function black(e) {
    rainbowColor = false;
    color = "black";
}

function red(e) {
    rainbowColor = false;
    color = "red";
}

function blue(e) {
    rainbowColor = false;
    color = "blue";
}

function green(e) {
    rainbowColor = false;
    color = "green";
}

function rainbow(e) {
    rainbowColor = true;
}

function getRandomColor() {
    var randColor = "#"
    for (var i = 0; i < 6; i++) {
        randColor += letters[Math.floor(Math.random() * 16)];
    }
    return randColor
}

function draw(e) {
    if (rainbowColor) {
        e.target.style.background = getRandomColor();
    } else {
        e.target.style.background = color;
    }
}

function restart() {
    const squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = "white";
    }
}

function newGrid() {
    gridSize = prompt("How many squares per side?");
    if (gridSize > 0 && gridSize < 100) {
        document.querySelectorAll('.square').forEach(function (a) {
            a.remove()
        })
        getGrid(gridSize);
    }
}