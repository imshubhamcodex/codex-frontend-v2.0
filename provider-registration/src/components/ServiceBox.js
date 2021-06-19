import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useState } from 'react';

import '../styles/ProviderBox.css';
import ServiceTable from './ServiceTable';

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
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}));

export default function FullWidthGrid() {
	const classes = useStyles();
	const [service, setService] = useState('');
	const [definedServices] = useState(store.getState().definedServices);
	const [price, setPrice] = useState('');
	const [discount, setDiscount] = useState('');
	const [pushID, setPushID] = useState(0);

	const handleChange = (event) => {
		setService(event.target.value);
	};
	const handleActualPrice = (e) => {
		setPrice(e.target.value);
	};
	const handleDiscountedPrice = (e) => {
		setDiscount(e.target.value);
	};
	const handleAdd = (e) => {
		let name = '';

		for (let i = 0; i < definedServices.length; i++) {
			if (definedServices[i].id === service) {
				name = definedServices[i].name;
				break;
			}
		}
		let newservice = {
			name: name,
			id: service,
			actualPrice: price,
			discountedPrice: discount,
		};

		let services = store.getState().services;

		let mutilpleEntry = false;

		for (let i = 0; i < services.length; i++) {
			if (services[i].id === service) {
				mutilpleEntry = true;
				break;
			}
		}

		if (!mutilpleEntry) {
			services.unshift(newservice);

			store.dispatch({
				type: actions.ADD_SERVICE,
				payload: {
					new_services: services,
				},
			});

			setPushID(Math.random());
		} else {
			alert('Already Added');
		}
	};

	return (
		<div>
			<div className={classes.root}>
				<h3 id="provider-head">
					Select services offered by <strong>Provider’s Name</strong>
				</h3>
				<br />
				<Grid container spacing={8} style={{ margin: 'auto auto', display: 'block', maxWidth: '600px' }}>
					<Grid item xs={12} sm={12}>
						<p>Select a service</p>
						<FormControl variant="outlined" className={classes.formControl}>
							<Select value={service} onChange={handleChange}>
								{definedServices.map((ele) => {
									return (
										<MenuItem key={ele.id} value={ele.id}>
											{ele.name}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Card>
							<CardContent>
								<Typography className={classes.title} color="textSecondary" gutterBottom>
									Set price and discounts for Service Name
								</Typography>
								<p>Actual Rate:</p>
								<TextField
									style={{ width: '100%' }}
									type="number"
									placeholder="Actual Rate (₹)"
									variant="outlined"
									onChange={handleActualPrice}
								/>
								<div style={{ height: '20px' }}></div>
								<p>Discounted Rate:</p>
								<TextField
									style={{ width: '100%' }}
									type="number"
									placeholder="Discounter Rate (₹)"
									variant="outlined"
									onChange={handleDiscountedPrice}
								/>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Button
							onClick={handleAdd}
							style={{ width: '100%' }}
							variant="contained"
							size="large"
							color="primary"
							disabled={!Boolean(price.length > 0 && discount.length > 0 && service.length > 0)}
						>
							ADD SERVICE
						</Button>
					</Grid>
				</Grid>
			</div>
			<div style={{ width: '90%', margin: 'auto auto', display: 'block' }}>
				<ServiceTable flow={pushID} />
			</div>
		</div>
	);
}
