import React from 'react'; 

import './PlayerSideSelector.css';
import { withTranslation } from 'react-i18next';

const PlayerSideSelector = props => {
    
    const { t } = props;
    const onPlayerSideChange = evt => {
        const { id } = evt.target;
        const playerXChoice = id === 'X';
        
       props.setPlayerSide(playerXChoice);
    }
    
    return(
        <div className="player-side-container">
            <p>{t('CHOOSE_SIDE')}</p>
            <div className="player-side-selector">
                <div>
                    <input type="radio" required name="playerSide" id="X" value="X" onChange={onPlayerSideChange} />
                    <label htmlFor="X">{t('PLAY_WITH_X')}</label>
                </div>
                <div>
                    <input type="radio" required name="playerSide" id="O" value="O" onChange={onPlayerSideChange} />
                    <label htmlFor="O">{t('PLAY_WITH_O')}</label>
                </div>
            </div>
        </div>
    );
};

export default withTranslation()(PlayerSideSelector);