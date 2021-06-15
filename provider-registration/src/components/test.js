import React, { Component } from 'react';
import store from '../store/store';
import * as actions from '../store/actionTypes';


class test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a: store.getState().userType,
		};
	}

    updateState(){
        this.setState({
            a: store.getState().userType
        })
    }

	fun = () => {
		store.dispatch({
			type: actions.SET_USER_TYPE,
			payload: {
				userType: 'hi boss',
			},
		});

        this.updateState();
	};

	render() {
		return (
			<div>
				<button onClick={this.fun}>Click me</button>
				{this.state.a}
			</div>
		);
	}
}

export default test;
