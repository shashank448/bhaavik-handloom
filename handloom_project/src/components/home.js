import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const mapstyle = {
    textAlign: 'center',
}
const p = {
    padding: '20px',
}

const HomePage = () =>{
    return (
        <>
            <Header />
            <p style={mapstyle}>This is the home page</p>
        </>
    )
}

export default HomePage;