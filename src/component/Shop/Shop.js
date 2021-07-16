import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const frist10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(frist10);
    const [Card, setCard] = useState([]);
    const handleAddpoduct = (product) =>{
    const NewCard = [...Card, product];
    setCard(NewCard); 
};
    return (
        <div className="shop_container">
            <div className="product_container">
                    {
                        products.map(pd => <Product handleAddpoduct = {handleAddpoduct} product={pd}></Product>)
                    }
            </div>
            <div className="cart-container">
               <Cart cart={Card}></Cart>
            </div>
        </div>
    );
};

export default Shop;