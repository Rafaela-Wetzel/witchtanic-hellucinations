let startButton = document.getElementById('open-modal');
let endButton = document.getElementById('end-game');

let startFromNew = document.getElementsByClassName('reload');

/* Disables the memory cards to be clickable until user has pressed the start button */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementsByClassName('memory-game')[0].classList.add('button-off');

  /* Adds event listeners to all elements with close-modal class */
  for (var i = 0; i < closeClick.length; i++) {
    closeClick[i].addEventListener('click', closeModal);
  }
});

/* Modal Box */

var startModal = document.getElementById('modalStart');
var winModal = document.getElementById('modalWin');
var loseModal = document.getElementById('modalLose');

var openClick = document.getElementById('open-modal');
var closeClick = document.getElementsByClassName('close-modal');

openClick.addEventListener('click', openModal);

function closeModal() {
  startModal.style.display = 'none';
  winModal.style.display = 'none';
  loseModal.style.display = 'none';
}

function openModal() {
  startModal.style.display = 'block';
}

/* Start and end game */

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('end-game').addEventListener('click', endGame);

/**
 * 
 */
function startGame() {
  startTimer();
  shuffle();
  document.getElementsByClassName('memory-game')[0].classList.remove('button-off');
  startButton.classList.add('display-none');
  endButton.classList.remove('display-none');
}

function endGame() {
  startButton.classList.remove('display-none');
  endButton.classList.add('display-none');
  window.location.reload();
}

// Source: Tutorial [2] 

/** 
 * Creates a countdown from 20 to 0
 */
function startTimer() {
  let count = 41;
  let timer = document.getElementById('countdown');
  const time = setInterval(function () {
    count--;
    console.log(count);
    countdown.innerText = count;
    if (count === 0) {
      clearInterval(time);
      loseGame();
    }
  }, 1000);
}

// Source: How-to [3]
let matchCount = 0;

// Source Begin: Tutorial [4]
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

/** 
 * Makes the cards flip 
 */
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.toggle('flip');

  if (!hasFlippedCard) {
    // First click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  // Second click 
  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}

/**
 * Checks if the cards match
 * if they don't match unflipCards is called
 * 
 */
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

/**
 * Accomplishes that the matching card pairs 
 * stay uncovered and can be clicked no longer
 */
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
  // Source: How-to [3]
  matchCount++;
  if (matchCount === 8) {
    winGame();

  };
  // Source [3] end 
}

/**
 * Cards that do not match will be covered again
 * and setTimeout function accomplishes that 
 * user needs to wait until the unmatching cards 
 * are covered again to uncover more cards
 */
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500)
}

/**
 * 
 */
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}

cards.forEach(card => card.addEventListener('click', flipCard));

// Source end: Tutorial [4]

/** 
 * Opens a modal window that displays winning message;
 * adds event listener that triggers a refresh of the page
 * to the button that closes the modal window 
 */
function winGame() {
  loseGame = null;
  winModal.style.display = 'block';

  for (var i = 0; i < startFromNew.length; i++) {
    startFromNew[i].addEventListener('click', reload);
  }
}

/**
 * Opens a modal window that displays losing message;
 * adds event listener that triggers a refresh of the page
 * to the button that closes the modal window 
 */
function loseGame() {
  loseModal.style.display = 'block';

  for (var i = 0; i < startFromNew.length; i++) {
    startFromNew[i].addEventListener('click', reload);
  }
}

/**
 * Starts game from new & shuffles the cards
 */
function reload() {
  window.location.reload();
  shuffle();
}