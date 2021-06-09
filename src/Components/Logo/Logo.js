import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import kitty from './catface.png';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img src={kitty} alt="kitty" /></div>
            </Tilt>
        </div>
    );
}

export default Logo;
