import React from 'react';
import { useDispatch } from 'react-redux';
import { getSeededData } from '../../state/actionCreators/productsAC';

const SeedButton = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getSeededData());
    };
    return <button onClick={handleClick}>Seed Board Games</button>;
};

export default SeedButton;
