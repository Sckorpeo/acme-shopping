import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetProduct, apiGetProductRatings } from '../../api/products';
import { addToCart, guestAddToCart } from '../../state/actionCreators/cartAC';
import './Product.css';
import StarRatingReadOnly from '../StarRating/StarRatingReadOnly';
import UserRate from './UserRate';
import { useNavigate } from 'react-router-dom';

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [ratings, setRatings] = useState([]);
    const [rate, setRate] = useState(0);
    const navigate = useNavigate();
    const { auth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    async function fetchData() {
        let response = await apiGetProduct(productId);
        setProduct(response.data);
        response = await apiGetProductRatings(productId);
        setRatings(response.data);
        if (response.data.length > 0) {
            let sum = 0;
            for (let e of response.data) {
                sum += e.value;
            }
            const average = sum / response.data.length;
            setRate(Math.ceil(average));
        }
    }
    useEffect(() => {
        fetchData();
    }, [productId]);
    const handleClick = (product) => {
        if (Object.keys(auth).length > 0) {
            return dispatch(addToCart({ product, quantity: 1 }));
        }
        return dispatch(guestAddToCart({ product, quantity: 1 }));
    };
    return (
        <div className="product-page">
            <button
                className="neumorphism-btn product-page-back"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
            <div className="product-product-wrapper">
                <div className="product-wrapper neumorphism">
                    <img className="neumorphism-inset" src={product.imageUrl} />
                    <div className="product-content">
                        <h1>{product.name}</h1>
                        <StarRatingReadOnly
                            rate={rate}
                            rateCount={ratings.length}
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Aliquet nec ullamcorper sit
                            amet risus nullam. Nunc mi ipsum faucibus vitae
                            aliquet nec ullamcorper. Arcu odio ut sem nulla
                            pharetra diam sit amet nisl. Magna etiam tempor orci
                            eu lobortis elementum. Enim diam vulputate ut
                            pharetra. Ut sem viverra aliquet eget sit amet
                            tellus cras adipiscing. Viverra adipiscing at in
                            tellus integer feugiat scelerisque varius morbi.
                            Tempor nec feugiat nisl pretium fusce id. Vivamus
                            arcu felis bibendum ut tristique et egestas quis.
                            Urna et pharetra pharetra massa massa ultricies mi.
                        </p>
                    </div>
                </div>
                <div className="product-specific neumorphism">
                    <div className="product-specific-price">
                        ${product.price}
                    </div>
                    <hr className="splitter" />
                    <p>Minimum Players: {product.minPlayers}</p>
                    <p>Maximum Players: {product.maxPlayers}</p>
                    <p>Estimate Play Time: {product.timeToPlay} min</p>
                    <button
                        className="neumorphism-btn"
                        onClick={() => handleClick(product)}
                    >
                        Add To Cart
                    </button>
                </div>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </div>
            <div className="rating-wrapper neumorphism">
                <h2>Comments</h2>
                {ratings.map((rate) => (
                    <UserRate rate={rate} key={rate.id} />
                ))}
            </div>
        </div>
    );
}

export default Product;
