import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard(props) {
    const product = props.product;
    return (
        <Link
            className="product-card neumorphism-with-border neumorphism-inset-hover"
            to={`/products/${product.id}`}
        >
            <img className="neumorphism-inset" src={product.imageUrl} />
            <div>
                <p>{product.name}</p>
            </div>
        </Link>
    );
}

export default ProductCard;
