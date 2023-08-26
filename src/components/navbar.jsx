import React from "react";
import '../assets/global.css';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <ul className="navbar">
            <li className="navItem">
                <Link to='/' className={`link ${activeItem === 'About' ? 'active' : ''}`} onClick={() => handleItemClick('About')}>About</Link>
            </li>
            <li className="navItem">
                <Link to='/gallery' className={`link ${activeItem === 'Gallery' ? 'active' : ''}`} onClick={() => handleItemClick('Gallery')}>Gallery</Link>
            </li>
            <li className="navItem">
                <Link to='/press' className={`link ${activeItem === 'Press' ? 'active' : ''}`} onClick={() => handleItemClick('Press')}>Press</Link>
            </li>
            <li className="navItem">
                <Link to='/shop' className={`link ${activeItem === 'Shop' ? 'active' : ''}`} onClick={() => handleItemClick('Shop')}>Shop</Link>
            </li>
            <li className="navItem">
                <Link to='/contact' className={`link ${activeItem === 'Contact' ? 'active' : ''}`} onClick={() => handleItemClick('Contact')}>Contact</Link>
            </li>
        </ul>
    )
}