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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
		minWidth: 90,
		width: '100%',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

let id = ' ';
let name = ' ';
let actualPrice = ' ';
let discountedPrice = ' ';

export default function ResponsiveDialog(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		if (props.ID !== '-1') {
			let pid = props.ID.SID.split(' ')[0];
			let services = store.getState().services;

			let selectedService = null;

			for (let i = 0; i < services.length; i++) {
				if (services[i].id === pid) {
					selectedService = services[i];
					break;
				}
			}

			id = selectedService.id;
			name = selectedService.name;
			actualPrice = selectedService.actualPrice;
			discountedPrice = selectedService.discountedPrice;

			setOpen(true);
		}
	}, [props.ID.SID]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleSave = () => {
		let obj = {
			name,
			id,
			actualPrice,
			discountedPrice,
		};

		let services = store.getState().services.filter(function (el) {
			return el.id !== id;
		});
		services.unshift(obj);

		store.dispatch({
			type: actions.EDIT_SERVICE,
			payload: {
				edited_services: services,
			},
		});

		handleClose();
	};

	const handleActualRate = (e) => {
		actualPrice = e.target.value;
	};

	const handleDiscountedRate = (e) => {
		discountedPrice = e.target.value;
	};

	return (
		<div>
			<Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
				<DialogTitle id="responsive-dialog-title">Edit Service ( {id} ) </DialogTitle>
				<DialogContent>
					<Grid container spacing={8} style={{ margin: 'auto auto', display: 'block', maxWidth: '400px' }}>
						<Grid item xs={12} sm={12}>
							<Card>
								<CardContent>
									<Typography className={classes.title} color="textSecondary" gutterBottom>
										Reset price and discounts for Service Name
									</Typography>
									<p>Actual Rate:</p>
									<TextField
										style={{ width: '100%' }}
										type="number"
										placeholder="Actual Rate (₹)"
										variant="outlined"
										onChange={handleActualRate}
										defaultValue={actualPrice}
									/>
									<div style={{ height: '20px' }}></div>
									<p>Discounted Rate:</p>
									<TextField
										style={{ width: '100%' }}
										type="number"
										placeholder="Discounter Rate (₹)"
										variant="outlined"
										onChange={handleDiscountedRate}
										defaultValue={discountedPrice}
									/>
								</CardContent>
							</Card>
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
