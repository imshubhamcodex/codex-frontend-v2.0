import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import '../styles/App.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '50ch',
            paddingTop:'15px'
		},
	},
}));

export default function BasicTextFields() {
	const classes = useStyles();

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<p className="t-label1">Organization Name</p>
			<TextField id="outlined-basic" placeholder="Organization Name" variant="outlined" />
			<br />
			<p className="t-label2">Organization Location</p>
			<TextField id="outlined-basic" placeholder="Organization Name" variant="outlined" />
		</form>
	);
}
