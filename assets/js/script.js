document.addEventListener('DOMContentLoaded', function() {

});

document.getElementById('start').addEventListener('click', startGame);

/**
 * 
 */
function startGame() {
  startTimer();
}

/**
 * 
 */
function startTimer() {
  let count = 20;
  let countdown = document.getElementById('timer');
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