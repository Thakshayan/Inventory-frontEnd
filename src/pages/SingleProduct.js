import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Subscribe from '../components/cartComponent/subscribe';
import SingleProduct from '../components/productComponent/singleProduct'
import Carousals from '../components/carousal';
import ProductCollection from '../components/productComponent/productCollection';

const SingleProductView = () => {
    return(
        <div>
            <Header/>
            <Carousals/>
            <SingleProduct/>
            <ProductCollection/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};
export default SingleProductView;