import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = props => {
    return (
        <div className="home-wrapper">
            <div className="promo-phrases-container">
                <p className="promo-phrase phrase-1">Gana con una fila...</p>
                <p className="promo-phrase phrase-2">...gana con una columna</p>
                <p className="promo-phrase phrase-3">o con una diagonal...</p>
            </div>
            
            <Link to="/game" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '2rem'}} className="home-play-button">
                <span>JUEGA AL</span>
                <span>TIC TAC TOE</span>
            </Link>
        </div>
    );
}

export default Home;