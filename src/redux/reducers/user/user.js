import { CREATE_USER, } from '../../actions/index';

const defaultState = {
	current: undefined,
	byId: {},
	byCreatedAt: [],
};

const userReducer = (state = defaultState, action) => {
	switch (action.type) {
	case CREATE_USER.SUCCESS:
		return Object.assign({}, state, {current: action.payload});
	default:
		return state;
	}
};

export default userReducer;
