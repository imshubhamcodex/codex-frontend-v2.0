import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import store from '../store/store';
import * as actions from '../store/actionTypes';

import '../styles/App.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '50ch',
			paddingTop: '15px',
		},
	},
}));

export default function BasicTextFields() {
	const classes = useStyles();

	const handleOrgName = (e) => {
		let name = e.target.value;
		let loc = document.getElementById('orgLoc').value;
		saveToStore(name, loc);
	};

	const handleOrgLoc = (e) => {
		let loc = e.target.value;
		let name = document.getElementById('orgName').value;
		saveToStore(name, loc);
	};

	const saveToStore = (name, loc) => {
		store.dispatch({
			type: actions.UPDATE_ORGANIZATION,
			payload: {
				organization: {
					id: Math.floor(100000 + Math.random() * 90000),
					name: name,
					location: loc,
				},
			},
		});
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<p className="t-label1">Organization Name</p>
			<TextField id="orgName" onChange={handleOrgName} placeholder="Organization Name" variant="outlined" />
			<br />
			<p className="t-label2">Organization Location</p>
			<TextField id="orgLoc" onChange={handleOrgLoc} placeholder="Organization Location" variant="outlined" />
		</form>
	);
}
