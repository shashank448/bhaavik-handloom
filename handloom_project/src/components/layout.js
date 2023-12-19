// src/components/Layout.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './home';
import Gallery from './gallery';
import ContactForm from './contactForm';
import Product from './product'

const mapstyle = {
    textAlign: 'center',
}
const p = {
    padding: '20px'
}
const Layout = () => {
  return (<div>
    <Router>
      <nav>
        <div style={mapstyle}>
        <Link to="/" style={p}>Home</Link>
        <Link to="/gallery" style={p}>Gallery</Link>
        
        <select name="products" id="products">
            <option value="saree">Saree</option>
            <option value="kurta">Kurta</option>
        </select>

        </div>
        <h1>dfbvvudfvbidfvbdfuvbyfyudfvbdfvbuidsvbjbvjvbsduyvbsdfv</h1>
        <h1>dfbvvudfvbidfvbdfuvbyfyudfvbdfvbuidsvbjbvjvbsduyvbsdfv</h1>
      </nav>
      
      <Routes>
        <Route path="/" exact component={HomePage} /> 
        <Route path="/gallery" component={Gallery} />
        {/* <Route path="/contact" component={ContactForm} /> */}
      </Routes>
      
    </Router>
    <ContactForm />
  </div>
    
  );
};

export default Layout;


