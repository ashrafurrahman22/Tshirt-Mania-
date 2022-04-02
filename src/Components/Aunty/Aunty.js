import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';

const Aunty = ({house}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Aunty</h2>
            <p>House: {house}</p>
            <p><small>Ring: {ring}</small></p>
        </div>
    );
};

export default Aunty;