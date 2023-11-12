import React from "react";
import '../assets/global.css';
import BackBtn from "../components/backBtn";
import { useState } from "react";

export default function InTheRough() {

    const piece = {
        src: '/images/slideshow_imgs/buffalo.jpg',
        src2: '/images/slideshow_imgs/buffalo2.jpg',
        title: 'In the Rough',
        description: 'Acrylic on canvas. Finished with a satin varnish.',
        date:  'October 2023',
        size: '120cm x 100cm',
        price: '£1200',
        sold: false,
        prints: false,
        page: '/in-the-rough'
    }

    const [img, setImg] = useState(piece.src);

    const changeImg = () => {
        if (piece.src2 && img === piece.src) {
            setImg(piece.src2);
        } else {
            setImg(piece.src);
        }
    }

    return (
        <section className="piece_page">
        <div className="piece_cont">
            <img src={img} alt={piece.title} className="piece_img"/>
            {piece.src2 ? <button className="change_img_btn" onClick={changeImg}>Next Image</button> : ''}
        </div>
        <div className="piece_desc">
            <h1 className="piece_title">{piece.title}</h1>
            <p className="piece_description">{piece.description}</p>
            <p className="piece_date">{piece.date}</p>
            <p className="piece_size">{piece.size}</p>
            <p className="piece_price">{piece.price}</p>
            <p className="piece_sold">{piece.sold ? 'Sold' : ''}</p>
            {piece.prints ? <div className="prints_cont">
                <h2 className="piece_prints">Prints Available:</h2>
                <p className="piece_prints_price">{piece.printsPrice}</p>
                <p className="piece_prints_size">{piece.printsSize}</p>
                <p className="piece_prints_no">{piece.printsNo} left</p>
            </div> : ''}
            <a className="enquiries_link" href="mailto:florysart1@gmail.com">Email for enquiries.</a>
        </div>
    </section>
    )
}