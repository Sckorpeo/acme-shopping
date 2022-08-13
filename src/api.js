const axios = require("axios");

const apiGetAuth = (token) => {
  return axios.get("/api/sessions", {
    headers: {
      authorization: token,
    },
  });
};

const apiSetAuth = (credentials) => {
  return axios.post("/api/sessions", credentials);
};

const apiGetCart = () => {
  return axios.get("/api/orders/cart");
};

export { apiGetAuth, apiSetAuth, apiGetCart };
