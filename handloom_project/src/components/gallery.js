// src/components/Gallery.js
import React from 'react';
import { NavLink } from "react-router-dom";
import Header from './Header';

const mapstyle = {
    textAlign: 'center',
}
const p = {
    padding: '20px',
}
const Gallery = () => {
  return (
    <>
      <Header />
      <p style={mapstyle}>This is the gallery page</p>
   </>
  );
};

export default Gallery;



