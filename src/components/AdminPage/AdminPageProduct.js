import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetProduct } from '../../api/products';

function AdminPageProduct() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const fetchData = async () => {
        const response = await apiGetProduct(productId);
        setProduct(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <p>{product.name}</p>;
}

export default AdminPageProduct;
