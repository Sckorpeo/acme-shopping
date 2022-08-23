import React, { useEffect, useState } from 'react';
import {
    apiGetProduct,
    apiAdminEditProduct,
    apiAdminAddProduct,
} from '../../api/products';
import './AdminPage.css';

function AdminProductForm(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [minPlayers, setMinPlayers] = useState(0);
    const [maxPlayers, setMaxPlayers] = useState(0);
    const [timeToPlay, setTimeToPlay] = useState(0);
    const [img, setImage] = useState('');
    const productId = props.productId;

    const fetchData = async () => {
        console.log(1);
        const response = await apiGetProduct(productId);
        setName(response.data.name);
        setPrice(response.data.price);
        setMinPlayers(response.data.minPlayers);
        setMaxPlayers(response.data.maxPlayers);
        setTimeToPlay(response.data.timeToPlay);
        setImage(response.data.imageUrl);
    };

    const handleSubmit = (ev) => {
        const payload = {
            name: name,
            price: price,
            minPlayers: minPlayers,
            maxPlayers: maxPlayers,
            timeToPlay: timeToPlay,
            imageUrl: img,
        };
        const update = async () => {
            await apiAdminEditProduct(productId, payload);
        };
        const submit = async () => {
            await apiAdminAddProduct(payload);
        };
        if (productId) {
            update();
        } else submit();
    };

    useEffect(() => {
        console.log(props);
        if (props.productId) fetchData();
    }, []);

    return (
        <div>
            {props.productId ? <img src={img}></img> : ''}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Price: </label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Min Players: </label>
                    <input
                        type="number"
                        value={minPlayers}
                        onChange={(e) => setMinPlayers(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Max Players</label>
                    <input
                        type="number"
                        value={maxPlayers}
                        onChange={(e) => setMaxPlayers(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Time to Play</label>
                    <input
                        type="number"
                        value={timeToPlay}
                        onChange={(e) => setTimeToPlay(e.target.value)}
                    ></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AdminProductForm;
