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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import userimage from '../../Images/cutout.jpg';
import Btnuser from '../../Component/Btnuser';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

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
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yot', tableuserimage, 234, "expensive"),
    createData('florence', tableuserimage, 234, 'very good enough'),
    createData('Gorge', tableuserimage, 2956, 'you can easily buy'),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];
  

function AlcholicPerfumes() {

        const navigate = useNavigate();
        function onClickAddForm(){
            navigate('/alcholicperfumeform')
        }
        function onClickToAlcholicDetail(){
          navigate('/alcholicperfumesdetail')
        }

  return (
    <>
        <Dashboard>
            <div className='regUL-title'>
                <div><h6>Alcholic Perfumes</h6></div>
                <div><Link onClick={onClickAddForm} sx={{px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Add User</Link></div>
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
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell ><img className=' ' style={{width: '50px', height: '50px'}} src={row.calories.tableuserimage} alt="tableuserimage"/></StyledTableCell>
                        <StyledTableCell >{row.fat}</StyledTableCell>
                        <StyledTableCell >{row.carbs}</StyledTableCell>
                        <StyledTableCell > <Stack direction="row" spacing={1}>
                                                <IconButton aria-label="delete">
                                                   <DeleteIcon />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="add to shopping cart">
                                                  <Link onClick={onClickToAlcholicDetail} sx={{fontSize: '12px', textDecoration: 'none'}} href="#">View</Link>
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
