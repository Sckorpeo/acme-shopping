import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductBy } from '../state/actionCreators/productsAC';
import { exchangeToken } from '../state/actionCreators/authAC';
import { addToCart } from '../state/actionCreators/cartAC';

function Products(props) {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    const { products } = useSelector((state) => state.products);
    const categoryId = props.categoryId;

    useEffect(() => {
        dispatch(exchangeToken());
        dispatch(getProductBy(categoryId));
    }, [props.categoryId]);

    const handelClick = (product) => {
        const productInfo = { product: product, quantity: 1 };
        dispatch(addToCart(productInfo));
    };

    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                    {auth.id ? (
                        <button onClick={() => handelClick(product)}>
                            Add to Cart
                        </button>
                    ) : (
                        ''
                    )}
                </div>
            ))}
        </div>
    );
}

export default Products;
