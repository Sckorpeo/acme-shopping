import React from 'react';
import './FormField.css';

const FormField = ({ label, type, name, placeholder, required }) => {
    return (
        <div className="FormField">
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} placeholder={placeholder} required />
        </div>
    );
};

export default FormField;
