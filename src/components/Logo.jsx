import React from 'react';
import LogoImage from '../images/logo.png';
import'../styles/logo.css'

const Logo = () => {
    return (
        <header class="page__header">
            <img class="logo" src={LogoImage} alt="Logo" />
        </header>
    );
}


export default Logo;
