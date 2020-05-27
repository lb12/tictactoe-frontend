import React from 'react'; 

const PlayerSideSelector = props => {
    
    const onPlayerSideChange = evt => {
        const { id } = evt.target;
        const playerXChoice = id === 'X';
        
       props.setPlayerSide(playerXChoice);
    }
    
    return(
        <div>
            <p>Elige con qué quieres jugar</p>
            <div>
                <div>
                    <input type="radio" name="playerSide" id="X" value="X" onChange={onPlayerSideChange} />
                    <label htmlFor="X">Jugar con X</label>
                </div>
                <div>
                    <input type="radio" name="playerSide" id="O" value="O" onChange={onPlayerSideChange} />
                    <label htmlFor="O">Jugar con O</label>
                </div>
            </div>
        </div>
    );
};

export default PlayerSideSelector;