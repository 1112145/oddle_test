import React from 'react';
import { render } from 'react-dom';
import App from './src/app.js';
import thunkMidleware from 'redux-thunk';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './src/reducers';
import { setUsers, setUserDetail } from './src/actions/';


const engine = createEngine('oddleStorage');
const storageMiddleware = storage.createMiddleware(engine);


let store = createStore(
    reducers,
    compose(
        applyMiddleware(thunkMidleware, storageMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

const load = storage.createLoader(engine);

load(store)
    .then((newState) => {
        store.dispatch(setUsers(newState.users));
        store.dispatch(setUserDetail(newState.user));
        renderApp();
    })
    .catch(() => { 
        console.log('Failed to load previous state');
        renderApp();
     });


function renderApp() {
    render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('react_data')
    );
}
