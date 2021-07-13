import React from 'react';

//components
import Subscribe from '../components/cartComponent/subscribe';
import CartProductList from '../components/cartComponent/cartProductList';
import Carousals from '../components/carousal';


const Cart = () => {
    return (
        <div>
            <Carousals/>
            <CartProductList/>
            <Subscribe/>    
        </div>

    );

}

export default Cart;