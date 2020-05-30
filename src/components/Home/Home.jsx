// React imports
import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Own imports
import './Home.css';


const Home = props => {
    const { t } = props;

    return (
        <div className="home-wrapper">
            <div className="promo-phrases-container">
                <div className="phrase-1"><p className="promo-phrase">{t('PROMO_PHRASE_1')}</p></div>
                <div className="phrase-2"><p className="promo-phrase">{t('PROMO_PHRASE_2')}</p></div>
                <div className="phrase-3"><p className="promo-phrase">{t('PROMO_PHRASE_3')}</p></div>
            </div>
            
            <Link to="/game" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '2rem'}} className="home-play-button">
                <span>{t('PLAY')}</span>
            </Link>
        </div>
    );
}

export default withTranslation()(Home);