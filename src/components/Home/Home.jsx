import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import { withTranslation } from 'react-i18next';

const Home = props => {
    const { t } = props;

    return (
        <div className="home-wrapper">
            <div className="promo-phrases-container">
                <p className="promo-phrase phrase-1">{t('PROMO_PHRASE_1')}</p>
                <p className="promo-phrase phrase-2">{t('PROMO_PHRASE_2')}</p>
                <p className="promo-phrase phrase-3">{t('PROMO_PHRASE_3')}</p>
            </div>
            
            <Link to="/game" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '2rem'}} className="home-play-button">
                <span>{t('PLAY_TO')}</span>
                <span>TIC TAC TOE</span>
            </Link>
        </div>
    );
}

export default withTranslation()(Home);