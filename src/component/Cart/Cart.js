import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    // const Total = cart.reduce((total, prd) => total + prd.price, 0);
    let Total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        Total = Total + product.price;
    }
    let shipping = 0;
    if (Total > 35) {
        shipping = 0;
    } else if (Total > 10.99) {
        shipping = 4.99;
    }
    const grandTotal = (Total + shipping).toFixed(2);
    return (
        <div>
            <h4>Order summary</h4>
            <p>Item Ordered : {cart.length}</p>
            <p><small>Product Price: tk{Total}</small></p>
            <p><small>Shippig Cost: tk {shipping}</small></p>
            <h2>Total Price :tk {grandTotal}</h2>
        </div>
    );
};

export default Cart;