/* document.addEventListener('DOMContentLoaded', function () {

}); */

/* Source: Tutorial [1] - Making the cards flip*/
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

        
    }     
}

cards.forEach(card => card.addEventListener('click', flipCard));

/* Source end: Tutorial [1]*/

document.getElementById('start').addEventListener('click', startGame);

/**
 * 
 */
function startGame() {
  startTimer();
  compareCards();
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
function hideCard() {

}

/**
 * 
 */
function compareCards() {
  let faces = document.getElementsByClassName("front-face");
  for (let i = 0; i < faces.length; i++) {
    let frontMotif = faces[i].getAttribute("src");
     
    }
    
}
  /*if (x) {

  }
  matchingCards(); 
  winGame();
  noMatchingCards();
}*/

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