import React, { useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './ReceivedOrdersList.css';
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
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receivedOrderListAction } from '../../Redux/Actions/ReceivedOrdersListAction';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#001529',
    color: theme.palette.common.white,
    wordWrap: 'break-word',
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


function ReceivedOrdersList() {
          const dispatchdata = useDispatch();
          useEffect(() => {
              dispatchdata(receivedOrderListAction())
          },[])
          const selectdata = useSelector(state => state);
           console.log(selectdata.recOrderListRedux, 'htb recOrderlistRedux Data')

          const navigate = useNavigate();
          function onClickToReceivedAddForm(){
              navigate('/receivedordersform')
          }
          function onClickToReceivedPage(){
            navigate('/receivedorderlistdetail')
          }
  return (
    <>
        <Dashboard>
        <div className='regUL-title'>
                <div><h6>Received Order List</h6></div>
                <div><Link onClick={onClickToReceivedAddForm} sx={{px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Add User</Link></div>
            </div>
            <TableContainer className='tablecontainer' >
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell> First Name</StyledTableCell>
                        <StyledTableCell >Last Name</StyledTableCell>
                        <StyledTableCell >Perfume Name</StyledTableCell>
                        <StyledTableCell >Price</StyledTableCell>
                        <StyledTableCell >Status</StyledTableCell>
                        <StyledTableCell >Delivery Address</StyledTableCell>
                        <StyledTableCell >Phone No</StyledTableCell>
                        <StyledTableCell >Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {selectdata?.recOrderListRedux?.tdload == true ?
                      <div>Loading...</div>:
                      selectdata?.recOrderListRedux?.payload?.map((row) => (
                        <StyledTableRow key={row?.name}>
                        <StyledTableCell component="th" scope="row">
                            {row?.name}
                        </StyledTableCell>
                        <StyledTableCell >{row?.username}</StyledTableCell>
                        <StyledTableCell >{row?.email}</StyledTableCell>
                        <StyledTableCell >{row?.price}</StyledTableCell>
                        <StyledTableCell >{row?.status}</StyledTableCell>
                        <StyledTableCell >{row?.addresscode}</StyledTableCell>
                        <StyledTableCell >{row?.pnumber}</StyledTableCell>
                        <StyledTableCell ><Stack direction="row" spacing={1}>
                                                <IconButton aria-label="delete">
                                                   <DeleteIcon />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="add to shopping cart">
                                                  <Link onClick={onClickToReceivedPage} sx={{fontSize: '12px', textDecoration: 'none'}} href="#">View</Link>
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

export default ReceivedOrdersList
