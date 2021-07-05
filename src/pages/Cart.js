import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Subscribe from '../components/cartComponent/subscribe';
import CartProductList from '../components/cartComponent/cartProductList';

import Carousals from '../components/carousal';



const Cart = () => {
    return (
        <div>
            <Header/>
            <Carousals/>
            <CartProductList/>
            <Subscribe/>
            <Footer/>
        </div>

    );

}

export default Cart;