import React, { useState } from 'react';
import GameContext from '../../contexts/gameContext';
import PlayerSideSelector from '../PlayerSideSelector';
import Board from '../Board';

const Gameroom = props => {
    const createNewBoard = () => ["", "", "", "", "", "", "", "", ""];

    const [board, setBoard] = useState(createNewBoard());
    const [gameStatus, setGameStatus] = useState("GAME_NOT_STARTED");
    const [isPlayerX, setIsPlayerX] = useState(true);
    const [isXTurn, setIsXTurn] = useState(true);


    // 
    const changeBoard = squareId => {
        const newBoard = [...board];
        newBoard[squareId] = getTurnValue();
        setBoard(newBoard);
    }
 
    const changeTurn = () => {
        setIsXTurn(!isXTurn);
    }

    const isPlayerTurn = () => ((isPlayerX && isXTurn) || (!isPlayerX && !isXTurn));

    // Handlers or evt methods
    const changeIsPlayerSide = value => setIsPlayerX(value);
    const startGameStatus = () => setGameStatus('GAME_IN_PROGRESS');

    // Utils
    const getPlayerSideValue = () => isPlayerX ? 'X' : 'O';
    const getTurnValue = () => isXTurn ? 'X' : 'O';
    

    const gameContext = {
        board,
        isPlayerX,
        gameStatus,
        isPlayerTurn,
        updateBoard: changeBoard,
        updateNextTurnValue: changeTurn
    };

    return (        
        <GameContext.Provider value={gameContext}>
            <h1>Game room component</h1>

            <div>
                {
                    gameStatus === 'GAME_NOT_STARTED'
                    &&
                    <React.Fragment>
                        <PlayerSideSelector setPlayerSide={changeIsPlayerSide} />
                        <div>
                            <button onClick={startGameStatus}>JUGAR</button>
                        </div>
                    </React.Fragment>
                }
                {
                    gameStatus !== 'GAME_NOT_STARTED'
                    &&
                    <div>
                        <p>Juegas con {getPlayerSideValue()}</p>
                        <p>ESTADO DE LA PARTIDA: </p>
                        <p>TURNO DE : {getTurnValue()}</p>
                        <Board />
                    </div>
                }
            </div>
        </GameContext.Provider>
    );
    
}

export default Gameroom;