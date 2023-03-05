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
import {useSelector, useDispatch} from 'react-redux';
import { regUsersListAction } from '../../Redux/Actions/RegUsersListAction';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

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
        function onClickViewDetail(objrow){
          //  objrow 
          console.log("sdfsdfsdf")          
          navigate(
            '/reguserslistdetail',
            {state: objrow}, 
          )
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
                <Box sx={{p: 2}}>
                    <Button onClick={onClickAddForm} sx={{px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Add User</Button>
                </Box>
            </div>
            {/* , */}
            <TableContainer className='tablecontainer'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell value={firstName} onChange={(e) => setFirstName(e.target.value)}>Perfume Name</StyledTableCell>
                        <StyledTableCell value={lastName} onChange={(e) => setLastName(e.target.value)}>SKU No</StyledTableCell>
                        <StyledTableCell value={email} onChange={(e) => setEmail(e.target.value)}>Specification</StyledTableCell>
                        <StyledTableCell value={phone} onChange={(e) => setPhone(e.target.value)}>Price</StyledTableCell>
                        <StyledTableCell value={phone} onChange={(e) => setPhone(e.target.value)}>Description</StyledTableCell>
                        <StyledTableCell >Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {selectData.regUsersListReducer.dtload == true ?
                    <div>loading...</div>: 
                    selectData?.regUsersListReducer?.payload?.map((row) => (
                      
                        <StyledTableRow key={row?.name}>
                        <StyledTableCell component="th" scope="row">
                            {row?.name}
                        </StyledTableCell>
                        <StyledTableCell >{row?.username}</StyledTableCell>
                        <StyledTableCell >{row?.email}</StyledTableCell>
                        <StyledTableCell >{row?.address.street}</StyledTableCell>
                        <StyledTableCell >{row?.company.catchPhrase}</StyledTableCell>
                        <StyledTableCell > <Stack direction="row" spacing={1}>
                                                <IconButton aria-label="delete">
                                                   <DeleteIcon />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="add to shopping cart">
                                                  <Button onClick={()=>onClickViewDetail(row)} sx={{fontSize: '11px', textDecoration: 'none'}} to="#">View</Button>
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
