import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { useState } from 'react';

import '../styles/ProviderBox.css';
import ProviderTable from './ProviderTable';

import store from '../store/store';
import * as actions from '../store/actionTypes';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '90%',
		display: 'block',
		margin: '100px auto',
	},
	formControl: {
		minWidth: 120,
		width: '100%',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function FullWidthGrid() {
	const classes = useStyles();
	const [gender, setGender] = useState('M');
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [pushID, setPushID] = useState('');

	const handleChange = (event) => {
		setGender(event.target.value);
	};

	const handleFname = (e) => {
		setFname(e.target.value);
	};
	const handleLname = (e) => {
		setLname(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMobile = (e) => {
		setMobile(e.target.value);
	};
	const handleAdd = () => {
		let provider = {
			name: fname + ' ' + lname,
			id: Math.floor(100000 + Math.random() * 90000).toString(),
			gender: gender === 'M' ? 'Male' : 'Female',
			mobile: mobile,
			email: email,
			orgID: store.getState().organization.id
		};

		let providers = store.getState().providers;

		let dupEntry = false;

		for (let i = 0; i < providers.length; i++) {
			if (
				providers[i].name === fname + ' ' + lname &&
				providers[i].mobile === mobile &&
				providers[i].email === email
			) {
				dupEntry = true;
				break;
			}
		}

		if (dupEntry) {
			alert('Already Added');
		} else {
			providers.unshift(provider);

			store.dispatch({
				type: actions.ADD_PROVIDER,
				payload: {
					new_providers: providers,
				},
			});
		}

		setPushID({
			pushID: Math.random(),
		});
	};

	return (
		<div>
			<div className={classes.root}>
				<h3 id="provider-head">
					Register your <strong>service provider</strong> here
				</h3>
				<br />
				<Grid container spacing={8}>
					<Grid item xs={12} sm={6}>
						<div className="wrapper">
							<div>
								<p>Provider's Name</p>
								<TextField placeholder="First Name" variant="outlined" onChange={handleFname} />
							</div>
							{/* <div id="btw-div"></div> */}
							<div id="ln-div">
								<p>&nbsp;</p>
								<TextField placeholder="Last Name" variant="outlined" onChange={handleLname} />
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6}>
						<p>Provider's Mobile Number </p>
						<TextField
							style={{ width: '100%' }}
							type="number"
							placeholder="Mobile Number"
							variant="outlined"
							onChange={handleMobile}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<p>Provider's Email </p>
						<TextField
							style={{ width: '100%' }}
							type="email"
							placeholder="Email Address"
							variant="outlined"
							onChange={handleEmail}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<p>Provider's Gender </p>
						<FormControl variant="outlined" className={classes.formControl}>
							<Select value={gender} onChange={handleChange}>
								<MenuItem value="M">Male</MenuItem>
								<MenuItem value="F">Female</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Button
							onClick={handleAdd}
							style={{ width: '100%' }}
							variant="contained"
							size="large"
							color="primary"
							disabled={
								!Boolean(
									fname.length > 0 &&
										lname.length > 0 &&
										email.length > 0 &&
										/^[6-9]\d{9}$/.test(mobile) &&
										/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
											email
										)
								)
							}
						>
							ADD PROVIDER
						</Button>
					</Grid>
				</Grid>
			</div>
			<div style={{ width: '90%', margin: 'auto auto', display: 'block' }}>
				<ProviderTable flow={pushID} />
			</div>
		</div>
	);
}
