// src/components/Layout.js
import "../App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './home';
import Gallery from './gallery';
import ContactForm from './contactForm';
import Product from './product'
import AboutPage from './about';

const mapstyle = {
    textAlign: 'center',
}
const p = {
    padding: '20px'
}
const Layout = () => {
  return (<div>
    <Router>
      {/* <nav>
        <div style={mapstyle}>
        <Link to="/" style={p}>Home</Link>
        <Link to="/gallery" style={p}>Gallery</Link>
        
        <select name="products" id="products">
            <option value="saree">Saree</option>
            <option value="kurta">Kurta</option>
        </select>
        <Product />
        </div>
        <h1>dfbvvudfvbidfvbdfuvbyfyudfvbdfvbuidsvbjbvjvbsduyvbsdfv</h1>
        <h1>dfbvvudfvbidfvbdfuvbyfyudfvbdfvbuidsvbjbvjvbsduyvbsdfv</h1>
      </nav> */}
      
      <Routes>
        <Route path="/" exact element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<div> Contact Page </div>} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
    </Router>
    {/* <ContactForm /> */}
  </div>
    
  );
};

export default Layout;


