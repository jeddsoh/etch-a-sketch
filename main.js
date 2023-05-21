const DEFAULT_COLOR = "#030712";
const DEFAULT_PEN = "mono";
const DEFAULT_SIZE = 32;

let currentColor = DEFAULT_COLOR;
let currentPen = DEFAULT_PEN;
let currentSize = DEFAULT_SIZE;

const grid = document.getElementById("grid");
const mono = document.getElementById("mono");
const eraser = document.getElementById("eraser");
const slider = document.querySelector("#slider");
const resetBtn = document.getElementById("reset");

window.onload = () => {
  setCurrentSize();
  activateMono();
};

let sliderValue = function () {
  let newValue = slider.value;
  let target = document.querySelector("#sliderValue");
  target.innerHTML = `${newValue}x${newValue}`;
  currentSize = `${newValue}`;
  reset();
  setCurrentSize();
};

slider.addEventListener("input", sliderValue);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function activateEraser() {
  eraser.style.color = "#e5e7eb";
  eraser.style.backgroundColor = "#030712";
  mono.style.color = "#030712";
  mono.style.backgroundColor = "#e5e7eb"
}

function activateMono() {
  mono.style.color = "#e5e7eb";
  mono.style.backgroundColor = "#030712";
  eraser.style.color = "#030712";
  eraser.style.backgroundColor = "#e5e7eb"
}

mono.onclick = () => {
  currentPen = "mono";
  activateMono();
};

eraser.onclick = () => {
  currentPen = "eraser";
  activateEraser();
};

resetBtn.onclick = () => {
  reset();
}

function reset() {
  grid.innerHTML = "";
}

function setCurrentSize() {
  grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
  sliderValue.textContent = `${currentSize}x${currentSize}`;

  for (i = 0; i < currentSize * currentSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mousedown", fillSquare);
    square.addEventListener("mouseover", fillSquare);
    grid.appendChild(square);
  }
}

function fillSquare(e) {
  if (e.type == "mouseover" && !mouseDown) {
    return;
  }

  if (currentPen == "mono") {
    e.target.style.backgroundColor = `${DEFAULT_COLOR}`;
  } else if (currentPen == "eraser") {
    e.target.style.backgroundColor = "#f9fafb";
  }
}
