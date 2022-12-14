import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducer';

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
