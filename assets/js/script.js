/* document.addEventListener('DOMContentLoaded', function () {

}); */

document.getElementById('start').addEventListener('click', startGame);

/**
 * 
 */
function startGame() {
  startTimer();
}

// Source: Tutorial [1] 

/** 
 * Creates a countdown from 20 to 0
 */
function startTimer() {
  document.getElementById('start').classList.add('button-off');
  let count = 41;
  let timer = document.getElementById('countdown');
  const time = setInterval(function () {
    count--;
    console.log(count);
    countdown.innerText = count;
    if (count === 0) {
      clearInterval(time);
      loseGame();
      document.getElementById('start').classList.add('button-on');
    }
  }, 1000);
  
}

// Source: How-to [2]
let matchCount = 0;

// Source Begin: Tutorial [3]
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
  // Source: How-to [2]
  matchCount++;
  if (matchCount === 8) {
    winGame();
  };
  // Source [2] end 
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

/**
 * Immediately invoked function expression: 
 * Will be executed right after its definition, 
 * which means that the cards will be shuffled 
 * from the beginning, when the page is loaded
 */
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos; 
  });
})();

/**
 * Creates a second, regular shuffle function 
 * which can be invoked individually and
 * independently from the IIFE
 */
function shuffle() {
  
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos; 
  });
}

cards.forEach(card => card.addEventListener('click', flipCard));

// Source end: Tutorial [2]

/**
 * 
 */
function winGame() {
  alert('For the win!')
  shuffle();
  window.location.reload();
}

/**
 * 
 */
function loseGame() {
  shuffle();
  alert("You lost!");
}

/**
 * 
 */
function endGame() {
  shuffle();
}