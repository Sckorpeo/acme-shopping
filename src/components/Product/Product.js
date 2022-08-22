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
        <div className="product-page">
            <img src={product.imageUrl} />
            <div className="product-content">
                <h1>{product.name}</h1>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo.
                </p>
                <button onClick={handleClick}>Add To Cart</button>
            </div>
        </div>
    );
}

export default Product;
