import { apiGetCart, apiAddToCart, apiOrderSuccess } from '../../api';

const fetchCart = () => {
    if (!window.localStorage.getItem('token')) {
        console.log('In here');
        return (dispatch) => {
            dispatch({
                type: 'SET_CART',
                cart: {
                    lineItems: JSON.parse(window.localStorage.getItem('cart')),
                },
            });
        };
    }
    return async (dispatch) => {
        const response = await apiGetCart();
        dispatch({
            type: 'SET_CART',
            cart: response.data,
        });
    };
};

const orderCreatedFromCart = () => {
    return async (dispatch) => {
        const response = await apiOrderSuccess();
        dispatch({
            type: 'SET_CART',
            cart: response.data,
        });
    };
};

const addToCart = (productInfo) => {
    return async (dispatch) => {
        const response = await apiAddToCart(productInfo);
        dispatch({
            type: 'MODIFY_ITEM',
            cart: response.data,
        });
    };
};

const emptyCart = () => {
    return async (dispatch) => {
        dispatch({ type: 'EMPTY_CART' });
    };
};

const guestAddToCart = (lineItem) => {
    const cart = JSON.parse(window.localStorage.getItem('cart'));

    if (!cart) {
        const stringData = JSON.stringify([lineItem]);
        window.localStorage.setItem('cart', stringData);
    } else {
        const productAlreadyInCart = cart.reduce((prev, next) => {
            if (next.product.id === lineItem.product.id) {
                return prev + 1;
            } else {
                return prev;
            }
        }, 0);
        if (productAlreadyInCart) {
            const newCart = cart.map((item) => {
                if (item.product.id === lineItem.product.id) {
                    return {
                        product: item.product,
                        quantity: item.quantity + lineItem.quantity,
                    };
                } else {
                    return item;
                }
            });
            window.localStorage.setItem('cart', JSON.stringify(newCart));
        } else {
            const newCart = [...cart, lineItem];
            window.localStorage.setItem('cart', JSON.stringify(newCart));
        }
    }

    return (dispatch) => {
        dispatch({
            type: 'GUEST_ADD',
            lineItem: lineItem,
        });
    };
};

export {
    fetchCart,
    addToCart,
    emptyCart,
    orderCreatedFromCart,
    guestAddToCart,
};
