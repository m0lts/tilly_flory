import React from "react";
import SubscribeForm from "../components/subscribe_form";
import '../assets/global.css';

export default function Contact() {
    return (
        <section className="contact_page">
            <h1>Contact page</h1>
            <ul className="contact_list">
                <li className="contact_list_item">
                    <span>Email:</span> <a href="mailto:florysart1@gmail.com" className="mailto">florysart1@gmail.com</a> 
                </li>
                <li className="contact_list_item">
                    <span>Instagram:</span> @tilly_flory
                </li>
                <li className="contact_list_item">
                    <span>Facebook:</span> Flory's Art
                </li>
                <li className="contact_list_item">
                    <span>TikTok:</span> @tilly_flory
                </li>
            </ul>
        </section>
    )
}