import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiGetProduct, apiGetProductRatings } from '../../api/products';
import { addToCart } from '../../state/actionCreators/cartAC';
import './Product.css';

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [ratings, setRatings] = useState([]);
    const dispatch = useDispatch();
    async function fetchData() {
        let response = await apiGetProduct(productId);
        setProduct(response.data);
        response = await apiGetProductRatings(productId);
        setRatings(response.data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    console.log(ratings);
    const handleClick = () => {
        dispatch(addToCart({ product, quantity: 1 }));
    };
    return (
        <div>
            <h1 className="product">{product.name}</h1>
            <button onClick={handleClick}>Add To Cart</button>
        </div>
    );
}

export default Product;
