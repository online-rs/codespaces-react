import React from 'react';
import './Button.css';

const Button = ({ text, onClick,classe }) => {
    return (
        <button className={classe} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
