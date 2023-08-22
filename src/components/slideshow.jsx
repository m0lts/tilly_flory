import React from "react";
import { useState, useEffect } from "react";
import '../assets/global.css';

const slideImgs = [
    '../../public/images/slideshow_imgs_cropped/fox.jpg',
    '../../public/images/slideshow_imgs_cropped/bed.jpg',
    '../../public/images/slideshow_imgs_cropped/sofas.jpg',
    '../../public/images/slideshow_imgs_cropped/back.jpg',
    '../../public/images/slideshow_imgs_cropped/stag.jpg',
    '../../public/images/slideshow_imgs_cropped/lioness.jpg',
    '../../public/images/slideshow_imgs_cropped/rhino.jpg',
    '../../public/images/slideshow_imgs_cropped/hair.jpg',
    '../../public/images/slideshow_imgs_cropped/feet.jpg'
]

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