import React, { useEffect } from 'react';
import Carousel from './Carousel';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProduct } from '../../state/actionCreators/productsAC';
import './Home.css';

function Home() {
    // For testing, might use in the future
    // const dispatch = useDispatch();
    // const { products } = useSelector((state) => state.products);

    // useEffect(() => {
    //     dispatch(fetchProduct());
    //     console.log(12);
    // }, []);
    // console.log(products);

    return (
        <div className="home">
            <Carousel />
        </div>
    );
}

export default Home;
