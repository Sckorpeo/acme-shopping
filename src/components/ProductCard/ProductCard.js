import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard(props) {
    const product = props.product;
    return (
        <Link
            className="product-card neumorphism-layer1-medium"
            to={`/products/${product.id}`}
        >
            <img className="neumorphism-layer1-active" src={product.imageUrl} />
            <div>
                <p>{product.name}</p>
            </div>
        </Link>
    );
}

export default ProductCard;
