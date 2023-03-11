// TODO: Generate a 3x3 grid

/*
1. Generate the first row (3 divs) within an outer div that has a property of display: flex

2. Repeat this. For each iteration, the outer loop has a row variable that's been appended. At the end of the inner loop (boxes completely generated), 
*/
const documentBody = document.querySelector("body");

for (let i = 0; i < 3; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 3; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
  }
  documentBody.appendChild(row);
}
