const rows = 50;
const columns = 50;

const initializeGrid = () => {
  let grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      let alive;
      if (Math.random() < 0.5) {
        alive = 1;
      } else {
        alive = 0;
      }
      row.push(alive);
    }
    grid.push(row);
  }
  return grid;
};

const updateGrid = (grid) => {
  let newGrid = [];
  for (let i = 0; i < rows; i++) {
    let newRow = [];
    for (let j = 0; j < columns; j++) {
      const neighbors = countNeighbors(grid, i, j);
      if (grid[i][j] === 1) {
        if (neighbors === 2 || neighbors === 3) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      } else {
        if (neighbors === 3) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      }
    }
    newGrid.push(newRow);
  }
  return newGrid;
};

const countNeighbors = (grid, row, column) => {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newColumn = column + j;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newColumn >= 0 &&
        newColumn < columns &&
        !(i === 0 && j === 0) &&
        grid[newRow][newColumn] === 1
      ) {
        count++;
      }
    }
  }
  return count;
};

const renderGrid = (grid) => {
  const gridContainer = document.querySelector('.grid');
  gridContainer.innerHTML = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('div');
      cell.className = 'grid__cell';
      if (grid[i][j] === 1) {
        cell.style.backgroundColor = 'black';
      } else {
        cell.style.backgroundColor = 'white';
      }
      gridContainer.appendChild(cell);
    }
  }
};

const startGame = () => {
  let grid = initializeGrid();
  renderGrid(grid);

  setInterval(() => {
    grid = updateGrid(grid);
    renderGrid(grid);
  }, 1000);
};

startGame();
document.querySelector('.header__button').addEventListener('click', () => {
  location.reload();
});
