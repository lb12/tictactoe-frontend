import React, { useContext } from 'react';
import Square from '../Square';
import GameContext from '../../contexts/gameContext';
import './Board.css';

const Board = props => {

    const BOARD_SIZE = 3;
    const { board, updateBoard, updateNextTurnValue, isPlayerTurn } = useContext(GameContext);

    const renderBoard = () => {
        return <div className="board">{renderRows()}</div>;
    };

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

    const onSquareClick = async squareId => {
        if (!isPlayerTurn() || isClickedSquare(squareId) /* || isGameFinished() */) return;
    
        updateBoard(squareId);
        updateNextTurnValue();


        // Llamar al API para que juegue el bot
    
      };

      const isClickedSquare = squareId => board[squareId];

    return (
        <div>{renderBoard()}</div>
    );
};

export default Board;