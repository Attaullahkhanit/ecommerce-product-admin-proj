import React, {useEffect, useState} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './RegUsersList.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Btnuser from '../../Component/Btnuser';
import {useSelector, useDispatch} from 'react-redux';
import { regUsersListAction } from '../../Redux/Actions/RegUsersListAction';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

// import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#001529',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

    const reguserlistdata = [{
          fname: 'atkhan',
          lname: 'khan',
          email: 'atkhan@gmail.com',
          phoneno: '322-34234-7658'
    },
    {
      fname: 'atkhansf',
      lname: 'khansj',
      email: 'atkhanfsas@gmail.com',
      phoneno: '322-34232-9876'
},
{
  fname: 'aewtkhan',
  lname: 'sskhan',
  email: 'rqwatkhan@gmail.com',
  phoneno: '83892343'
},]
  
  
function RegUsersList() {

        const dispatchdata = useDispatch();
        useEffect(()=> {
          dispatchdata(regUsersListAction);
        },[])
        const selectdata = useSelector((abc)=>{ return abc })
          console.log(selectdata, 'reguserlistdata')
          
        const navigate = useNavigate();
        function onClickAddForm(){
            navigate('/reguserslistform')
        }
        function onClickViewDetail(){
          navigate('/reguserslistdetail')
        }

        const [firstName, setFirstName] = useState();
        const [lastName, setLastName] = useState();
        const [email, setEmail] = useState();
        const [phone, setPhone] = useState();

        const dispatchData = useDispatch();
        useEffect(()=> {
              dispatchData(regUsersListAction())
        }, [])
        const selectData = useSelector(state => state)
        console.log(selectData.regUsersListReducer, 'redux Data')
        
  return (
    <>
        <Dashboard>
            <div className='regUL-title'>
                <div><h6>Register Users List</h6></div>
                <div><Link onClick={onClickAddForm} sx={{px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Add User</Link></div>
            </div>
            <TableContainer className='tablecontainer'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell value={firstName} onChange={(e) => setFirstName(e.target.value)}>First Name</StyledTableCell>
                        <StyledTableCell value={lastName} onChange={(e) => setLastName(e.target.value)}>Last Name</StyledTableCell>
                        <StyledTableCell value={email} onChange={(e) => setEmail(e.target.value)}>Email Id</StyledTableCell>
                        <StyledTableCell value={phone} onChange={(e) => setPhone(e.target.value)}>Phone No</StyledTableCell>
                        <StyledTableCell >Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {selectData.regUsersListReducer.dtload == true ?
                    <div>loading...</div>: 
                    selectData?.regUsersListReducer?.payload?.map((row) => (
                        <StyledTableRow key={row?.fname}>
                        <StyledTableCell component="th" scope="row">
                            {row?.fname}
                        </StyledTableCell>
                        <StyledTableCell >{row?.lname}</StyledTableCell>
                        <StyledTableCell >{row?.email}</StyledTableCell>
                        <StyledTableCell >{row?.phoneno}</StyledTableCell>
                        <StyledTableCell > <Stack direction="row" spacing={1}>
                                                <IconButton aria-label="delete">
                                                   <DeleteIcon />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="add to shopping cart">
                                                  <Link onClick={onClickViewDetail} sx={{fontSize: '12px', textDecoration: 'none'}} href="#">View</Link>
                                                </IconButton>
                                            </Stack>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Dashboard>
    </>
  )
}

export default RegUsersList
