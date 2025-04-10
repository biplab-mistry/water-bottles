import React from 'react';

const Cart = ({item,handleRemove}) => {
    return (
        <div className='relative'>
            <img src={item?.img} alt="" />
            <h1>{item?.name}</h1>
            <button className=' absolute bottom-0 right-0 btn p-1 rounded bg-amber-200' onClick={()=>handleRemove(item.id)}>X</button>
            
        </div>
    );
};

export default Cart;