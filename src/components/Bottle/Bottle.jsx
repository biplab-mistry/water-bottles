import React from 'react';

const Bottle = ({bottle,handleCart}) => {
    const {img,name,price,ratings,stock}=bottle
    return (
        <div className='border p-2 bg-cyan-100 rounded-xl'>
            <img className='w-24 h-24' src={img} alt="" />
            <h1>Name:{name}</h1>
            <p>Price:${price}</p>
            <p>Stock:{stock}</p>
            <p>Ratings:{ratings}</p>
            <button onClick={()=>handleCart(bottle)} className='rounded border p-1 bg-amber-300 mt-2'>Buy Now</button>
            
        </div>
    );
};

export default Bottle;