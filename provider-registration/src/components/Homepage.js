import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import store from '../store/store';
import * as actions from '../store/actionTypes';

export default function Homepage() {
	let history = useHistory();

	const handleOrg = () => {
		store.dispatch({
			type: actions.SET_USER_TYPE,
			payload: {
				userType: 'org',
			},
		});

		history.push('/process');
	};

	const handleIndv = () => {
		store.dispatch({
			type: actions.SET_USER_TYPE,
			payload: {
				userType: 'indv',
			},
		});

		history.push('/process');
	};

	return (
		<div>
			<div style={{ textAlign: 'center', fontSize: '30px', marginTop: '5%' }}>Join us as a Service Provider</div>
			<div className="flex-container" style={{ display: 'flex', marginTop: '5%' }}>
				<div style={{ width: '10%', marginRight: '30px' }}>
					<GroupRoundedIcon color="primary" style={{ height: '45px', width: '45px', float: 'right' }} />
				</div>
				<div style={{ width: '70%', fontSize: '25px' }}>
					Be a service provider in one of the top Health Insurance company as a <strong>Organization</strong>
				</div>
				<div style={{ width: '10%', marginLeft: '50px' }}>
					<button type="button" onClick={handleOrg} className="btn btn-primary">
						Join Today
					</button>
				</div>
			</div>
			<div style={{ textAlign: 'center', fontSize: '25px', marginTop: '5%' }}>
				<strong>or</strong>
			</div>
			<div className="flex-container" style={{ display: 'flex', marginTop: '5%' }}>
				<div style={{ width: '10%', marginRight: '30px' }}>
					<PersonRoundedIcon color="primary" style={{ height: '45px', width: '45px', float: 'right' }} />
				</div>
				<div style={{ width: '70%', fontSize: '25px' }}>
					Be a service provider in one of the top Health Insurance company as a <strong>Individual</strong>
				</div>
				<div style={{ width: '10%', marginLeft: '50px' }}>
					<button type="button" onClick={handleIndv} className="btn btn-primary">
						Join Today
					</button>
				</div>
			</div>
		</div>
	);
}
