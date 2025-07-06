const loadCartFromLS = () => {
    const cartString = localStorage.getItem("cart");
    const cart = JSON.parse(cartString);
    if (cart) {
        return cart;
    }
    return [];
}

const saveIntoLS = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
}
export { loadCartFromLS, saveIntoLS }