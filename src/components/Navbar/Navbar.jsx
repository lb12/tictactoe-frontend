import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = props => {
    return (
        <nav className="navbar">
            <div className="navbar-brand-name">
                <Link to="/">
                    <h1>Tic Tac Toe</h1>
                </Link>                
            </div>
        </nav>
    );
}

export default Navbar;