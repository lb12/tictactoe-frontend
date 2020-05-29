import React, { useState } from 'react'; 

import './PlayerSideSelector.css';
import { withTranslation } from 'react-i18next';

const PlayerSideSelector = ({ startGame, t }) => {

    const [playerSide, setPlayerSide] = useState(true);
    
    const onPlayerSideChange = evt => {
        const { id } = evt.target;
        const playerXChoice = id === 'X';
        
        setPlayerSide(playerXChoice);
    }

    const submitForm = evt => {
        evt && evt.preventDefault();
        startGame(playerSide);
    }
    
    return(
        <div className="player-side-container">
            <p>{t('CHOOSE_SIDE')}</p>
            <form className="player-side-selector" onSubmit={submitForm}>
                <div>
                    <input type="radio" required name="playerSide" id="X" value="X" onChange={onPlayerSideChange} />
                    <label htmlFor="X">{t('PLAY_WITH_X')}</label>
                </div>
                <div>
                    <input type="radio" required name="playerSide" id="O" value="O" onChange={onPlayerSideChange} />
                    <label htmlFor="O">{t('PLAY_WITH_O')}</label>
                </div>
                <button type="submit" className="play-game-btn">{t('PLAY')}</button>
            </form>
        </div>
    );
};

export default withTranslation()(PlayerSideSelector);