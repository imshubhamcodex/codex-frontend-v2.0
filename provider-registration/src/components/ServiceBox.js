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
import ServiceTable from './ServiceTable';

import store from '../store/store';

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
	const [service, setService] = useState('Select Service');
	const [definedServices, setDefinedServices] = useState(store.getState().definedServices);

	const handleChange = (event) => {
		setService(event.target.value);
	};

	return (
		<div>
			<div className={classes.root}>
				<h3 id="provider-head">
					Select services offered by <strong>Provider’s Name</strong>
				</h3>
				<br />
				<Grid container spacing={8}>
					<Grid item xs={12} sm={6}>
						<p>Select a service</p>
						<FormControl variant="outlined" className={classes.formControl}>
							<Select value={service} onChange={handleChange}>
								{definedServices.map((ele) => {
									return <MenuItem value={ele.id}>{ele.name}</MenuItem>;
								})}
							</Select>
						</FormControl>
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
						<Button style={{ width: '100%' }} variant="contained" size="large" color="primary">
							ADD SERVICE
						</Button>
					</Grid>
				</Grid>
			</div>
			<div style={{ width: '90%', margin: 'auto auto', display: 'block' }}>
				<ServiceTable />
			</div>
		</div>
	);
}
