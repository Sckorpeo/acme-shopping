import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard';
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
        'Azul',
        'Cascadia',
        'The Isle of Cats',
        'Sleeping Gods',
        'Ark Nova',
        'Food Chain Magnate',
        'The Search for Planet X',
        'Great Western Trail',
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
            {products.length > 1 ? (
                <div className="home-wrapper">
                    <Carousel products={products} /> <h2>Featuring</h2>
                    <div className="product-list">
                        <ProductCard productId={products[4].id} />
                        <ProductCard productId={products[5].id} />
                        <ProductCard productId={products[6].id} />
                        <ProductCard productId={products[7].id} />
                        <ProductCard productId={products[8].id} />
                        <ProductCard productId={products[9].id} />
                        <ProductCard productId={products[10].id} />
                        <ProductCard productId={products[11].id} />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Home;
