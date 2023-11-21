let startButton = document.getElementById('open-modal');
let endButton = document.getElementById('end-game');
let startFromNew = document.getElementsByClassName('reload');

var startModal = document.getElementById('modalStart');
var winModal = document.getElementById('modalWin');
var loseModal = document.getElementById('modalLose');
var closeClick = document.getElementsByClassName('close-modal');

let timer = document.getElementById('countdown');
let matchCount = 0;
let totalTime = 41;

const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Disables the memory cards to be clickable until user has pressed the start button
document.addEventListener('DOMContentLoaded', function () {
  document.getElementsByClassName('memory-game')[0].classList.add('button-off');

  // Adds event listeners to all elements with close-modal class 
  for (var i = 0; i < closeClick.length; i++) {
    closeClick[i].addEventListener('click', closeModal);
  };


  // Event listener for 'Start Game' modal box 
  startButton.addEventListener('click', openModal);

  /**
   * Closes modal windows
   */
  function closeModal() {
    startModal.style.display = 'none';
    winModal.style.display = 'none';
    loseModal.style.display = 'none';
  }

  /**
   * Opens start game modal 
   */
  function openModal() {
    startModal.style.display = 'block';
  }

  document.getElementById('start-game').addEventListener('click', startGame);
  document.getElementById('end-game').addEventListener('click', endGame);

  /**
   * Starts game when clicking on "Start Game" button; 
   * starts countdown and shuffles the cards;
   * makes cards clickable again by removing 'button-off';
   * hides 'Start Game' button and shows 'End Game' button instead
   */
  function startGame() {
    startTimer();
    shuffle();
    document.getElementsByClassName('memory-game')[0].classList.remove('button-off');
    document.getElementById('time-placeholder').classList.add('display-none');
    startButton.classList.add('display-none');
    endButton.classList.remove('display-none');
  }

  /**
   * Ends game by reloading window;
   * hides 'End Game' button and shows
   * 'Start Game' button instead
   */
  function endGame() {
    startButton.classList.remove('display-none');
    endButton.classList.add('display-none');
    window.location.reload();
  }

  /** 
   * Creates a countdown from 40 to 0
   */
  function startTimer() {
    const time = setInterval(function () {
      totalTime--;
      countdown.innerText = totalTime;
      if (totalTime === 0) {
        clearInterval(time);
        loseGame();
      }
    }, 1000);
  }

  // Source: Tutorial [4] - How to create a Memory Game 

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
   */
  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  /**
   * Accomplishes that the matching card pairs 
   * stay uncovered and can be clicked no longer;
   * match count calls winGame function once
   * 8 card matches have been found
   */
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();

    matchCount++;
    if (matchCount === 8) {
      winGame();
    };
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

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  /**
   * Shuffles the cards
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
   * Opens a modal window that displays winning message;
   * adds event listener that triggers a refresh of the page
   * to the button that closes the modal window when clicked
   */
  function winGame() {
    loseGame = null;
    winModal.style.display = 'block';

    for (var i = 0; i < startFromNew.length; i++) {
      startFromNew[i].addEventListener('click', reload);
    };
  }

  /**
   * Opens a modal window that displays losing message;
   * adds event listener that triggers a refresh of the page
   * to the button that closes the modal window when clicked
   */
  function loseGame() {
    loseModal.style.display = 'block';

    for (var i = 0; i < startFromNew.length; i++) {
      startFromNew[i].addEventListener('click', reload);
    };
  }

  /**
   * Starts game from new & shuffles the cards
   */
  function reload() {
    window.location.reload();
    shuffle();
  }

  // Closing brackets from DOMContentLoaded
});