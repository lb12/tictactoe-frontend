import React from 'react';
import PlayerSideSelector from '../PlayerSideSelector';
import Board from '../Board';
import { getPlay } from '../../services/api';

export default class Gameroom extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isPlayerX: true,
            gameStatus: 'GAME_NOT_STARTED',
            board: this.createNewBoard(),
            isXTurn: true
        };
    }

    componentDidUpdate() {
        const { board, isPlayerX, gameStatus } = this.state;
        
        if (!isPlayerX && this.isBoardEmpty() && gameStatus === 'GAME_IN_PROGRESS') {
            this.requestAPIPlay(board, isPlayerX, false);
        }
    }

    requestAPIPlay = async (board, isPlayerX, nextXTurn) => {
        const response = await getPlay(board, isPlayerX);
        // Simulo un tiempo de respuesta de 1 seg como si estuviera pensando...
        setTimeout( () => {
            this.changeGameStatus(response.gameStatus);
            this.changeBoard(response.board);
            if (response.gameStatus === 'GAME_IN_PROGRESS')
                this.changeTurn(nextXTurn);
        }, 1000);
    }
    
    isBoardEmpty = () => this.state.board.filter(square => square === '').length === 9;

    createNewBoard = () => {
        const emptyBoard = ["", "", "", "", "", "", "", "", ""];
        return emptyBoard;
    };
    
    changeBoard = newBoard => {
        this.setState({ board: newBoard });        
    }
 
    changeTurn = turnX => {
        this.setState({ isXTurn: turnX });
    }
    
    changeGameStatus = gameStatus => {
        this.setState({ gameStatus });
    }

    isPlayerTurn = () => {
        const { isPlayerX, isXTurn } = this.state;

        return ((isPlayerX && isXTurn) || (!isPlayerX && !isXTurn));
    }

    // Handlers or evt methods
    changeIsPlayerSide = value => this.setState({ isPlayerX: value });
    startGameStatus = () => this.setState({ gameStatus: 'GAME_IN_PROGRESS' });
    resetGame = () => {
        this.startGameStatus();
        this.changeTurn(true);
        this.changeBoard(this.createNewBoard());
    };

    // Utils
    getPlayerSideValue = () => this.state.isPlayerX ? 'X' : 'O';
    getTurnValue = () => this.state.isXTurn ? 'X' : 'O';
    isGameFinished = () => {
        const { gameStatus } = this.state;

        return gameStatus !== 'GAME_IN_PROGRESS' && gameStatus !== 'GAME_NOT_STARTED';
    }

    render () {
        const { board, isPlayerX, gameStatus, isXTurn } = this.state;

        return(
            <div>

                <h1>Game room component</h1>

                <div>
                    {
                        gameStatus === 'GAME_NOT_STARTED'
                        &&
                        <React.Fragment>
                            <PlayerSideSelector setPlayerSide={this.changeIsPlayerSide} />
                            <div>
                                <button onClick={this.startGameStatus}>JUGAR</button>
                            </div>
                        </React.Fragment>
                    }
                    {
                        gameStatus !== 'GAME_NOT_STARTED'
                        &&
                        <div>
                            <p>Juegas con {this.getPlayerSideValue()}</p>
                            <p>ESTADO DE LA PARTIDA: {gameStatus}</p>
                            <p>TURNO DE : {this.getTurnValue()}</p>
                            <Board 
                                board={board}
                                isPlayerX={isPlayerX}
                                isXTurn={isXTurn}
                                isPlayerTurn= {this.isPlayerTurn}
                                updateBoard={this.changeBoard}
                                updateNextTurnValue = {this.changeTurn}
                                getTurnValue={this.getTurnValue}
                                requestAPIPlay={this.requestAPIPlay}
                                isGameFinished = {this.isGameFinished}
                            />
                            <input type="button" disabled={!this.isPlayerTurn} onClick={this.resetGame} value="RESET GAME" />
                        </div>
                    }
                </div>
            </div>
        );
    }

}