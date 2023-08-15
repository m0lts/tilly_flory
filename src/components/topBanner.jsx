import React from "react";
import logo from '../../public/logos/TILLY FLORY.svg';
import '../assets/global.css';

export default function TopBanner() {
    return (
        <section className="topBanner">
            <img src={logo} alt="Tilly Flory Logo" className="topBannerLogo"/>
        </section>
    )
}
