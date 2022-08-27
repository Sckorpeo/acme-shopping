import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProduct } from '../../state/actionCreators/productsAC';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { apiGetProductByName } from '../../api/products';

function Home() {
    const productNames = [
        'Dune: Imperium',
        'Camel Up (Second Edition)',
        'Gloomhaven: Jaws of the Lion',
        'Wingspan',
    ];
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        let dummy = [];
        for (let name of productNames) {
            const response = await apiGetProductByName(name);
            dummy.push(response.data);
        }
        setProducts(dummy);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="home">
            {products.length > 1 ? <Carousel products={products} /> : null}
        </div>
    );
}

export default Home;
