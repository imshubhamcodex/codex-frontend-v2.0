import React from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import store from '../store/store';
import * as actions from '../store/actionTypes';
import '../styles/ProviderBox.css';

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

let fname = ' ';
let lname = ' ';
let id = ' ';
let mobile = ' ';
let email = ' ';
let gender = ' ';

export default function ResponsiveDialog(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		if (props.ID !== '-1') {
			let pid = props.ID.PID.split(' ')[0];
			let providers = store.getState().providers;

			let selectedProvider = null;

			for (let i = 0; i < providers.length; i++) {
				if (providers[i].id === pid) {
					selectedProvider = providers[i];
					break;
				}
			}

			fname = selectedProvider.name.split(' ')[0];
			lname = selectedProvider.name.split(' ')[1];
			mobile = selectedProvider.mobile;
			email = selectedProvider.email;
			id = selectedProvider.id;

			if (selectedProvider.gender === 'Male') {
				gender = 'M';
			} else {
				gender = 'F';
			}

			setOpen(true);
		}
	}, [props.ID.PID]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleFname = (e) => {
		fname = e.target.value;
	};
	const handleLname = (e) => {
		lname = e.target.value;
	};
	const handleMobile = (e) => {
		mobile = e.target.value;
	};
	const handleEmail = (e) => {
		email = e.target.value;
	};
	const handleGender = (e) => {
		gender = e.target.value;
	};
	const handleSave = () => {
		let gen = '';
		if (gender === 'M') gen = 'Male';
		else gen = 'Female';

		let obj = {
			name: fname + ' ' + lname,
			id,
			gender: gen,
			mobile,
			email,
		};
		let providers = store.getState().providers.filter(function (el) {
			return el.id !== id;
		});
		providers.unshift(obj);

		store.dispatch({
			type: actions.EDIT_PROVIDER,
			payload: {
				edited_providers: providers,
			},
		});

		handleClose();
	};

	return (
		<div>
			<Dialog  open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
				<DialogTitle id="responsive-dialog-title">Edit Provider ( {id} ) </DialogTitle>
				<DialogContent>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<div className="wrapper">
								<div>
									<p>Provider's Name</p>
									<TextField
										onChange={handleFname}
										placeholder="First Name"
										defaultValue={fname}
										variant="outlined"
									/>
								</div>
								<div>
									<p>&nbsp;</p>
									<TextField
										placeholder="Last Name"
										onChange={handleLname}
										defaultValue={lname}
										variant="outlined"
									/>
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
								defaultValue={mobile}
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
								defaultValue={email}
								onChange={handleEmail}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<p>Provider's Gender </p>
							<FormControl variant="outlined" className={classes.formControl}>
								<Select defaultValue={gender} onChange={handleGender}>
									<MenuItem value="M">Male</MenuItem>
									<MenuItem value="F">Female</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						CANCLE
					</Button>
					<Button onClick={handleSave} color="primary" autoFocus>
						SAVE
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
