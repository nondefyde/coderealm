import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from "connected-react-router";

import createRootReducer from './reducers';
import applicationMiddleware from './middleware';

export const history = createBrowserHistory();

const parseMiddleware = () => {
	const middleware = [
		thunk,
		routerMiddleware(history),
		...applicationMiddleware
	];
	if (process.env.NODE_ENV === 'production') {
		return applyMiddleware(...middleware);
	} else {
		// Enable additional logging in non-production environments.
		middleware.push(createLogger());
		return applyMiddleware(...middleware);
	}
};

const store = createStore(
	createRootReducer(history),
	parseMiddleware(),
);

export default store;
