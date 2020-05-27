import React, { useState } from 'react';
import GameContext from '../../contexts/gameContext';
import PlayerSideSelector from '../PlayerSideSelector';

const Gameroom = props => {
    const createNewBoard = () => ["", "", "", "", "", "", "", "", ""];

    const [board, setBoard] = useState(createNewBoard());
    const [gameStatus, setGameStatus] = useState("GAME_NOT_STARTED");
    const [isPlayerX, setIsPlayerX] = useState(true);
    const [isXTurn, setIsXTurn] = useState(true);


    const gameContext = {
        board,
        isPlayerX,
        isXTurn,
        gameStatus
    };


    // Handlers or evt methods
    const changeIsPlayerSide = value => setIsPlayerX(value);
    const startGameStatus = () => setGameStatus('GAME_IN_PROGRESS');

    // Utils
    const getPlayerSideValue = () => isPlayerX ? 'X' : 'O';
    

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
                        <span>Juegas con {getPlayerSideValue()}</span>
                        <p>tablero de juego</p>
                    </div>
                }
            </div>
        </GameContext.Provider>
    );
    
}

export default Gameroom;