import React from 'react';
import { render } from 'react-dom';
import App from './src/app.js';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './src/reducers/index.js';
let store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('react_data')
);