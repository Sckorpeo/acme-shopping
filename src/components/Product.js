import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetProduct } from '../api';
import './Product.css';

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    console.log(productId)
    async function fetchData() {
        const response = await apiGetProduct(productId);
        setProduct(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return <h1 class='product'>{product.name}</h1>;
}

export default Product;
