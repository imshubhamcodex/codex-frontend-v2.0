import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'

//checking store
import store from './store/store';

//It will be auto fire when state changes
// store.subscribe(()=>{
//   console.log("Store Changed",store.getState())
// })

import Footer from './components/Footer'

ReactDOM.render(
	<Provider store={store}>
		<App />
		<Footer />
	</Provider>,
	document.getElementById('root')
);
