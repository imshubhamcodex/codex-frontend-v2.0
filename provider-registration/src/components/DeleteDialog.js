import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import store from '../store/store';
import * as actions from '../store/actionTypes';

export default function DraggableDialog(props) {
	const [open, setOpen] = React.useState(false);
	const [id, setID] = useState(' ');

	const handleClose = () => {
		setOpen(false);

	};

	const handleDelete = () => {
		let providers = store.getState().providers.filter((el) => {
			return el.id !== id.id;
		});

		console.log(providers);

		store.dispatch({
			type: actions.DELETE_PROVIDER,
			payload: {
				updated_providers: providers,
			},
		});

		setOpen(false);
	};

	useEffect(() => {
		if (props.ID !== '-1') {
			setID({
				id: props.ID.Pid.split(' ')[0],
			});

			setOpen(true);
		}
	}, [props.ID.Pid]);

	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle style={{ cursor: 'move' }}>Are you sure ?</DialogTitle>
				<DialogContent>
					<DialogContentText>Do you want to delete this provider ( {id.id} )</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color="primary">
						CANCLE
					</Button>
					<Button onClick={handleDelete} color="primary">
						DELETE
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
