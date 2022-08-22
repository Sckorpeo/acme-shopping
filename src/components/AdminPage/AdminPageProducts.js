import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    apiGetProducts,
    apiAdminDeleteProduct,
    apiAdminEditProduct,
    apiAdminAddProduct,
} from '../../api/products';
import './AdminPage.css';

function AdminPageProducts() {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const response = await apiGetProducts();
        setProducts(response.data);
    };
    const handleDelete = async (productId) => {
        await apiAdminDeleteProduct(productId);
        const response = await apiGetProducts();
        setProducts(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {products.map((product) => (
                <NavLink
                    className="admin-product-item"
                    to={`products/${product.id}`}
                    key={product.id}
                >
                    <div>name: {product.name}</div>
                    <div>price: {product.price}</div>
                    <div>min players: {product.minPlayers}</div>
                    <div>max Player: {product.maxPlayers}</div>
                    <div>time to play: {product.timeToPlay}</div>
                    <button
                        onClick={() => {
                            handleDelete(product.id);
                        }}
                    >
                        X
                    </button>
                </NavLink>
            ))}
        </div>
    );
}
export default AdminPageProducts;
