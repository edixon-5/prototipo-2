const grid = document.getElementById('grid');
const squares = Array.from(grid.children);
const resetButton = document.getElementById('reset');
let originalColors = [];

function pickColor() {
  const colors = [
    '#e6f2ff',
    '#f5f5f5',
    '#ffebe9',
    '#fff8e1',
    '#e6f3ff',
    '#ffccff',
    '#ffe6c7',
    '#fff9c0',
    '#e6f3ff',
    '#f5f5f5',
    '#ffe6c7',
    '#fff8e1',
    '#ffebe9',
    '#ffccff',
  ];

  squares.forEach((square, index) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = color;
    square.style.color = color;
    square.textContent = '';
    originalColors.push(color);
    square.addEventListener('click', () => {
      square.style.backgroundColor = 'black';
      square.style.color = 'white';
      square.textContent = getOriginalColorName(square);
    });
  });
}

function getOriginalColorName(square) {
    const index = squares.indexOf(square);
    const originalColor = originalColors[index];
    switch (originalColor) {
      case '#e6f2ff':
        return 'Pastel Blue';
      case '#f5f5f5':
        return 'Light Gray';
      case '#ffebe9':
        return 'Pale Pink';
      case '#fff8e1':
        return 'Light Peach';
      case '#e6f3ff':
        return 'Pastel Blue-Green';
      case '#ffccff':
        return 'Pale Pink-Purple';
      case '#ffe6c7':
        return 'Light Orange';
      case '#fff9c0':
        return 'Pale Yellow';
      default:
        return 'Unknown Color';
    }
  }

resetButton.addEventListener('click', resetGrid);

function resetGrid() {
  squares.forEach((square, index) => {
    square.style.backgroundColor = originalColors[index];
    square.style.color = originalColors[index];
    square.textContent = '';
  });
}

pickColor();