// JavaScript Document
$(document).ready(function () {
    let curPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;

    function Board() {
        document.write('<div id="board" class="board">');
        for (let i = 0; i < 9; i++) {
            document.write(`<div class="square" data-index="${i}"></div>`);
        }
        document.write('</div>');
        document.write('<button id="resetBtn">New Game</button>');
    }

    function checkWin() {
		const boardWin = [
			//columns
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			//rows
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			//diagonals
			[0, 4, 8], [2, 4, 6]
		];
		
		let checkWinner = false;
		let i = 0;
		
		while (i < boardWin.length) {
			const [a, b, c] = boardWin [i];
			
			if (checkWinner === false) {
				if (gameBoard[a] !== "" & gameBoard[a] === gameBoard[b]) {
					if (gameBoard[b] === gameBoard[c]) {
						checkWinner = true;
					}
				}
			}
			i++
		}
		return checkWinner
	}

	function checkTie() {
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            return false; // If any square is empty, it's not a tie
        }
    }
    return true; // All squares are filled, indicating a tie
	}


    function switchPlayer() {
       if (curPlayer === "X") {
		   curPlayer = "0";
	   } else {
		   curPlayer = "X";
	   }
    }

    function interaction() {
		
		if (gameOver === false & this.textContent === '') {
    		const index = this.getAttribute('data-index');
			gameBoard[index] = curPlayer;
			this.textContent = curPlayer;
		}


            if (checkWin()) {
                alert(`Player ${curPlayer} wins!`);
                gameOver = true;
            } else if (checkTie()) {
                alert("It's a tie!");
                gameOver = true;
            } else {
                switchPlayer();
            }
        }

    function resetGame() {
        $('.square').text('');
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        curPlayer = 'X';
        gameOver = false;
    }

    Board();

    $('.square').on('click', interaction);
    $('#resetbutton').on('click', resetGame);
});
