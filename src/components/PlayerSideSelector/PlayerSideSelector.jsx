import React from 'react'; 

import './PlayerSideSelector.css';

const PlayerSideSelector = props => {
    
    const onPlayerSideChange = evt => {
        const { id } = evt.target;
        const playerXChoice = id === 'X';
        
       props.setPlayerSide(playerXChoice);
    }
    
    return(
        <div className="player-side-container">
            <p>Elige con qué quieres jugar</p>
            <div className="player-side-selector">
                <div>
                    <input type="radio" required name="playerSide" id="X" value="X" onChange={onPlayerSideChange} />
                    <label htmlFor="X">Jugar con X</label>
                </div>
                <div>
                    <input type="radio" required name="playerSide" id="O" value="O" onChange={onPlayerSideChange} />
                    <label htmlFor="O">Jugar con O</label>
                </div>
            </div>
        </div>
    );
};

export default PlayerSideSelector;