import React from 'react';
import { NavLink } from 'react-router-dom';

function footer() {
    return (
        <div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products/all/1">All Products</NavLink>
                <NavLink to="/products/category/A/1">Campaign</NavLink>
                <NavLink to="/products/category/B/1">Dexterity</NavLink>
                <NavLink to="/products/category/C/1">Drafting</NavLink>
            </div>
        </div>
    );
}
export default footer;
