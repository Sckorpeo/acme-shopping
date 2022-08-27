import React, { useEffect, useState } from 'react';
import './Home.css';
import { carouselHelper } from '../../../public/main';
import { NavLink } from 'react-router-dom';
import { apiGetProductByName } from '../../api/products';

function Carousel(props) {
    const products = props.products;
    useEffect(() => {
        carouselHelper();
    }, []);

    return (
        <div className="slider neumorphism">
            <NavLink to={`/products/${products[0].id}`} className="slide">
                <img
                    src="https://m.media-amazon.com/images/S/aplus-media/sc/17204ec6-4373-40f8-95c1-b1b35563859b.__CR0,0,1024,317_PT0_SX970_V1___.png"
                    alt=""
                />
            </NavLink>

            <NavLink to={`/products/${products[1].id}`} className="slide">
                <img
                    src="https://gamecows.com/wp-content/uploads/2020/01/Camel-Up-2nd-Ed-Featured.jpg"
                    alt=""
                />
            </NavLink>

            <NavLink to={`/products/${products[2].id}`} className="slide">
                <img
                    src="https://cdn.shopify.com/s/files/1/0335/0485/4155/products/gh_details.png?v=1659040782"
                    alt=""
                />
            </NavLink>

            <NavLink to={`/products/${products[3].id}`} className="slide">
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/494/226/351/board-games-wingspan-hd-wallpaper-preview.jpg"
                    alt=""
                />
            </NavLink>

            <button className="btn btn-next neumorphism-inset"></button>
            <button className="btn btn-prev neumorphism-inset"></button>
        </div>
    );
}

export default Carousel;
