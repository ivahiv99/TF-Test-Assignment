import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/rootReducer';
import './reset.css';

import MyRouter from './Router';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <MyRouter/>
    </Provider>
    , document.getElementById('root'));

