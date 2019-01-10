import { apiRequest, LOGIN } from '../actions/index';
import { POST } from '../actions';
import API from '../../constants/api';
import APP from '../../constants/app';

const login = ({dispatch}) => (next) => (action) => {
	next(action);
	if (action.type === LOGIN.START) {
		dispatch(apiRequest({
			method: POST,
			url: API.LOGIN,
			key: 'login',
			nextRoute: APP.INDEX,
			onSuccess: LOGIN.SUCCESS,
			payload: action.payload
		}));
	}

	if (action.type === LOGIN.SUCCESS) {
		console.log('action : ', action.payload);
	}
};

export default [login];
