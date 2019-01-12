import { LOGIN, REGISTER, SOCIAL, VERIFY_USER } from '../../actions';

const defaultState = {
	current: undefined,
	byId: {},
	byCreatedAt: [],
};

const userReducer = (state = defaultState, action) => {
	switch (action.type) {
	case SOCIAL.SUCCESS:
	case LOGIN.SUCCESS:
	case REGISTER.SUCCESS:
		return Object.assign({}, state, action.payload);
	case VERIFY_USER.SUCCESS:
		return Object.assign({}, state, {
			...state, data: action.payload
		});
	default:
		return state;
	}
};

export default userReducer;
