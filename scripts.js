// TODO: Generate a 3x3 grid

/*
1. Generate the first row (3 divs) within an outer div that has a property of display: flex

2. Repeat this. For each iteration, the outer loop has a row variable that's been appended. At the end of the inner loop (boxes completely generated), 
*/
const clearSketchHTML = document.getElementById("reset");
const changeCanvasSizeHTML = document.getElementById("canvas-size");
const sectionCanvasHTML = document.getElementById("section--canvas");

const generateCanvas = function (canvasSize) {
  // Canvas generation
  const canvasHTML = document.createElement("div");
  canvasHTML.setAttribute("id", "canvas");
  sectionCanvasHTML.appendChild(canvasHTML);

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

  // Sketching code
  const boxHTML = document.querySelectorAll(".box");
  let isDrawing = false;

  for (let i = 0; i < boxHTML.length; i++) {
    boxHTML[i].addEventListener("mousedown", function () {
      isDrawing = true;
    });

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
};

generateCanvas(16);

changeCanvasSizeHTML.addEventListener("click", function () {
  do {
    canvasSize = Number(prompt("Please put in a number for a square canvas"));
  } while (canvasSize <= 0 || canvasSize > 100 || isNaN(canvasSize));
  document.getElementById("canvas").remove();
  generateCanvas(canvasSize);
});
