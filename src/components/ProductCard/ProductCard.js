import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { apiGetProductRatings } from '../../api/products';

function ProductCard(props) {
    const product = props.product;
    const [rate, setRate] = useState(0);
    const getRate = async () => {
        const response = await apiGetProductRatings(product.id);
        const ratings = response.data;
        if (ratings.length > 0) {
            let sum = 0;
            for (let e of ratings) {
                sum += e.value;
            }
            const average = sum / ratings.length;
            setRate(Math.ceil(average));
        }
    };
    useEffect(() => {
        getRate();
    }, []);
    return (
        <Link
            className="product-card neumorphism-with-border neumorphism-inset-hover"
            to={`/products/${product.id}`}
        >
            <img className="neumorphism-inset" src={product.imageUrl} />
            <div>
                <p>{product.name}</p>
                <p>{rate}</p>
            </div>
        </Link>
    );
}

export default ProductCard;
