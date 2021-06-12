import * as actions from './actionTypes' 

let initial_state = {
    providers: [],
    services: [],
    organization: {},
    definedServices: [
      { name: "ECG", id: "ecg-2017-random" },
      { name: "X-ray", id: "xray-2015-text" },
      { name: "MRI scan", id: "mri-2000-kilo" },
    ],
    userType: null,
  }

function reducer(state = initial_state , action){
    if(action.type === actions.SET_USER_TYPE){
        return {
            ...state,
            userType : action.payload.userType
        }
    }
    else if(action.type === actions.UPDATE_ORGANIZATION){
        return {
            ...state,
            organization : action.payload.organization
        }
    }
    else
    return state
}

export default reducer;