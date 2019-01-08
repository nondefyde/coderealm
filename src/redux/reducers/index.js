import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import users from './user/user';

export default (history) => combineReducers({
	router: connectRouter(history),
	users,
});
