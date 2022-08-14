import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBy } from '../state/actionCreators/productsAC';

function Products(props) {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const categoryId = props.categoryId;
    useEffect(() => {
        dispatch(getProductBy(categoryId));
    }, [props.categoryId]);
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
