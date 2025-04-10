import React from 'react';

const Cart = ({item,handleRemove}) => {
    return (
        <div>
            <img src={item?.img} alt="" />
            <h1>{item?.name}</h1>
            <button onClick={()=>handleRemove(item.id)}>X</button>
            
        </div>
    );
};

export default Cart;