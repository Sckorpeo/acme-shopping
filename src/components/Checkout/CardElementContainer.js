import React from 'react';
import './CardElementContainer.css';

const CardElementContainer = ({ children }) => {
    return (
        <div className="CardElementContainer neumorphism-with-border">
            {children}
        </div>
    );
};

export default CardElementContainer;
