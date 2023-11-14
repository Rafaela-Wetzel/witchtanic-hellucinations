/* document.addEventListener('DOMContentLoaded', function () {

}); */

/* Source: Tutorial [1]*/
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        console.log({firstCard, secondCard});
    }     
}

cards.forEach(card => card.addEventListener('click', flipCard));

/* Source end: Tutorial [1]*/


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
  matchingCards(); 
  winGame();
  noMatchingCards();
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