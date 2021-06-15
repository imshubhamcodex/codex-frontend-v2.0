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

	const handleChange = (event) => {
		setGender(event.target.value);
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
								<TextField placeholder="First Name" variant="outlined" />
							</div>
							{/* <div id="btw-div"></div> */}
							<div id="ln-div">
								<p>&nbsp;</p>
								<TextField placeholder="Last Name" variant="outlined" />
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
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<p>Provider's Email </p>
						<TextField
							style={{ width: '100%' }}
							type="email"
							placeholder="Email Address"
							variant="outlined"
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
						<Button style={{ width: '100%' }} variant="contained" size="large" color="primary">
							ADD PROVIDER
						</Button>
					</Grid>
				</Grid>
			</div>
			<div style={{ width: '90%', margin: 'auto auto', display: 'block' }}>
				<ProviderTable />
			</div>
		</div>
	);
}
