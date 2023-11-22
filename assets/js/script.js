// Variables

let startButton = document.getElementById('open-modal');
let endButton = document.getElementById('end-game');
let reloadPage = document.getElementsByClassName('reload');

let startModal = document.getElementById('modalStart');
let winModal = document.getElementById('modalWin');
let loseModal = document.getElementById('modalLose');
let closeModalWindow = document.getElementsByClassName('close-modal');

let timer = document.getElementById('countdown');
let matchCount = 0;
let totalTime = 41;

const memoryCards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Functions

document.addEventListener('DOMContentLoaded', function () {
  // Disables the memory cards to be clickable until user has pressed the start button
  document.getElementsByClassName('memory-game')[0].classList.add('cards-not-clickable');

// Event Listeners

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('end-game').addEventListener('click', endGame);
memoryCards.forEach(card => card.addEventListener('click', flipCard));

// Modals

  // Adds event listeners to all elements with close-modal class 
  for (var i = 0; i < closeModalWindow.length; i++) {
    closeModalWindow[i].addEventListener('click', closeModal);
  }

  // Adds event listener for 'Start Game' modal box 
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

// Game Functions

  /**
   * Starts game when clicking on 'Start Game' button; 
   * starts countdown and shuffles the cards;
   * makes cards clickable again by removing 'cards-no-click';
   * hides 'Start Game' button and shows 'End Game' button instead
   */
  function startGame() {
    startTimer();
    shuffleCards();
    document.getElementsByClassName('memory-game')[0].classList.remove('cards-not-clickable');
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
      timer.innerText = totalTime;
      if (totalTime === 0) {
        clearInterval(time);
        loseGame();
      }
    }, 1000);
  }

// Credits: Tutorial [4]

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
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
    } else {
      unflipCards();
    }}

  /**
   * Matching card pairs stay uncovered and can be clicked no longer;
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
    }
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
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  /**
   * Shuffles the cards
   */
  function shuffleCards() {
    memoryCards.forEach(memoryCard => {
      const randomPos = Math.floor(Math.random() * 12);
      memoryCard.style.order = randomPos;
    });
  }

  // Credits End: Tutorial [4]

  /** 
   * Opens a modal window that displays winning message;
   * adds event listener that triggers a refresh of the page
   * to the button that closes the modal window when clicked
   */
  function winGame() {
    winModal.style.display = 'block';
    loseModal = function() { };

    for (var i = 0; i < reloadPage.length; i++) {
      reloadPage[i].addEventListener('click', reload);
    }
  }

  /**
   * Opens a modal window that displays losing message;
   * adds event listener that triggers a refresh of the page
   * to the button that closes the modal window when clicked
   */
  function loseGame() {
    loseModal.style.display = 'block';

    for (var i = 0; i < reloadPage.length; i++) {
      reloadPage[i].addEventListener('click', reload);
    }
  }

  /**
   * Starts game from new & shuffles the cards
   */
  function reload() {
    window.location.reload();
    shuffleCards();
  }

});