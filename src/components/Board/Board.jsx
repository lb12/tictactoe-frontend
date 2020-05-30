// React imports
import React from 'react';

// Own imports
import Square from '../Square';
import './Board.css';

const Board = ({ board, isPlayerX, isXTurn, isPlayerTurn, updateBoard, updateNextTurnValue, getTurnValue, requestAPIPlay, isGameFinished }) => {

    const BOARD_SIZE = 3;

    const renderBoard = () => <div className="board">{renderRows()}</div>;

    const renderRows = () => {
        const rows = [];

        for (let i = 0; i < BOARD_SIZE; i++) {
            const row = renderRow(BOARD_SIZE * i, BOARD_SIZE * (1 + i));

            rows.push(
                <div key={`board-row_${i}`} className="board-row">
                    {row}
                </div>
            );
        }
        return rows;
    };

    const renderRow = (from, to) => {
        const rowSquares = [];
        for (let i = from; i < to; i++) {
            rowSquares.push(
                <Square
                    key={`square_${i}`}
                    id={i}
                    value={board[i]}
                    onClickSquare={onSquareClick}
                />
            );
        }
        return <React.Fragment>{rowSquares}</React.Fragment>;
    };

    const clickInBoard = squareId => {
        const newBoard = [...board];
        newBoard[squareId] = getTurnValue();
        return newBoard;
    }

    const onSquareClick = async squareId => {
        if (!isPlayerTurn() || isClickedSquare(squareId) || isGameFinished()) return;
    
        const newBoard = clickInBoard(squareId);
        updateBoard(newBoard);
        updateNextTurnValue(!isXTurn);

        await requestAPIPlay(newBoard, isPlayerX, isXTurn);
    };

    const isClickedSquare = squareId => board[squareId];

    return (
        <div>{renderBoard()}</div>
    );
};

export default Board;