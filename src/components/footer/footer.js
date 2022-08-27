import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <div className="footer-page">
            <hr className="splitter" />
            <p className="rights">
                Copyright © Team8 2022. All rights reserved.
            </p>
            <div className="footer-wrapper">
                <div>
                    <h2>About us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex
                    </p>
                    <a
                        href="https://www.flaticon.com/free-icons/fortress"
                        title="fortress icons"
                    >
                        Fortress icons created by Eucalyp - Flaticon
                    </a>
                </div>
                <div className="footer-links">
                    <h2>Navigate</h2>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products/all/1">All Products</NavLink>
                    <NavLink to="/products/category/A/1">Campaign</NavLink>
                    <NavLink to="/products/category/B/1">Dexterity</NavLink>
                    <NavLink to="/products/category/C/1">Drafting</NavLink>
                </div>
                <div className="footer-links">
                    <h2>Legal</h2>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        Terms
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        Privacy Policy
                    </a>
                </div>
                <div className="footer-links">
                    <h2>Products</h2>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        T-shirts
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        Books
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        Mugs
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Footer;
