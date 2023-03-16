// TODO: Generate a 3x3 grid

/*
1. Generate the first row (3 divs) within an outer div that has a property of display: flex

2. Repeat this. For each iteration, the outer loop has a row variable that's been appended. At the end of the inner loop (boxes completely generated), 
*/

const canvasHTML = document.getElementById("canvas");
const clearSketchHTML = document.getElementById("reset");
const changeCanvasSizeHTML = document.getElementById("canvas-size");
let canvasSize = 16;

const generateCanvas = function (canvasSize) {
  for (let i = 0; i < canvasSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < canvasSize; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.classList.add("selector");
      box.style.padding = `${Math.floor(500 / canvasSize / 2)}px`;
      if (j === 0) box.style.borderLeft = "1px solid black";
      if (i === canvasSize - 1) box.style.borderBottom = "1px solid black";
      row.appendChild(box);
    }
    canvasHTML.appendChild(row);
  }
};

generateCanvas(canvasSize);

changeCanvasSizeHTML.addEventListener("click", function () {
  canvasSize = Number(prompt("Please put in a number for a square canvas"));
  generateCanvas(canvasSize);
});

const boxHTML = document.querySelectorAll(".box");
let isDrawing = false;

canvasHTML.addEventListener("mousedown", function () {
  isDrawing = true;
});

for (let i = 0; i < boxHTML.length; i++) {
  boxHTML[i].addEventListener("mousemove", function () {
    if (isDrawing) boxHTML[i].classList.add("colored");
  });
  boxHTML[i].addEventListener("mousedown", function () {
    boxHTML[i].classList.add("colored");
  });
}

window.addEventListener("mouseup", function () {
  if (isDrawing) isDrawing = false;
});

reset.addEventListener("click", function () {
  for (let i = 0; i < boxHTML.length; i++) {
    boxHTML[i].classList.remove("colored");
  }
});
