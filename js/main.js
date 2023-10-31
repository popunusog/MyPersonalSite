const cells = document.querySelectorAll('[data-cell]');
const restartButton = document.getElementById('restart-button');
let currentPlayer = 'X';


function handleCellClick(e) {
  const cell = e.target;


  if (cell.textContent !== '') {
    return;
  }

  
  cell.textContent = currentPlayer;

  
  if (checkWin(currentPlayer)) {
    setTimeout(() => alert(`You win!`), 10);
  } else if (checkDraw()) {
    setTimeout(() => alert("It's a draw!"), 10);
  } else {
    
    currentPlayer = 'O';
    setTimeout(makeRandomAIMove, 500); 
  }
}


function makeRandomAIMove() {
  const availableCells = Array.from(cells).filter(cell => cell.textContent === '');
  if (availableCells.length > 0) {
    const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    randomCell.textContent = 'O';

    
    if (checkWin('O')) {
      setTimeout(() => alert('I win'), 10);
    } else if (checkDraw()) {
      setTimeout(() => alert("It's a draw!"), 10);
    } else {
      
      currentPlayer = 'X';
    }
  }
}


function checkWin(player) {

  return (
    checkLine(0, 1, 2, player) || checkLine(3, 4, 5, player) || checkLine(6, 7, 8, player) ||
    checkLine(0, 3, 6, player) || checkLine(1, 4, 7, player) || checkLine(2, 5, 8, player) ||
    checkLine(0, 4, 8, player) || checkLine(2, 4, 6, player)
  );
}


function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}


function checkLine(a, b, c, player) {
  return cells[a].textContent === player && cells[b].textContent === player && cells[c].textContent === player;
}


function restartGame() {
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
}


cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);
function openGitHub() {
  window.open("https://github.com/popunusog", "_blank");
}
function hidePhotoAddSmtg(toChange, changer) {
  let overlay = document.querySelector(changer);
  let photo = document.querySelector(toChange);
  const allElements = document.querySelectorAll("body > *");

  allElements.forEach(element => {
    // If there is another element shown and you click the button, hide it and show the overlay
    if (element.classList.contains('shown') && element !== overlay) {
      element.classList.remove('shown');
      element.classList.add('hidden');
    }
  });

  if (overlay.classList.contains('hidden')) {
    // If overlay is hidden, show it and hide the photo
    overlay.classList.remove('hidden');
    photo.style.display = "none";
    overlay.classList.add('shown');
  } else {
    // If the overlay is currently shown, hide it and show the photo
    overlay.classList.remove('shown');
    photo.style.display = "block";
    overlay.classList.add('hidden');
  }
}
function openPdf(pdf){
  window.open(pdf);
  return false;
}
