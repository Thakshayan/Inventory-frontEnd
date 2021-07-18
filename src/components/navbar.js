import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useCart } from 'react-use-cart';
import Cart from './cartComponent/cart';

const NavBar = ()=>{
	const {totalUniqueItems} = useCart();
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <Link className="navbar-brand"to="/">Vegefoods</Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
	          <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</Link>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
              	<Link className="dropdown-item" to="#">Shop</Link>
              	<Link className="dropdown-item" to="#">Wishlist</Link>
                <Link className="dropdown-item" to="#">Single Product</Link>
                <Link className="dropdown-item" to="#">Cart</Link>
                <Link className="dropdown-item" to="#">Checkout</Link>
              </div>
            </li>
	          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
	          <li className="nav-item"><Link to="/view" className="nav-link">View</Link></li>
	          <li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
	          <li className="nav-item cta cta-colored"><Link href="cart.html" className="nav-link"><span className="icon-shopping_cart"></span>{totalUniqueItems}</Link></li>

	        </ul>
	      </div>
	    </div>
	  </nav>
    );
}

export default NavBar;