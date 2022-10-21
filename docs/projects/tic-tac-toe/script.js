const playerX = 'X'    
const playerY = 'O'
const winningBank = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 5, 8], [1, 4, 7], [0, 3, 6], [0, 4, 8], [2, 4, 6]]
// Established Player 1 and 2 plus bank of possilbe combinations. The key uses digits 0-8 to represent the 9 boxes. 
// Create variables to target cell and board elements on HTML.
const cellElements = document.querySelector('.grid-item')
const restart = document.querySelector('#restart')      // Restart Button
let gameActive = true;  // Game On/Off function used for tie-game
let currentPlayer = 'X';    //Will toggle between X and O throughout the game.
let gameState = ["", "", "", "", "", "", "", "", ""];   //Array that will hold the X or 0 values selected in the grid. Each index number [i] represents the 9 tic -tac-toe boxes.
const winningMessage = () => `Player ${currentPlayer} has won!`;    //Function to return winner X or O
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;     //Current player display
const drawMessage = () => `Game ended in a draw!`;                  // Draw message
const statusDisplay = document.querySelector('.game--status');      //Select game message display
statusDisplay.innerHTML = currentPlayerTurn();                      //Initial display of scoreboard message.

function cellClick (clickedCellEvent){                             
    const clickedCell = clickedCellEvent.target                    //Variable that contains data for the clicked cell.
    const clickedCellIndex = parseInt(                             //Get number value from the 0-8 data-cell-index in div
        clickedCell.getAttribute('data-cell-index')                
    )
    if (!gameActive){                                              // Check game status and alert if false
        alert('Game Ended!\nPress Restart')
        return;
    }
    if (gameState[clickedCellIndex] !== '' ) {                     //If there is an X or O already in the index position, an alert will pop up
        alert('Already Selected!')
        return;
        };
    console.log(clickedCellIndex, gameState);
    cellPlayed(clickedCell, clickedCellIndex)                   //Function to insert X or O HTML element from the currentPlayer variable.
    readGame();                                                //Function to check if any combination matches the winning library.
}

function readGame(){                                           //Function to check if any combination matches the winning library.
    let roundWon = false;
    for (let i=0; i<=7; i++) {                                  //Iterate over the 8 possible winning combinations in winningBank array
        const winCondition = winningBank[i]                     
        let a = gameState[winCondition[0]]                     //Check if gameState array matches index positions of winning combinations (with any X or 0).
        let b = gameState[winCondition[1]]
        let c = gameState[winCondition[2]]
        if (a === '' || b === '' || c === '') {                
            continue;
        }
        if (a === b && b === c) {                           //If X-X-X or O-O-O are a, b, and c then we have a winner.
            roundWon = true;
            break;
        }
    }
        if (roundWon) {
            statusDisplay.innerHTML = winningMessage();         //Winner!
            gameActive = false;
            return;
    }

        let roundDraw = !gameState.includes('');            //If gameState has all positions filled (meaning no winner) then draw
        if (roundDraw) {
            statusDisplay.innerHTML = drawMessage();
            gameActive = false;
            return;
    }
        changePlayer();                                 //If none of the above conditons are met change player function.
        console.log('read');
    }

function cellPlayed(clickedCell, clickedCellIndex) {        //Function to insert X or O HTML element from the currentPlayer variable.
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function changePlayer(){                                    //Function that returns O if X is current player and O if current player is X.
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';      
    statusDisplay.innerHTML = currentPlayerTurn();          //Update game display
}

function restartGame (){
    currentPlayer = 'X';
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.grid-item').forEach(cell => cell.innerHTML = '');
    console.log('restart');
    gameActive = true;
}

document.querySelectorAll('.grid-item').forEach(cell => cell.addEventListener('click', cellClick));         //Event listener on every grid element.

document.querySelector('#restart').addEventListener('click', restartGame);                                 //Event listner on reset button.


