import React, { useState } from 'react';
import './App.css';

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(board);

    function handleClick(index) {
        if (board[index] || winner) return;

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }

    function resetGame() {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    }

    return (
        <div className="App">
            <h1>Tic Tac Toe</h1>
            {winner ? <h2>{winner} Wins!</h2> : <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>}
            <div className="board">
                {board.map((cell, index) => (
                    <div
                        key={index}
                        className="cell"
                        onClick={() => handleClick(index)}
                    >
                        {cell}
                    </div>
                ))}
            </div>
            <button onClick={resetGame}>Reset</button>
        </div>
    );
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

export default App;