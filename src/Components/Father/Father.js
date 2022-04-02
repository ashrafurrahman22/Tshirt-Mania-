import React from 'react';
import Myself from '../Myself/Myself'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'

const Father = ({house, oranament}) => {
    // console.log(oranament)
    return (
        <div>
            <h2>Father</h2> 
            <p>House: {house}</p>
            <div style={{display:'flex'}}>
            <Myself house={house} oranament={oranament}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
            </div>
            
        </div>
    );
};

export default Father;