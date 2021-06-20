import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import store from './store/store';

import getServices from './services/getServices'

getServices();

//It will be auto fire when state changes
// store.subscribe(() => {
// 	console.log('Store Changed', store.getState());
// });


ReactDOM.render(
	<Provider store={store}>
		<App />
		<Footer />
	</Provider>,
	document.getElementById('root')
);
