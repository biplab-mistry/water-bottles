// get from local storage

const getCartFromLocalStorage = () => {
    const c = localStorage.getItem("cart")
    if (c) {
        const cartObj = JSON.parse(c)
        return cartObj;
    }
    else {
        return [];
    }
}

// add to local storage

const addCartToLocalStorage = (id) => {
    const cartString = JSON.stringify(id)
    localStorage.setItem("cart", cartString)
}
// delete from local storage

const deleteFromLocalStorage = (removeId) => {
    const update = getCartFromLocalStorage()
    const newUpdate = JSON.stringify(update.filter(id => id !== removeId))
    localStorage.setItem("cart", newUpdate)
}

export { addCartToLocalStorage as addCart, getCartFromLocalStorage as getCart, deleteFromLocalStorage as deleteCart }

