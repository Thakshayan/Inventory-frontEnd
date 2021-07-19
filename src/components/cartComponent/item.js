import React from 'react';
import { useCart } from 'react-use-cart';

const Item = (props) => {
	const {addItem} = useCart();
    return (
        <div className="col-md-6 col-lg-3 " >
    		<div className="product">
    			<a href="#0" className="img-prod"><img className="img-fluid" src={props.items.img} alt="Quaxor Template" />
    				<span className="status">{props.items.discount}</span>
    				<div className="overlay"></div>
    			</a>
    			<div className="text py-3 pb-4 px-3 text-center">
    				<h3><a href="#0">{props.item}</a></h3>
    				<div className="d-flex">
    					<div className="pricing">
		    				<p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">${props.items.price}</span></p>
		    			</div>
	    			</div>
	    			<div className="bottom-area d-flex px-3">
	    				<div className="m-auto d-flex">
	    				    <button type="button" class="btn btn-success" onClick={()=>addItem(props.items)} >Add to cart</button>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    );
}

export default Item;