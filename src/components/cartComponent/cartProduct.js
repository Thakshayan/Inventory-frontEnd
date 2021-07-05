import React from 'react';
import Car from '../images/bg_1.jpg';

const cartProduct = () => {
    return(
   
        <tr className="text-center">
			<td className="product-remove col-md-1"><a href="#"><span className="ion-ios-close"></span></a></td>
						        
			<td className="image-prod col-md-2"><img className="img-fluid" src='../images/bg_1.jpg' /></td>
						        
			<td className="product-name col-md-4">
                <h3>Bell Pepper</h3>
                <p>Far far away, behind the word mountains, far from the countries</p>
			</td>
						        
			<td className="price col-md-2">$4.90</td>
						        
			<td className="quantity col-md-2">
				<div className="input-group mb-3">
				    <input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100"/>
				</div>
			</td>
						        
			<td className="total">$4.90</td>
		</tr>
   
    );
};
export default cartProduct;