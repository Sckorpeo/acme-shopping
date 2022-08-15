import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetProduct } from '../api';

function Product() {
    const productId = useParams();
    const [product, setProduct] = useState({});

    async function fetchData() {
        const response = await apiGetProduct(productId);
        setProduct(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return <h1>{product.name}</h1>;
}

export default Product;
