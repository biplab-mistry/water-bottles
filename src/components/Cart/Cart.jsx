import React from 'react';

const Cart = ({item}) => {
    return (
        <div>
            <img src={item?.img} alt="" />
            <h1>{item?.name}</h1>
            
        </div>
    );
};

export default Cart;