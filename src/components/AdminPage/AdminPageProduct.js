import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AdminPage.css';
import AdminProductForm from './AdminProductForm';

function AdminPageProduct() {
    const { productId } = useParams();

    return (
        <div>
            <AdminProductForm productId={productId} />
        </div>
    );
}

export default AdminPageProduct;
