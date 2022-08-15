import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductBy } from '../state/actionCreators/productsAC';
import {addToCart} from '../state/actionCreators/cartAC';
function Products(props) {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const categoryId = props.categoryId;
    useEffect(() => {
        dispatch(getProductBy(categoryId));
    }, [props.categoryId]);
    const handleClick = (product,quantity) => {
        dispatch(addToCart(product,quantity))
    }
    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                    {product.name}
                </Link>
                <button onClick={()=>handleClick(product,1)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
