import React, { useEffect } from 'react';
import './Home.css';
import { carouselHelper } from '../../../public/main';

function Carousel() {
    useEffect(() => {
        carouselHelper();
    }, []);
    return (
        <div className="slider neumorphism">
            <div className="slide">
                <img
                    src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257233302-61jnMOuRWsL.jpg"
                    alt=""
                />
            </div>

            <div className="slide">
                <img
                    src="https://source.unsplash.com/random?landscape,cars"
                    alt=""
                />
            </div>

            <div className="slide">
                <img
                    src="https://source.unsplash.com/random?landscape,night"
                    alt=""
                />
            </div>

            <div className="slide">
                <img
                    src="https://source.unsplash.com/random?landscape,city"
                    alt=""
                />
            </div>

            <button className="btn btn-next neumorphism-inset"></button>
            <button className="btn btn-prev neumorphism-inset"></button>
        </div>
    );
}

export default Carousel;
