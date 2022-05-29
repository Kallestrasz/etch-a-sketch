let grid = document.querySelector(".pad");

let gridSize = 16;

function gridGen() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add('cell');

      grid.appendChild(cell);
    }
  }
}

gridGen();