import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import Cart from '../Cart/Cart';
import { addCart, deleteCart, getCart } from '../../utility/Utility';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [carts, setCarts] = useState([])
    const [id, setId] = useState([])



    useEffect(() => {
        fetch("bottles.json")
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        const cartsArr = getCart()
        const founds=[]
        for (let cartArr of cartsArr) {
            const storeCarts = bottles.find((c) => c.id === cartArr)
          founds.push(storeCarts)
        }
        setCarts(founds)

       
    }, [bottles])

    const handleCart = (cartItem) => {
        const newIds = [...id, cartItem.id]
        setCarts([...carts, cartItem]);
        setId(newIds)
        addCart(newIds)
    }
const handleRemove=(id)=>{
    const update=carts.filter(ca=>ca.id !==id)
    deleteCart(id)
    setCarts(update)
}

    return (
        <div>
            <h1>Total Bottles count :{bottles.length}</h1>
            <h1>Cart Items:{carts.length}</h1>
            <div className='my-4 grid grid-cols-10 gap-2'>
                {carts.map(item => <Cart handleRemove={handleRemove} item={item}></Cart>)}

            </div>
            <div className="grid grid-cols-6 gap-4">
                {bottles.map((bottle) => <Bottle handleCart={handleCart} bottle={bottle} key={bottle.id}></Bottle>)}
            </div>

        </div>
    );
};

export default Bottles;