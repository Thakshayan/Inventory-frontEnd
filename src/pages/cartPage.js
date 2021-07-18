import React from 'react';
import ItemCollection from '../components/cartComponent/itemCollection';
import { CartProvider } from "react-use-cart";
import Cart from '../components/cartComponent/cart';

const cartPage = (props) => {
    return (
        <div>
            <CartProvider>
                <Cart/>
                <ItemCollection />
            </CartProvider>
        </div>
    );
}

export default cartPage;