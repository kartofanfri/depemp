import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './App';

import promise from "redux-promise-middleware";
import reducer from './reducers';


import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './assets/style.scss';


const store = createStore(reducer, applyMiddleware(promise(), thunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));