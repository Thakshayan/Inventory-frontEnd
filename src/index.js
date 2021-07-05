import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Footer from './components/footer';

import {Button} from '@material-ui/core';
import { BrowserRouter} from 'react-router-dom';

import NavBar from './components/navbar'; 
import Carousals from './components/carousal';
import ProductCollection from './components/productComponent/productCollection';



ReactDOM.render(
  
  <BrowserRouter>
    <Header/>
    <NavBar/>
    <Carousals/>
    <ProductCollection />
    <Footer/>
    
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
