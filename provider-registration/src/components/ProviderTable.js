import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

import '../styles/ProviderTable.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {name:'Andrew Adam',id:'random-text',gender:'Male',mobile:'1234567890',email:'andrew@hahaha'},
  {name:'Andrew Adam',id:'random-text',gender:'Male',mobile:'1234567890',email:'andrew@hahaha'},
  {name:'Andrew Adam',id:'random-text',gender:'Male',mobile:'1234567890',email:'andrew@hahaha'},
  {name:'Andrew Adam',id:'random-text',gender:'Male',mobile:'1234567890',email:'andrew@hahaha'},
  {name:'Andrew Adam',id:'random-text',gender:'Male',mobile:'1234567890',email:'andrew@hahaha'}
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Provider's Name</strong></TableCell>
            <TableCell align="center"><strong>Provider's ID</strong></TableCell>
            <TableCell align="center"><strong>Gender</strong></TableCell>
            <TableCell align="center"><strong>Phone Number</strong></TableCell>
            <TableCell align="center"><strong>Email Address</strong></TableCell>
            <TableCell align="right"><strong>Action&nbsp;</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {rows.length<=0&&<p className="text-muted" style={{marginTop:'25px',marginBottom:'20px',marginLeft:'10px'}}>No Provider Added :(</p>}
          {rows.map((row,index) => (
            <TableRow className="t-row" key={index}>
              <TableCell className="text-muted" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="text-muted" align="center">{row.id}</TableCell>
              <TableCell className="text-muted" align="center">{row.gender}</TableCell>
              <TableCell className="text-muted" align="center">{row.mobile}</TableCell>
              <TableCell className="text-muted" align="center">{row.email}</TableCell>
              <TableCell  align="right" style={{cursor:'pointer',zoom:'0.8'}}><Icon>create</Icon>&nbsp; &nbsp;<Icon >delete</Icon></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
