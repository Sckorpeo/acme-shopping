import React, { useEffect, useState } from 'react';
import {
    apiGetProducts,
    apiAdminDeleteProduct,
    apiAdminEditProduct,
    apiAdminAddProduct,
} from '../../api/products';

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
                <p key={product.id}>
                    {product.name}{' '}
                    <button
                        onClick={() => {
                            handleDelete(product.id);
                        }}
                    >
                        X
                    </button>
                </p>
            ))}
        </div>
    );
}
export default AdminPageProducts;
