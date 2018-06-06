import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import allThemes from '../assets/themes';

const initialState = {
    allThemes
};

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);



export default store;