import React from "react";
import '../assets/global.css';

export default function Gallery() {

    const images = [
        {
            src: '../../public/images/slideshow_imgs/fox.jpg',
            title: 'Tightly, Softly',
            description: 'Graphite on heavyweight cartridge paper.',
            date:  'August 2023',
            size: '21cm x 29.7cm',
        },
        {
            src: '../../public/images/slideshow_imgs/rhino.jpg',
            title: 'Horns of Mine',
            description: 'Graphite and charcoal on heavyweight cartridge paper.',
            date:  'July 2023',
            size: '29.7cm x 42cm',
        },
        {
            src: '../../public/images/slideshow_imgs/stag.jpg',
            title: 'Heavy is the Head',
            description: 'Graphite on heavyweight cartridge paper.',
            date:  'July 2023',
            size: '29.7cm x 42cm',
        },
        {
            src: '../../public/images/slideshow_imgs/lioness.jpg',
            title: 'Bones of Mine',
            description: 'Graphite on heavyweight cartridge paper.',
            date:  'July 2023',
            size: '29.7cm x 29.7cm',
        },
        {
            src: '../../public/images/slideshow_imgs/feet.jpg',
            title: 'I only see you now when I dream. Series 2',
            description: 'Acrylic on canvas.',
            date:  'April 2023',
            size: '100cm x 120cm',
        },
        {
            src: '../../public/images/slideshow_imgs/bed.jpg',
            title: 'The Cloak Between',
            description: 'Acrylic on canvas.',
            date:  'March 2023',
            size: '100cm x 149cm',
        },
        {
            src: '../../public/images/slideshow_imgs/sofas.jpg',
            title: 'Folds of Grief',
            description: 'Acrylic on canvas.',
            date:  'January 2023',
            size: '65.5cm x 129cm',
        },
        {
            src: '../../public/images/slideshow_imgs/back.jpg',
            title: 'I only see you now when I dream. Series 1',
            description: 'Acryclic on canvas.',
            date:  'April 2023',
            size: '120cm x 100cm',
        },
        {
            src: '../../public/images/slideshow_imgs/hair.jpg',
            title: 'I only see you now when I dream. Series 3',
            description: 'Acrylic on canvas.',
            date:  'April 2023',
            size: '100cm x 50cm',
        },
        {
            src: '../../public/images/slideshow_imgs/arm.jpg',
            title: 'I only see you now when I dream. Series 4',
            description: 'Acrylic on canvas.',
            date:  'April 2023',
            size: '100cm x 50cm',
        }
    ]

    return (
        <section className="gallery_page">
            {images.map((image, index) => {
                // Calculate the aspect ratio (height/width) of the image

                // Create a style object for each image with padding

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