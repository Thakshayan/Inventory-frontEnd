import React from 'react';
import CartProduct from './cartProduct';

const cartProductList = () =>{
    return(
        <div className="container">
			<div className="row">
    			<div className="col-md-12 ">
    				<div className="cart-list">
	    				<table className="table">
						    <thead className="thead-primary">
						      <tr className="text-center">
						        <th>&nbsp;</th>
						        <th>&nbsp;</th>
						        <th>Product name</th>
						        <th>Price</th>
						        <th>Quantity</th>
						        <th>Total</th>
						      </tr>
						    </thead>
						    <tbody>
						      <CartProduct/>
						    </tbody>
						</table>
					</div>
    			</div>
    		</div>
    		<div className="row justify-content-end">
    			<div className="col-lg-12 mt-5 cart-wrap ">
    				<div className="cart-total mb-3">
    					<h3>Cart Totals</h3>
    					<p className="d-flex">
    						<span>Subtotal</span>
    						<span>$20.60</span>
    					</p>
    					<p className="d-flex">
    						<span>Delivery</span>
    						<span>$0.00</span>
    					</p>
    					<p className="d-flex">
    						<span>Discount</span>
    						<span>$3.00</span>
    					</p>
    					<hr/>
    					<p className="d-flex total-price">
    						<span>Total</span>
    						<span>$17.60</span>
    					</p>
    				</div>
    				<p><a href="checkout.html" className="btn btn-primary py-3 px-4 col-lg-12">Proceed to Checkout</a></p>
    			</div>
    		</div>
		</div>
    );
};

export default cartProductList;