import React, { useEffect } from 'react';
import ProductCard from '../ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
function ProductPages(props) {
    const { products } = useSelector((state) => state.products);
    const { page } = useParams();
    const itemPerPage = props.itemPerPage;
    const currProducts = products.slice(
        (page - 1) * itemPerPage,
        page * itemPerPage
    );
    return (
        <div>
            <div>
                <div className="product-list">
                    {currProducts.map((product) => (
                        <ProductCard productId={product.id} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPages;
