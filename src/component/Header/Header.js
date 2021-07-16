import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">

            <nav>
                <a href="/checkOut">Check out</a>
                <a href="/shipping">Shipping Information</a>
                <a href="/payment">Payment</a>
            </nav>
        </div>
    );
};

export default Header;