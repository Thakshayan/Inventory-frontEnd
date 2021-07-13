import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter,Switch,Route} from 'react-router-dom';

//components
import Header from './components/header';
import NavBar from './components/navbar'; 
import Footer from './components/footer';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import View from './pages/View';
import Cart from './pages/Cart';
import SingleProductView from './components/productComponent/singleProduct';

ReactDOM.render(
 
  <BrowserRouter>
    <Header/>
    <NavBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/view' component={View}/>
        <Route exact path='/cart'><Cart/></Route>
        <Route exact path='/single-product'><SingleProductView/></Route>    
         
      </Switch>
      
    <Footer/>
    
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
