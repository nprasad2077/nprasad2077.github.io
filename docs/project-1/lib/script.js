const cards = document.querySelectorAll('.memory-card');    //Select all card elements
let hasFlipped = false;
let lockBoard = false;
let firstCard;
let secondCard;
let score = 6;
let scoreDisplay = document.querySelector('.scoreText')
let statusDisplay = document.querySelector('.status')
const modal = document.querySelector('.modal');
const trigger = document.querySelector('.trigger')
const closeButton = document.querySelector('.close-button')
const order1 = document.querySelector('[style="order: 1;"]')

scoreDisplay.innerText = `There are ${score} pairs remaining!`
statusDisplay.innerText = 'Pick two cards to begin.'

function flipCard() {
    if (lockBoard) {return;}                //lock board to prevent revealing of other cards after 2 have been selected.
    if (this === firstCard) {return;}  //Prevents double-click on same card
    this.classList.toggle('flip')       //Flip-Card animation

    if (!hasFlipped) {                      //Allows for toggle between first card clicked and second card clicked. (has first card been clicked? true or false.)
        hasFlipped = true;
        firstCard = this;                   // First clicked card
        console.log(hasFlipped, firstCard);
        return;
    }
    hasFlipped = false;
    secondCard = this;
    checkMatch();
}

function checkMatch () {            // Check for match
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCard() : unflipCard()      //If match, remove event listener so card cant be clicked again. If no match, then flip card back over.
}

function disableCard () {
    firstCard.removeEventListener('click', flipCard)    //It's a match!
    secondCard.removeEventListener('click', flipCard)
    score -= 1;
    scoreDisplay.innerText = `There are ${score} pair(s) remaining!`
    statusDisplay.innerHTML = '<p style="color: lime;">Correct!</p>'
    console.log(score);
    if (score === 0){
        winnerCheck();
    }
}

function unflipCard () {
    lockBoard = true;
    statusDisplay.innerHTML = '<p style="color: rgb(254, 61, 0);">Incorrect. Try Again!</p>'
    setTimeout(() => {
        firstCard.classList.toggle('flip')      //Not a match
        secondCard.classList.toggle('flip')     //Remove or Toggle can be used here.
        resetBoard();
    }, 1500);
}

function resetBoard() {
    hasFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle () {                                  // Shuffle Cards - Immediately Invoked function - executes when declared. 
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()* 12)
        card.style.order = randomPos;
    })
})();

cards.forEach(cards => cards.addEventListener('click', flipCard))   //Add Event listeners to card elements. When clicked, execute flip function.



// Modal 

function toggleModal () {
    modal.classList.toggle('show-modal')
}

function windowOnClick (event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);


//Winner Display

function winnerCheck() {
    statusDisplay.innerHTML = '<p style="color: rgb(255, 205, 5);">WINNER!</p>';
    setTimeout(() => {
        alert('Congratulations! You completed the game board. Press reset to play again!');
    }, 1250);
}

// Keybaord Selector

// cards.forEach(cards => addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         cards.click();
//     }
// }))
