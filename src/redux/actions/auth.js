import { createActionType } from '../../utils/index';

// Users
export const SOCIAL = createActionType('SOCIAL', 'Auth');
export const LOGIN = createActionType('LOGIN', 'Auth');
export const REGISTER = createActionType('REGISTER', 'Auth');
export const VERIFY_USER = createActionType('VERIFY_USER', 'Auth');

export const login = (payload) => ({
	type: LOGIN.START,
	payload
});

export const social = (payload) => ({
	type: SOCIAL.START,
	payload
});

export const register = (payload) => ({
	type: REGISTER.START,
	payload
});
