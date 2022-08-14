import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";

const reducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export default reducers;
