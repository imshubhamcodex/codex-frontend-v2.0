import * as actions from './actionTypes';

let initial_state = {
	providers: [
		{ name: 'Andrew Adam', id: 'random-text11', gender: 'Male', mobile: '1234567890', email: 'andrew@hahaha' },
		{ name: 'Andrew Adam', id: 'random-text22', gender: 'Female', mobile: '1234567890', email: 'andrew@hahaha' },
		{ name: 'Andrew Adam', id: 'random-text32', gender: 'Female', mobile: '1234567890', email: 'andrew@hahaha' },
		{ name: 'Andrew Adam', id: 'random-text42', gender: 'Female', mobile: '1234567890', email: 'andrew@hahaha' },
		{ name: 'Andrew Adam', id: 'random-text52', gender: 'Female', mobile: '1234567890', email: 'andrew@hahaha' },
	],
	services: [{ name: 'service 1', id: 'ecg-2017-random', actualPrice: '100', discountedPrice: '12' }],
	organization: {},
	definedServices: [
		{ name: 'ECG', id: 'ecg-2017-random' },
		{ name: 'X-ray', id: 'xray-2015-text' },
		{ name: 'MRI scan', id: 'mri-2000-kilo' },
	],
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
			providers: action.payload.new_services,
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
	} else return state;
}

export default reducer;
