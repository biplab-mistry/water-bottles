// get from local storage

const getCartFromLocalStorage=()=>{
    const c=localStorage.getItem("cart")
    if(c){
        const cartObj=JSON.parse(c)
        return cartObj;
    }
    else{
        return [];
    }
}

// add to local storage

const addCartToLocalStorage=(id)=>{
    const cartString=JSON.stringify(id)
    localStorage.setItem("cart",cartString)
}
export {addCartToLocalStorage as addCart , getCartFromLocalStorage as getCart}