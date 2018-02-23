import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import Home from './components/Home';
import NotFound from './components/NotFound';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

console.log(store.getState())

ReactDOM.render(jsx, document.getElementById('app'));
