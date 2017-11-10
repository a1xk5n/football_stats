import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import trunk from 'redux-thunk';
import AppReducer from './reducers/app-reducer';

import App from './components/app';

import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(AppReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(trunk)));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
