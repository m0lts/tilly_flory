import React from "react";
import logo from "../../public/logos/TILLY FLORY.svg";

export default function LoadingOverlay() {
    return (
        <div className="loading_overlay">
            <div className="loading_overlay_cont">
                <img src={logo} alt="Tilly Flory Logo" />
                <p>Loading...</p>
            </div>
        </div>
    )
}