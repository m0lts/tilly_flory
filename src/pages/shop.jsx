import React from "react";
import '../assets/global.css';
import { piecesShop } from "../data/pieceInfo";

export default function Shop() {

    const openPiecePage = (image) => {
        window.location.hash = image.page;
    };
    return (
        <section className="shop_page">
            <div className="shop_grid">
                {piecesShop.map((image, index) => {
                    return (
                        <div className="shop_item" key={index} onClick={() => openPiecePage(image)}>
                            <img
                                src={image.src}
                                alt=""
                                className="shop_img"
                            />
                            <div className="shop_item_description">
                                <h2 className="shop_item_title">{image.title}</h2>
                                <p className="shop_item_price">{image.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}