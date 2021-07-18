import React from 'react';
import { useCart } from 'react-use-cart';
import Item from './item';

const Cart = (props) => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    if (isEmpty) return <h3>Empty cart</h3>
    return (
        
        <div className="container">
        <div className="row">
    			<div className="col-md-12 ">
    				<div className="cart-list">
                    {/* <button onClick = { ()=> emptyCart() }>clear</button> */}
	    				<table className="table">
						    <thead className="thead-primary">
						      <tr className="text-center">
						        
						        <th>&nbsp;</th>
						        <th>Product name</th>
						        <th>Price</th>
						        <th>Quantity</th>
						        <th>Total</th>
                                <th>&nbsp;</th>
						      </tr>
						    </thead>
						    <tbody>
                            {items.map((item,index)=>{
                return(
                <tr key={index}>

                    
                    <td><img src={item.img} style={{width:"100px",height:"100px"}}/></td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity*item.price}</td>
                    <td>
                        <button type="button" class="btn btn-warning " onClick = {() => updateItemQuantity(item.id,item.quantity-1)}>&nbsp; - &nbsp;</button>&nbsp;
                        <button type="button" class="btn btn-success" onClick = {() => updateItemQuantity(item.id,item.quantity+1)}>&nbsp;+&nbsp;</button>&nbsp;
                        <button type="button" class="btn btn-danger" onClick = {() => removeItem(item.id)}>Remove Item</button>
                    </td>
                </tr>
                )
                         
            })}
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
    						<span>${cartTotal}</span>
    					</p>
    					<p className="d-flex">
    						<span>Delivery</span>
    						<span>$0.00</span>
    					</p>
    					
    					<hr/>
    					<p className="d-flex total-price">
    						<span>Total</span>
    						<span>${cartTotal}</span>
    					</p>
    				</div>
    				<p><a href="checkout.html" className="btn btn-primary py-3 px-4 col-lg-12">Proceed to Checkout</a></p>
    			</div>
    		</div>

			
	</div>
    );
}

export default Cart;