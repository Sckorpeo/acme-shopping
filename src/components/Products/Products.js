import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import {
    getProductBy,
    fetchProduct,
} from '../../state/actionCreators/productsAC';
import { exchangeToken } from '../../state/actionCreators/authAC';
import ProductPages from './ProductPages';
import ProductPageNumber from './ProductPageNumber';
import './Products.css';

function Products(props) {
    const itemPerPage = 12;
    const dispatch = useDispatch();
    console.log(props.pathname);

    useEffect(() => {
        if (props.categoryId) {
            const categoryId = props.categoryId;
            dispatch(getProductBy(categoryId));
        } else dispatch(fetchProduct());
    }, [props]);

    return (
        <div className="product-list-wrapper">
            <ProductPages itemPerPage={itemPerPage} />
            <ProductPageNumber
                pathname={props.pathname}
                itemPerPage={itemPerPage}
            />
        </div>
    );
}

export default Products;
