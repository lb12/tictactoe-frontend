import React from 'react';
import './Footer.css';
import { Translator } from '../Translator/Translator';

const Footer = props => {
    return (
        <footer className="main-footer">
            <a href="https://github.com/lb12" target="_blank" rel="noopener noreferrer" className="author">
                <span>&copy; David Escribano Rodríguez</span>
            </a>
            <Translator />
        </footer>
    );
}
export default Footer;