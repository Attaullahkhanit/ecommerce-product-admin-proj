import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './AlcholicPerfumes.css';
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
import userimage from '../../Images/cutout.jpg';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { alcholicPerfumesAction } from '../../Redux/Actions/AlcholicPerfumesAction';
import { Box, Button } from '@mui/material';
import { getFileSrcFromPublicimg } from '../../utils';



const tableuserimage = userimage
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
  
  

function AlcholicPerfumes() {
        
        const navigate = useNavigate();
        function onClickAddForm(){
            navigate('/alcholicperfumeform')
        }
        function onClickToAlcholicDetail(){
          navigate('/alcholicperfumesdetail')
        }
        const dispatchdata = useDispatch();
        useEffect(()=> {
            dispatchdata(alcholicPerfumesAction());
        },[])
        const selectdata = useSelector(state => state);
        console.log(selectdata.alcholicPerfumesReducer, 'alcholicreduxdata')
  return (
    <>
        <Dashboard>
            <div className='regUL-title'>
                <div><h6>Alcholic Perfumes</h6></div>
                <Box sx={{p: 2}}>
                    <Button onClick={onClickAddForm} sx={{px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Add User</Button>
                </Box>
            </div>
            <TableContainer className='tablecontainer' >
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Perfume Name</StyledTableCell>
                        <StyledTableCell >Image</StyledTableCell>
                        <StyledTableCell >Price</StyledTableCell>
                        <StyledTableCell >Description</StyledTableCell>
                        <StyledTableCell >Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* {selectdata.alcholicPerfumesAction.payload} */}
                    {selectdata.alcholicPerfumesReducer.dtload == true ?
                    <div>Loading...</div>:
                      selectdata?.alcholicPerfumesReducer?.payload?.map((row) => (
                        <StyledTableRow key={row?.name}>
                        <StyledTableCell component="th" scope="row">
                            {row?.name}
                        </StyledTableCell>
                        <StyledTableCell ><img className=' ' style={{width: '50px', height: '50px'}} src={getFileSrcFromPublicimg("Ellipse 26.png")} alt="tableuserimage"/></StyledTableCell>
                        <StyledTableCell >{row?.price}343$</StyledTableCell>
                        <StyledTableCell >{row?.description}it was very good perfume</StyledTableCell>
                        <StyledTableCell > <Stack direction="row" spacing={1}>
                                                <IconButton aria-label="delete">
                                                   <DeleteIcon />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="add to shopping cart">
                                                  <Button onClick={()=>onClickToAlcholicDetail(row)} sx={{fontSize: '11px', textDecoration: 'none'}} to="#">View</Button>
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

export default AlcholicPerfumes
