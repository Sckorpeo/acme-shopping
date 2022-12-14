import React, { useEffect, useRef, useState } from 'react';
import {
    apiGetProduct,
    apiAdminEditProduct,
    apiAdminAddProduct,
} from '../../api/products';
import './AdminPage.css';

function AdminProductForm(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [minPlayers, setMinPlayers] = useState();
    const [maxPlayers, setMaxPlayers] = useState();
    const [timeToPlay, setTimeToPlay] = useState();
    const [productImage, setImage] = useState('');
    const productId = props.productId;
    const picRef = useRef(null);

    const fetchData = async () => {
        const response = await apiGetProduct(productId);
        setName(response.data.name);
        setPrice(response.data.price);
        setMinPlayers(response.data.minPlayers);
        setMaxPlayers(response.data.maxPlayers);
        setTimeToPlay(response.data.timeToPlay);
        setImage(response.data.imageUrl);
    };
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const handleSubmit = async (ev) => {
        // ev.preventDefault();
        const payload = {
            name: name,
            price: price,
            minPlayers: minPlayers,
            maxPlayers: maxPlayers,
            timeToPlay: timeToPlay,
            imageUrl: productImage,
        };
        if (ev.target.productImage.files[0]) {
            const file = ev.target.productImage.files[0];
            try {
                const result = await toBase64(file)
                payload.imageUrl=result
            } catch (ex) {
                console.log(error);
            }
            // THE FOLLOWING DOES NOT ENFORCE BASE64 ENCODING!
            // const reader = new FileReader();
            // reader.readAsDataURL(file);
            // reader.addEventListener('load', () => {
            //     payload.imageUrl=reader.result
            // });
        }
        const update = async () => {
            console.log(price)
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
        // console.log(props);
        if (props.productId) fetchData();
    }, []);

    return (
        <div className="admin-page-form neumorphism">
            {props.productId ? (
                <img className="neumorphism-inset" src={productImage}></img>
            ) : (
                ''
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Image: </label>
                    <input
                        id="productImage"
                        name="productImage"
                        type="file"
                        ref={picRef}
                        onChange={(e) => setImage(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        className="neumorphism-input"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Price: </label>
                    <input
                        type="number"
                        step="any"
                        min="0"
                        value={price}
                        className="neumorphism-input"
                        onChange={(e) => setPrice(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Min Players: </label>
                    <input
                        type="number"
                        value={minPlayers}
                        className="neumorphism-input"
                        onChange={(e) => setMinPlayers(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Max Players: </label>
                    <input
                        type="number"
                        value={maxPlayers}
                        className="neumorphism-input"
                        onChange={(e) => setMaxPlayers(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Time to Play: </label>
                    <input
                        type="number"
                        value={timeToPlay}
                        className="neumorphism-input"
                        onChange={(e) => setTimeToPlay(e.target.value)}
                    ></input>
                </div>
                <button
                    className="neumorphism-btn"
                    disabled={
                        !name ||
                        !price ||
                        !minPlayers ||
                        !maxPlayers ||
                        !timeToPlay
                    }
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AdminProductForm;
