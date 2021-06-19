import React, { useEffect } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

import DialogProvider from './DialogProvider';
import DeleteDialog from './DeleteDialog';

import '../styles/ProviderTable.css';

import { connect } from 'react-redux';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function BasicTable(props) {
	const classes = useStyles();
	const [PID, setPID] = useState('-1');
	const [Pid, setpid] = useState('-1');

	const handlePID = (e) => {
		setPID({
			PID: e.target.id + ' ' + Math.random().toFixed(2),
		});
	};

	const handleDelete = (e) => {
		setpid({
			Pid: e.target.id + ' ' + Math.random().toFixed(2),
		});
	};

	useEffect(() => {
		// console.log(props.pop)
	}, [props.flow]);

	return (
		<div>
			<DialogProvider ID={PID} />
			<DeleteDialog ID={Pid} />
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<strong>Provider's Name</strong>
							</TableCell>
							<TableCell align="center">
								<strong>Provider's ID</strong>
							</TableCell>
							<TableCell align="center">
								<strong>Gender</strong>
							</TableCell>
							<TableCell align="center">
								<strong>Phone Number</strong>
							</TableCell>
							<TableCell align="center">
								<strong>Email Address</strong>
							</TableCell>
							<TableCell align="right">
								<strong>Action&nbsp;</strong>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.providers.length <= 0 && (
							<TableRow className="t-row">
								<TableCell className="text-muted" component="th" scope="row">
									No Provider Added :(
								</TableCell>
							</TableRow>
						)}
						{props.providers.map((row, index) => (
							<TableRow className="t-row" key={index}>
								<TableCell className="text-muted" component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell className="text-muted" align="center">
									{row.id}
								</TableCell>
								<TableCell className="text-muted" align="center">
									{row.gender}
								</TableCell>
								<TableCell className="text-muted" align="center">
									{row.mobile}
								</TableCell>
								<TableCell className="text-muted" align="center">
									{row.email}
								</TableCell>
								<TableCell align="right" style={{ cursor: 'pointer', zoom: '0.8' }}>
									<Icon id={row.id} onClick={handlePID}>
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
		providers: state.providers,
	};
};

export default connect(mapStateToProps)(BasicTable);
