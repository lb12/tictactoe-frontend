import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div>
            <h1>Home component</h1>
            <Link to="/game">
                <button style={{padding: "4rem"}}>Ir a jugar</button>
            </Link>
        </div>

    );
}

export default Home;