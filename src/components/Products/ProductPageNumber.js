import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Products.css';

function ProductPageNumber(props) {
    const { products } = useSelector((state) => state.products);
    const totalPage = Math.ceil(products.length / props.itemPerPage);
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const getNavContent = () => {
        let content = [];
        for (let i = 1; i <= totalPage; i++) {
            content.push(
                <NavLink
                    onClick={handleClick}
                    className={({ isActive }) =>
                        isActive ? 'neumorphism-inset' : undefined
                    }
                    to={`${props.pathname}${i}`}
                    key={i}
                >
                    {i}
                </NavLink>
            );
        }
        return content;
    };
    return <div className="Page-Wrapper">{getNavContent()}</div>;
}
export default ProductPageNumber;
