import React, { useEffect, useState } from 'react';
import './StarRating.css';
function StarRating() {
    // const getScript = async () => {
    //     const script = document.createElement('script');
    //     script.src = 'https://kit.fontawesome.com/5ea815c1d0.js';
    //     script.async = true;
    //     script.onload = () => this.scriptLoaded();
    //     document.body.appendChild(script);
    //     console.log(1);
    // };
    // useEffect(() => {
    //     getScript();
    // }, []);
    return (
        <div class="rate">
            <div class="star-wrapper">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
        </div>
    );
}
export default StarRating;
