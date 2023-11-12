let catFront = document.getElementById('cat-front');
let catBack = document.getElementById('cat-back');

let broomFront = document.getElementById('broom-front');
let broomBack = document.getElementById('broom-back');

let cauldronFront = document.getElementById('cauldron-front');
let cauldronBack = document.getElementById('cauldron-back');

let ballFront = document.getElementById('ball-front');
let ballBack = document.getElementById('ball-back');

let crystalsFront = document.getElementById('crystals-front');
let crystalsBack = document.getElementById('crystals-back');

let elixirFront = document.getElementById('elixir-front');
let elixirBack = document.getElementById('elixir-back');

let incenseFront = document.getElementById('incense-front');
let incenseBack = document.getElementById('incense-back');

let bookFront = document.getElementById('book-front');
let bookBack = document.getElementById('book-back');


document.addEventListener('DOMContentLoaded', function () {

});

document.getElementById('start').addEventListener('click', startGame);



document.getElementsByClassName('front-card').addEventListener('click', revealCard);

/**
 * 
 */
function startGame() {
  startTimer();
}

/** How to create a JavaScript timer by:
 * https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript+
 */
function startTimer() {
  let count = 21;
  let countdown = document.getElementById('timer2');
  const timer = setInterval(function () {
    count--;
    console.log(count);
    countdown.innerText = count;
    if (count === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);

}

/**
 * 
 */
function revealCard() {
  
}

/**
 * 
 */
function hideCard() {

}

/**
 * 
 */
function compareCards() {
  if (catFront === catFront ||
    broomFront === broomFront ||
    cauldronFront === cauldronFront ||
    ballFront === ballFront ||
    crystals === crystalsFront ||
    elixirFront === elixirFront ||
    incenseFront === incenseFront ||
    bookFront === bookFront
  ) {
    matchingCards();
  } else if (
    catFront === catFront &&
    broomFront === broomFront &&
    cauldronFront === cauldronFront &&
    ballFront === ballFront &&
    crystals === crystalsFront &&
    elixirFront === elixirFront &&
    incenseFront === incenseFront &&
    bookFront === bookFront
  ) {
    winGame();
  } else {
    noMatchingCards();
  }
}

/**
 * 
 */
function matchingCards() {

}

/**
 * 
 */
function noMatchingCards() {

}

/**
 * 
 */
function winGame() {

}

/**
 * 
 */
function loseGame() {

}

/**
 * 
 */
function shuffleCards() {

}

/**
 * 
 */
function endGame() {

}