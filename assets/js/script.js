/* Disables the memory cards to be clickable until user has pressed the start button */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementsByClassName('memory-game')[0].classList.add('button-off');
});

/* Modal Box */
/* Source [1] */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/* Source [1] end */

document.getElementById('start').addEventListener('click', startGame);

/**
 * 
 */
function startGame() {
  startTimer();
  document.getElementsByClassName('memory-game')[0].classList.remove('button-off');
}

// Source: Tutorial [2] 

/** 
 * Creates a countdown from 20 to 0
 */
function startTimer() {
  document.getElementById('myBtn').classList.add('button-off');
  let count = 41;
  let timer = document.getElementById('countdown');
  const time = setInterval(function () {
    count--;
    console.log(count);
    countdown.innerText = count;
    if (count === 0) {
      clearInterval(time);
      loseGame();
      document.getElementById('myBtn').classList.remove('button-off');
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

// Source end: Tutorial [4]

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
  alert("You lost!");
  shuffle();
  window.location.reload();
}

/**
 * 
 */
/* function endGame() {
  shuffle();
} */