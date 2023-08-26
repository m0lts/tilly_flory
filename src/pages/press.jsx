import React from "react";
import '../assets/global.css';

export default function Press() {
    return (
        <section className="press_page">
            <h1>Press</h1>
            <div className="press_container">
                <div className="press_title_and_date">
                    <h2 className="press_title">HS Projects</h2>
                    <h3 className="press_date">August 2022</h3>
                    <a target="blank" href="https://hsprojects.com/artist_name/tilly-flory/" className="press_link">https://hsprojects.com/artist_name/tilly-flory/</a>
                </div>
                <div className="press_text">
                    <p>“Tilly Flory’s practice has guided her to a deeper understanding of the experience of grief. 
                        Her painting Shrouded in Folds was made to represent the experience of life becoming internalised 
                        while one processes grief, as well as a transition from the person they were before to the person 
                        they become after encountering loss. Grief is similar to that of a caterpillar entering its chrysalis
                         and emerging as something changed, perhaps more complex than it once was.”</p>
                </div>
                <div className="press_imgs_cont">
                    <img src="../../public/images/press_imgs/shrouded_in_folds.jpeg" alt="" />
                    <img src="../../public/images/press_imgs/shrouded_in_folds2.jpeg" alt="" />
                </div>
            </div>
        </section>
    )
}