import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


//checking store 
import store from './store/store'
import * as actions from './store/actionTypes' 


//It will be auto fire when state changes
store.subscribe(()=>{
  console.log("Store Changed",store.getState())
})



// to dispatch action
store.dispatch({             
  type: actions.SET_USER_TYPE,
  payload:{
    userType: "indv"
  }
})

// to dispatch action
store.dispatch({             
  type: actions.UPDATE_ORGANIZATION,
  payload:{
    organization: {
      id:8000001,
      name: "Badass org."
    }
  }
})




ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
