import React from 'react';
import './Cart.css'


const Cart = ({cart, handleRemoveFromCart}) => {
    // conditional rendering
    // 1. elements variable
    // 2. ternary operator condition ? true : false;
    // 3. && operator (short-hand)
    // 4. || operator
    let command;
    if(cart.length < 1) {
        command = <p>Please Add atleast one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Add more if you want...</p>
    }
    else {
        command = <p><small>Thanks for adding</small></p>
    }
    

    return (
        <div>
            <h2>Selected Item: {cart.length}</h2>
            {command}            
            {
                cart.map(tshirt => <p>{tshirt.name}
                <button onClick={ () => handleRemoveFromCart(tshirt)} style={{marginLeft: '10px'}}>X</button>
                </p> )
            }
            {cart.length === 3 && <p style={{backgroundColor:'orange'}}>Tin jhon k dekhao bro</p> }
            {cart.length ===0 || <p style={{backgroundColor: 'red'}}>Yay! You are buying</p>  }
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button> } 
            {cart.length === 4 && <button>Review Order</button> } 

        </div>
    );
};

export default Cart;