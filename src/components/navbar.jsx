import React from "react";
import '../assets/global.css';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    // Make active page name bold
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    // Toggle navbar for mobile
    const [activeNavItem, setActiveNavItem] = useState('');
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavItemClick = (itemName) => {
        setActiveNavItem(itemName);
    };

    const handleNavClick = () => {
        const navItemsNarrow = document.querySelectorAll('.navItem_narrow');
        navItemsNarrow.forEach((element) => {
        element.classList.toggle('active');
        });
        setIsNavOpen((prevState) => !prevState);
    };

    return (
        <>
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
            <ul className="navbar_narrow">
                <li className="navItem_narrow_btn" onClick={handleNavClick}>
                    Menu {isNavOpen ? '↑' : '↓'}
                </li>
                <li className="navItem_narrow" onClick={handleNavClick}>
                    <Link to='/' className={`link ${activeItem === 'About' ? 'active' : ''}`} onClick={() => handleItemClick('About')}>About</Link>
                </li>
                <li className="navItem_narrow" onClick={handleNavClick}>
                    <Link to='/gallery' className={`link ${activeItem === 'Gallery' ? 'active' : ''}`} onClick={() => handleItemClick('Gallery')}>Gallery</Link>
                </li>
                <li className="navItem_narrow" onClick={handleNavClick}>
                    <Link to='/press' className={`link ${activeItem === 'Press' ? 'active' : ''}`} onClick={() => handleItemClick('Press')}>Press</Link>
                </li>
                <li className="navItem_narrow" onClick={handleNavClick}>
                    <Link to='/shop' className={`link ${activeItem === 'Shop' ? 'active' : ''}`} onClick={() => handleItemClick('Shop')}>Shop</Link>
                </li>
                <li className="navItem_narrow" onClick={handleNavClick}>
                    <Link to='/contact' className={`link ${activeItem === 'Contact' ? 'active' : ''}`} onClick={() => handleItemClick('Contact')}>Contact</Link>
                </li>
            </ul>
        </>
    )
}