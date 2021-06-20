import * as actions from './actionTypes';

let initial_state = {
	providers: [],
	services: [],
	organization: {},
	definedServices: [],
	userType: null,
};

function reducer(state = initial_state, action) {
	if (action.type === actions.SET_USER_TYPE) {
		return {
			...state,
			userType: action.payload.userType,
		};
	} else if (action.type === actions.UPDATE_ORGANIZATION) {
		return {
			...state,
			organization: action.payload.organization,
		};
	} else if (action.type === actions.ADD_PROVIDER) {
		return {
			...state,
			providers: action.payload.new_providers,
		};
	} else if (action.type === actions.EDIT_PROVIDER) {
		return {
			...state,
			providers: action.payload.edited_providers,
		};
	} else if (action.type === actions.DELETE_PROVIDER) {
		return {
			...state,
			providers: action.payload.updated_providers,
		};
	} else if (action.type === actions.ADD_SERVICE) {
		return {
			...state,
			services: action.payload.new_services,
		};
	} else if (action.type === actions.DELETE_SERVICE) {
		return {
			...state,
			services: action.payload.updated_services,
		};
	} else if (action.type === actions.EDIT_SERVICE) {
		return {
			...state,
			services: action.payload.edited_services,
		};
	} else if (action.type === actions.DEFINED_SERVICES) {
		return {
			...state,
			definedServices: action.payload.services,
		};
	} else return state;
}

export default reducer;
