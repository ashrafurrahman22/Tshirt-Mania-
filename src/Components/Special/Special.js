import React, { useContext } from 'react';
import {RingContext} from '../GrandPa/Grandpa'

const Special = ({oranament}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>special</h2>
            <p> <small>Gift: {oranament}</small></p>
            <p> <small>Gift: {ring}</small></p>

        </div>
    );
};

export default Special;