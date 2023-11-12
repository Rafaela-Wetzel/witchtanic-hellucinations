document.addEventListener('DOMContentLoaded', function() {

});

document.getElementById('start').addEventListener('click', startGame);

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
    console.log("Time's up!");
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

}

/**
 * 
 */
function increaseScore() {

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