import { createActionType } from '../../utils/index';

// Users
export const LOGIN = createActionType('LOGIN', 'Auth');
export const REGISTER = createActionType('REGISTER', 'Auth');

export const login = (payload) => ({
	type: LOGIN.START,
	payload
});

export const register = (payload) => ({
	type: REGISTER.START,
	payload
});
