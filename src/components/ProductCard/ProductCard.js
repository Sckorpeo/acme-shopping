import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import StarRating from '../StarRating';
import { apiGetProductRatings, apiGetProduct } from '../../api/products';

function ProductCard(props) {
    const productId = props.productId;
    const [product, setProduct] = useState({});
    const [rate, setRate] = useState(0);
    const [rateCount, setRateCount] = useState(0);
    const fetchData = async () => {
        let response = await apiGetProduct(productId);
        setProduct(response.data);
        response = await apiGetProductRatings(productId);
        const ratings = response.data;
        if (ratings.length > 0) {
            let sum = 0;
            for (let e of ratings) {
                sum += e.value;
            }
            const average = sum / ratings.length;
            setRate(Math.ceil(average));
            setRateCount(ratings.length);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Link
            className="product-card neumorphism-with-border neumorphism-inset-hover"
            to={`/products/${productId}`}
        >
            <img className="neumorphism-inset" src={product.imageUrl} />
            <div className="product-card-content">
                <p className="product-name">{product.name}</p>
                <div className="star-read-only">
                    <span
                        className={
                            rate >= 1 ? 'fa fa-star checked' : 'fa fa-star'
                        }
                    ></span>
                    <span
                        className={
                            rate >= 2 ? 'fa fa-star checked' : 'fa fa-star'
                        }
                    ></span>
                    <span
                        className={
                            rate >= 3 ? 'fa fa-star checked' : 'fa fa-star'
                        }
                    ></span>
                    <span
                        className={
                            rate >= 4 ? 'fa fa-star checked' : 'fa fa-star'
                        }
                    ></span>
                    <span
                        className={
                            rate >= 5 ? 'fa fa-star checked' : 'fa fa-star'
                        }
                    ></span>
                    {rateCount > 0 ? <p>{`(${rateCount})`}</p> : ''}
                </div>
            </div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
        </Link>
    );
}

export default ProductCard;
