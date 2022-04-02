import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'


 export const RingContext = createContext('Diamond');

const Grandpa = () => {

    const [house, setHouse] = useState(1);
    const oranament = 'Diamond Ring';

    

    const handleBuyAHouse = () => {
        const updated = house + 1;
        setHouse(updated)
    }

    return (
      <RingContext.Provider value={oranament}>
           <div className='main-container'>
           <h2>Grandpa</h2>
           <button onClick={handleBuyAHouse}>Buy a House</button>
           <p>House: {house}</p>
            <div className='grandpa'>
               <Father house={house} oranament={oranament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
        </div>
       </div>
      </RingContext.Provider>
    );
};

export default Grandpa;