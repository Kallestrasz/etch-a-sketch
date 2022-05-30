let grid = document.querySelector(".pad");
let buttons = document.querySelectorAll('.btn')
let mouseDown = false;
let gridSize = 16;
let mod = 0;

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
      cell.style.background = "rgba(245, 245, 245, 1)";
      cell.addEventListener("mouseover", () => {
        if (!mouseDown) return;
        if (mod == 0) cell.style.background = "rgb(0, 0, 0)";
        else if (mod == 1) cell.style.background = "";
        else if (mod == 2) cell.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        else if (mod == 3) cell.style.background = document.querySelector(".color").value;
        else return;
      });
      grid.appendChild(cell);
    }
  }
}

document.querySelector(".newGrid").addEventListener('click', () => {
  do gridSize = prompt("Enter new grid size"); while (isNaN(gridSize) || gridSize > 128 || gridSize <= 0);
  if (grid) grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  while (grid.firstElementChild) grid.firstElementChild.remove();
  gridGen(gridSize);
});

buttons.forEach(btn => {
  btn.addEventListener('click', event => {
    mod = btn.id;
  });
});

gridGen();