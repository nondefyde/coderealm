import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// main app
import App from './App.jsx';
import store from './redux/store'

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
