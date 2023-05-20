let gridSize = 32;
let isDrawing = false;
let isEraser = false;
let filledColor = "#030712"

const sliderValue = document.querySelector("#sliderValue");
sliderValue.textContent = `${gridSize}x${gridSize}`;

// Create grid based on ${gridSize}
const sketchGrid = document.querySelector("#sketchGrid");

sketchGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
sketchGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

function addSquares() {
    for (i = 0; i < gridSize * gridSize; i++) {
      const square = document.createElement("div.square");
      square.classList.add("square");
      sketchGrid.appendChild(square);
    }
}

addSquares();

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", function (e) {
    if (isDrawing) {
      e.target.style.backgroundColor = "#030712";
    }

    square.addEventListener("mousedown", function (e) {
      e.target.style.backgroundColor = "#030712";
    });
  });
});

document.addEventListener("mousedown", function () {
  isDrawing = true;
});

document.addEventListener("mouseup", function () {
  isDrawing = false;
});

// problems
// eraser functionality
// change grid size with slider
