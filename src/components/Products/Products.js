import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductBy } from '../../state/actionCreators/productsAC';
import { exchangeToken } from '../../state/actionCreators/authAC';
import { addToCart } from '../../state/actionCreators/cartAC';
import ProductCard from '../ProductCard';
import './Products.css';

function Products(props) {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state.auth);
    const { products } = useSelector((state) => state.products);
    const categoryId = props.categoryId;

    useEffect(() => {
        dispatch(exchangeToken());
        dispatch(getProductBy(categoryId));
    }, [props.categoryId]);

    return (
        <div className="product-list-wrapper">
            <h1>Products</h1>
            <div>
                <div className="product-list">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
