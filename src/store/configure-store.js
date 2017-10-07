import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunkMiddleware
    ),
    typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const configureStore = (initialState) => {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
};

const store = configureStore();

export default store;
