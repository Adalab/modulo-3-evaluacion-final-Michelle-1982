import React from 'react';
import LogoImage from '../images/logo.png';
// 4. css si lo hay

const Logo = () => {
    return (
        <div className="page_logo">
        <img src={LogoImage} alt="Logo" />
        </div>
    );
}


export default Logo;
