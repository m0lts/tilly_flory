import React from "react";
import { useState } from "react";
import '../assets/global.css';
import { piecesGallery } from "../data/pieceInfo";

export default function Gallery() {

    return (
        <section className="gallery_page">
            {piecesGallery.map((image, index) => {
                return (
                    <div className="gallery_item" key={index}>
                        <img
                            src={image.src}
                            alt=""
                            className="gallery_img"
                        />
                        <div className="gallery_item_info">
                            <h2 className="gallery_item_title">{image.title}</h2>
                            <p className="gallery_item_description">{image.description}</p>
                            <p className="gallery_item_date">{image.date}</p>
                            <p className="gallery_item_size">{image.size}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    )
}