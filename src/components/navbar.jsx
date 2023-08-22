import React from "react";
import '../assets/global.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="navbar">
            <li className="navItem">
                <Link to='/' className="link">About</Link>
            </li>
            <li className="navItem">
                <Link to='/gallery' className="link">Gallery</Link>
            </li>
            <li className="navItem">
                <Link to='/press' className="link">Press</Link>
            </li>
            <li className="navItem">
                <Link to='/shop' className="link">Shop</Link>
            </li>
            <li className="navItem">
                <Link to='/contact' className="link">Contact</Link>
            </li>
        </ul>
    )
}