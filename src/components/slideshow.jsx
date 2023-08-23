import React from "react";
import { useState, useEffect } from "react";
import '../assets/global.css';
import { slideImgs } from "../data/pieceInfo";


export default function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex + 1) % slideImgs.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <section className="slideshow_cont">
            <img src={slideImgs[slideIndex]} alt="" className="slideshow_img" />
        </section>
    )

}