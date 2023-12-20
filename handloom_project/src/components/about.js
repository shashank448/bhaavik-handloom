import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

const mapstyle = {
    textAlign: 'center',
}
const p = {
    padding: '20px',
}

const AboutPage = () =>{
    return (
        <>
            <Header />
            <p style={mapstyle}>This is the about page</p>
        </>
    )
}

export default AboutPage;