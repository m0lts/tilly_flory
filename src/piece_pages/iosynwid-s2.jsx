import React from "react";
import '../assets/global.css';
import BackBtn from "../components/backBtn";

export default function IOSYNWID_S2() {

    const piece =     {
        src: '../../public/images/slideshow_imgs/feet.jpg',
        title: 'I only see you now when I dream. Series 2',
        description: 'Acrylic on canvas.',
        date:  'April 2023',
        size: '100cm x 120cm',
        price: '£1500',
        sold: true,
        prints: false
    }

    return (
        <section className="piece_page">
        <div className="piece_cont">
            <img src={piece.src} alt={piece.title} className="piece_img"/>
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