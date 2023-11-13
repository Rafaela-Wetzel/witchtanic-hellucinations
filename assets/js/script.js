document.addEventListener('DOMContentLoaded', function () {

});

document.getElementById('start').addEventListener('click', startGame);

let allCards = document.getElementsByClassName('single-card');
for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener('click', revealCard);
}

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
 *Tutorial: https://www.youtube.com/watch?v=ZniVgo8U7ek
 */
/*function revealCard() {
  this.classList.toggle('flip');
}*/


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