// React imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import {ToastsStore} from 'react-toasts';

// Own imports
import PlayerSideSelector from '../PlayerSideSelector';
import Board from '../Board';
import { getPlay } from '../../services/api';
import { gameStatusCode } from '../../utils/dictionary';
import './Gameroom.css';


class Gameroom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isPlayerX: true,
            gameStatus: gameStatusCode.GAME_NOT_STARTED,
            board: this.createNewBoard(),
            isXTurn: true
        };
    }

    componentDidUpdate() {
        const { board, isPlayerX, gameStatus } = this.state;

        if (!isPlayerX && this.isBoardEmpty() && gameStatus === gameStatusCode.GAME_IN_PROGRESS) {
            this.requestAPIPlay(board, isPlayerX, false);
        }
    }

    requestAPIPlay = async (board, isPlayerX, nextXTurn) => {
        const response = await getPlay(board, isPlayerX);

        if (response.error) {
            const { t } = this.props;
            ToastsStore.error(t(response.message), 10000);
            return;
        }

        this.renderBotAnswer(response, nextXTurn);
    }
    
    renderBotAnswer = ({ gameStatus, board }, nextXTurn) => {
        // Simulo un tiempo de respuesta de 1 seg como si estuviera pensando...
        setTimeout(() => {
            this.changeGameStatus(gameStatus);
            this.changeBoard(board);
            if (gameStatus === gameStatusCode.GAME_IN_PROGRESS)
                this.changeTurn(nextXTurn);
        }, 1000);
    }

    isBoardEmpty = () => this.state.board.filter(square => square === '').length === 9;

    createNewBoard = () => ["", "", "", "", "", "", "", "", ""];

    changeBoard = newBoard => this.setState({ board: newBoard });

    changeTurn = turnX => this.setState({ isXTurn: turnX });

    changeGameStatus = gameStatus => this.setState({ gameStatus });

    isPlayerTurn = () => {
        const { isPlayerX, isXTurn } = this.state;

        return ((isPlayerX && isXTurn) || (!isPlayerX && !isXTurn));
    }

    // Handlers or evt methods
    changeIsPlayerSide = value => this.setState({ isPlayerX: value });
    startGameStatus = () => this.changeGameStatus(gameStatusCode.GAME_IN_PROGRESS);
    resetGame = (evt, gameStatus = gameStatusCode.GAME_IN_PROGRESS) => {
        this.changeGameStatus(gameStatus);
        this.changeTurn(true);
        this.changeBoard(this.createNewBoard());
    };

    // Utils
    getPlayerSideValue = () => this.state.isPlayerX ? 'X' : 'O';
    getTurnValue = () => this.state.isXTurn ? 'X' : 'O';
    isGameFinished = () => {
        const { gameStatus } = this.state;

        return gameStatus !== gameStatusCode.GAME_IN_PROGRESS && gameStatus !== gameStatusCode.GAME_NOT_STARTED;
    }

    selectPlayerSideAndStartGame = playerSide => {
        this.changeIsPlayerSide(playerSide);
        this.startGameStatus();
    }

    finishGame = () => this.resetGame(null, gameStatusCode.GAME_NOT_STARTED);

    render() {
        const { board, isPlayerX, gameStatus, isXTurn } = this.state;
        const { t } = this.props;
        return (
            <div className="gameroom-container">

                <h1>{t('GAMEROOM')}</h1>

                <div className="gameroom-wrapper">
                    <div className="gamezone-container">
                        {
                            gameStatus === gameStatusCode.GAME_NOT_STARTED
                            &&
                            <div className="player-form-container">
                                <PlayerSideSelector startGame={this.selectPlayerSideAndStartGame} />
                            </div>
                        }
                        {
                            gameStatus !== gameStatusCode.GAME_NOT_STARTED
                            &&
                            <div className="main-gamezone-board">
                                <h3 className="gamestatus">{t(gameStatus)}</h3>
                                <div className="player-turn">
                                    <span className={this.getTurnValue() === 'X' ? 'current-turn' : ''}>X</span>
                                    <span className={this.getTurnValue() === 'O' ? 'current-turn' : ''}>O</span>
                                </div>
                                <Board
                                    board={board}
                                    isPlayerX={isPlayerX}
                                    isXTurn={isXTurn}
                                    isPlayerTurn={this.isPlayerTurn}
                                    updateBoard={this.changeBoard}
                                    updateNextTurnValue={this.changeTurn}
                                    getTurnValue={this.getTurnValue}
                                    requestAPIPlay={this.requestAPIPlay}
                                    isGameFinished={this.isGameFinished}
                                />
                                <div className="game-button-row">
                                    <button disabled={!this.isGameFinished()} onClick={this.resetGame}>{t('RESET_GAME')}</button>
                                    <button disabled={!this.isGameFinished()} onClick={this.finishGame}>{t('GO_LOBBY_ROOM')}</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default withTranslation()(Gameroom);