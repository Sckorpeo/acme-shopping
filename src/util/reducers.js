const quantityReducer = (lineItems) => {
    return lineItems.reduce((prev, next) => {
        return prev + next.quantity;
    }, 0);
};

const priceReducer = (lineItems) => {
    return lineItems.reduce((prev, next) => {
        return prev + next.product.price * next.quantity;
    }, 0);
};

export { quantityReducer, priceReducer };
