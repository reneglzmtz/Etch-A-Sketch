
const grid = document.getElementById("grid");
grid.classList.add("test");

for (let i = 0; i < 16; i++) {
    var row = document.createElement('div');
    row.setAttribute('id', "id" + i);
    row.classList.add("row")

    grid.appendChild(row);
    for (let j = 0; j < 16; j++) {
        var block = document.createElement('div');
        block.setAttribute("id", i + "," + j);
        block.classList.add("square");
        block.addEventListener('mouseover', function (e) {
            e.target.style.background = "black";
        }
            /* block.style.backgroundColor = 'black'; */
        )

        row.appendChild(block);
    }
}

function restart() {
    const squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = "white";
    }
}
