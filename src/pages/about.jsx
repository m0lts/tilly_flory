import React from "react";
import about_img from '../../public/images/about_img.jpg';
import Slideshow from "../components/slideshow";
import SubscribeForm from "../components/subscribe_form";
import '../assets/global.css';

export default function About() {
    return (
        <section className="about_page">
            <Slideshow />
            <h1 className="about_title">About Tilly Flory</h1>
            <img src={about_img} alt="Tilly Flory Portrait" className="about_img"/>
            <p className="about_text">
                As an artist specialising in black and white acrylic painting and graphite pencil drawings, I have embarked on a creative journey that defies colour norms, while showcasing an array of emotions and narratives. The monochrome pallet illuminates the essence of the subjects, transcending the limitations of colour to reveal a world of intricate details and profound sentiments.
                <br />
                In my acrylic paintings, the absence of colour does not imply an absence of life; rather, it accentuates the interplay between light and shadow. By manipulating contrast and texture, I hope to evoke a myriad of emotions within figurative paintings.
                <br />
                The monochromatic palette of graphite pencil drawings becomes a conduit for emotions, allowing for the essence of the subjects to be captured with astonishing clarity. My attention to detail and shading technique transforms two-dimensional surfaces into intricately textured worlds, inviting contemplation and connection.
                <br />
                My artistic journey is a reflection of the power of monochrome. It's not merely a limitation, but a liberating avenue that allows me to explore the interplay of light and darkness in ways that colour could never replicate.
                <br />
                In a world saturated with colour, my black and white acrylic paintings and graphite pencil drawings hope to offer a refreshing perspective.
            </p>
        </section>
    )
}