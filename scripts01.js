const chessboard = document.getElementById('chessboard');
const pieces = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟', 
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

const initialBoard = [
    'rnbqkbnr',
    'pppppppp',
    '........',
    '........',
    '........',
    '........',
    'PPPPPPPP',
    'RNBQKBNR'
];

let selectedPiece = null;
let selectedSquare = null;

function createBoard() {
    chessboard.innerHTML = '';
    let isLightSquare = true;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square', isLightSquare ? 'light' : 'dark');
            square.dataset.row = row;
            square.dataset.col = col;

            const piece = initialBoard[row][col];
            if (piece !== '.') {
                square.innerHTML = `<span class="piece">${pieces[piece]}</span>`;
            }

            square.addEventListener('click', () => selectSquare(square));

            chessboard.appendChild(square);
            isLightSquare = !isLightSquare;
        }
        isLightSquare = !isLightSquare;
    }
}

function selectSquare(square) {
    if (selectedPiece) {
        movePiece(square);
    } else {
        const piece = square.querySelector('.piece');
        if (piece) {
            selectedPiece = piece;
            selectedSquare = square;
            square.classList.add('selected');
        }
    }
}

function movePiece(targetSquare) {
    if (targetSquare !== selectedSquare) {
        targetSquare.innerHTML = '';
        targetSquare.appendChild(selectedPiece);
    }
    selectedSquare.classList.remove('selected');
    selectedPiece = null;
    selectedSquare = null;
}

createBoard();
