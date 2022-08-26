import React, {useState, useEffect, useRef} from 'react';
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';
import ProductCard from "../ProductCard";

function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const urlRef = searchParams.get('key');
    const [searchResult, setSearchResult] = useState([]);
    useEffect(()=>{
        try {
            const search = async () => {
                const res = await axios.get('/api/products', {params: {key: searchParams.get('key')}})
                setSearchResult(res.data)
            }
            search();
        } catch (ex) {
            console.log(ex)
        }

    },[urlRef])
    return (
        <div className="product-list-wrapper">
            <h1>Search Results for "{searchParams.get('key')}"</h1>
            <div className="product-list">
                {searchResult.map((product) => (
                    <ProductCard productId={product.id} key={product.id} />
                ))}
            </div>
        </div>
    )
};
export default SearchPage;