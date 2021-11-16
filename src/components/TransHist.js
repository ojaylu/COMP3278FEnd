import { useContext } from "react";
import { UserContext } from "../App";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import * as React from "react";
import { List, Datagrid, TextField, EditButton } from 'react-admin';
import { waitForDomChange } from "@testing-library/react";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';



    
function TransHist () {
    const user = useContext(UserContext);
    {/* DATABASE NEEDED! 
        const result = {transid, transdate, transtype, transfrom, transto, transamount}*/}
    const transinfo = [{transid: 1, transdate: "03-12-2021", transtype: "food", transfrom: "030-010-2342-123", transto: "021-24-123-123", transamount: 300, tremarks: "hi"}, 
                     {transid: 2, transdate: "04-12-2021", transtype: "shoe", transfrom: "030-010-2342-123", transto: "021-24-123-123", transamount: 300, tremarks: "hi"}, 
                     {transid: 3, transdate: "05-12-2021", transtype: "poo", transfrom: "030-010-2342-123", transto: "021-24-123-123", transamount: 300, tremarks: "hi"}]
                     const [search, setSearch] = React.useState('');
                    
                    const handleSearch = (event) => {
                        setSearch(event.target.value);
                      };
                      
    return (
        <div class="container shadow" style={{padding:"30px"}}>
            <h3 style={{paddingBottom: "50px"}}>Transaction History</h3> 
            <label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
      </label>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
            <TableCell>Date and Time</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Transfer from</TableCell>
            <TableCell align="right">Transfer to</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {transinfo.map((trans, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {trans.transdate}
              </TableCell>
              <TableCell align="right">{trans.transamount}</TableCell>
              <TableCell align="right">{trans.transfrom}</TableCell>
              <TableCell align="right">{trans.transto}</TableCell>
              <TableCell align="right">{trans.transtype}</TableCell>
              <TableCell align="right">{trans.tremarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>        
    )
}

export default TransHist;