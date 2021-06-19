import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

import '../styles/ProviderTable.css';

import { connect } from 'react-redux';

import DialogService from './DialogService';
import DeleteDialogService from './DeleteDialogService';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function BasicTable(props) {
	const classes = useStyles();
	const [SID, setSID] = useState('-1');
	const [Sid, setSid] = useState('-1');

	const handleSID = (e) => {
		setSID({
			SID: e.target.id + ' ' + Math.random().toFixed(2),
		});
	};

	const handleDelete = (e) => {
		setSid({
			Sid: e.target.id + ' ' + Math.random().toFixed(2),
		});
	};

	useEffect(() => {
		// console.log(props.pop)
	}, [props.flow]);

	return (
		<div>
			<DialogService ID={SID} />
			<DeleteDialogService ID={Sid} />
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<strong>Service Name</strong>
							</TableCell>
							<TableCell align="center">
								<strong>Service ID</strong>
							</TableCell>
							<TableCell align="center">
								<strong>Regular Price (₹)</strong>
							</TableCell>
							<TableCell align="center">
								<strong>Discounted Price (₹)</strong>
							</TableCell>
							<TableCell align="right">
								<strong>Action&nbsp;</strong>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.services.length <= 0 && (
							<TableRow className="t-row">
								<TableCell className="text-muted" component="th" scope="row">
									No Service Added :(
								</TableCell>
							</TableRow>
						)}
						{props.services.map((row, index) => (
							<TableRow className="t-row" key={index}>
								<TableCell className="text-muted" component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell className="text-muted" align="center">
									{row.id}
								</TableCell>
								<TableCell className="text-muted" align="center">
									{row.actualPrice}
								</TableCell>
								<TableCell className="text-muted" align="center">
									{row.discountedPrice}
								</TableCell>
								<TableCell align="right" style={{ cursor: 'pointer', zoom: '0.8' }}>
									<Icon id={row.id} onClick={handleSID}>
										create
									</Icon>
									&nbsp; &nbsp;
									<Icon id={row.id} onClick={handleDelete}>
										delete
									</Icon>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		services: state.services,
	};
};

export default connect(mapStateToProps)(BasicTable);
