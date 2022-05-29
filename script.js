let grid = document.querySelector(".pad");
let mouseDown = false;
let gridSize = 16;

document.addEventListener("mousedown", () => {
  mouseDown = true;
});

document.addEventListener("mouseup", () => {
  mouseDown = false;
});


function gridGen() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add('cell');
      cell.addEventListener(
        "mouseover", function () {
          if (!mouseDown) return;
          cell.style.background = "#3C9EE7";
        });
      grid.appendChild(cell);
    }
  }
}

document.querySelector(".newGrid").addEventListener('click', () => {
  do gridSize = prompt("Enter new grid size"); while (isNaN(gridSize));
  if (grid) grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  while (grid.firstElementChild) grid.firstElementChild.remove();
  gridGen(gridSize);
});

// normal.addEventListener('click', () => {
//   console.log("A");
// });

// NewGrid.addEventListener('click', () => {
//   console.log("A");
// });

// newGrid.addEventListener('click', () => {
//   console.log("A");
// });
gridGen();