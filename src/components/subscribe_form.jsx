import React from "react";
import '../assets/global.css';

export default function SubscribeForm() {
    return (
        <section className="form_cont">
            <h3 className="form_subtitle">Subscribe</h3>
            <p>Subscribers receive first and exclusive updates on new artwork, exhibitions and more.</p>
            <form action="" className="subscribe_form">
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                    <input type="text" id="secondName" name="secondName" placeholder="Second Name" />
                    <input type="text" id="email" name="email" placeholder="Email Address" />
                    <button className="subscribe_submitBtn">Submit</button>
            </form>
            <p>Your privacy will be respected.</p>
        </section>
        
    )
}