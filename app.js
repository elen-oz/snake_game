let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let grid = 16;
let count = 0;
const snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4
};

let apple = {
  x: 320,
  y: 320
}