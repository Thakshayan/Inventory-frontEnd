import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Footer from './components/footer';

import {Button} from '@material-ui/core';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

import NavBar from './components/navbar'; 
import Carousals from './components/carousal';
import ProductCollection from './components/productComponent/productCollection';
import Cart from './pages/Cart';

import SingleProductView from './pages/SingleProduct';

ReactDOM.render(
  
  <Router>
    <Switch>
      <Route exact path='/cart'><Cart/></Route>
      <Route exact path='/single-product'><SingleProductView/></Route>
      <Route path='/'>
        <Header/>
        <NavBar/>
        <Carousals/>
        <ProductCollection />
        <Footer/>
      </Route>
    </Switch>
    
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
