const Product = (props) =>{

	const discount = props.state.discount;

        return (
            <div className="col-md-6 col-lg-3 " >
    				<div className="product">
    					<a href="#0" className="img-prod"><img className="img-fluid" src="images/product-1.jpg" alt="Quaxor Template" />
    						
							<span className="status">{discount}</span>
    						<div className="overlay"></div>
    					</a>
    					<div className="text py-3 pb-4 px-3 text-center">
    						<h3><a href="#0">Bell Pepper</a></h3>
    						<div className="d-flex">
    							<div className="pricing">
		    						<p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
		    					</div>
	    					</div>
	    					<div className="bottom-area d-flex px-3">
	    						<div className="m-auto d-flex">
	    							<a href="/single-product" className="add-to-cart d-flex justify-content-center align-items-center text-center">
	    								<span><i className="ion-ios-menu"></i></span>
	    							</a>
	    							<a href="#0" className="buy-now d-flex justify-content-center align-items-center mx-1">
	    								<span><i className="ion-ios-cart"></i></span>
	    							</a>
	    							<a href="#0" className="heart d-flex justify-content-center align-items-center ">
	    								<span><i className="ion-ios-heart"></i></span>
	    							</a>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
        );
    
} 

export default Product;