import React from 'react';
import Special from '../Special/Special'

const Myself = ({house, oranament}) => {
    
    return (
        <div>
            <h2>Myself</h2>
            <p>House: {house}</p>
            <Special oranament={oranament}></Special>
        </div>
    );
};

export default Myself;