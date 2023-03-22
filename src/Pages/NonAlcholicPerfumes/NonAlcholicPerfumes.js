import React, { useEffect, useState } from 'react';
//import Dashboard from '../Dashboard/Dashboard';
import './NonAlcholicPerfumes.css';
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
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nonAlcholicPerfumesAction } from '../../Redux/Actions/NonAlcholicPerfumesAction';
import { Box, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import PreviewIcon from '@mui/icons-material/Preview';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';


const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'))

const BaseUrl = process.env.REACT_APP_BASE_URL


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
function NonAlcholicPerfumes() {

  const navigate = useNavigate();
  function onClickToAddForm() {
    navigate('/nonalcholicperfumesform')
  }
  function onClicknonalcholicperfumesupdate(objrow) {
    navigate('/nonalcholicperfumesupdate',
      { state: objrow })
  }
  function onClickToNonAlcholicDetail(objrow) {
    navigate('/nonalcholicperfumesdetail',
      { state: objrow })
  }
  const [delValue, setDelValue] = useState(false)
  const dispatchdata = useDispatch();
  useEffect(() => {
    dispatchdata(nonAlcholicPerfumesAction());
    console.log("resultttttt")
  }, [delValue])

  console.log(dispatchdata, 'nonAlcholicPerfumedata');
  const selectdata = useSelector(state => state);
  console.log(selectdata.nonAlcholicPerfumeReducer, 'nonalcholicDtReducers');

  // Delete Api

  const onClickDeletRecord = (listrecord) => {
    console.log(listrecord, "deletedddd")
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch(`${BaseUrl}/delete-noneAlcohlicPerfume/${listrecord._id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        alert(result?.message)
        console.log(result)
        setDelValue(result?.message)
      }
      )
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <Suspense fallback={<div><Box sx={{ width: '100%' }}><LinearProgress /></Box></div>}>
        <Dashboard>
          <div className='regUL-title'>
            <div><h6>Non Alcholic Perfumes</h6></div>
            <Box sx={{ p: 2 }}>
              <Button onClick={onClickToAddForm} sx={{ px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="A">Add Product</Button>
            </Box>
          </div>
          <TableContainer className='tablecontainer' >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell >Perfume Name</StyledTableCell>
                  <StyledTableCell >Image</StyledTableCell>
                  <StyledTableCell >Price</StyledTableCell>
                  <StyledTableCell >Discount Price</StyledTableCell>
                  <StyledTableCell >Quantity</StyledTableCell>
                  <StyledTableCell >Description</StyledTableCell>
                  <StyledTableCell >Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectdata.nonAlcholicPerfumeReducer.dtload == true ?
                  <div><Box sx={{ width: '100%', textAlign: 'center' }}><LinearProgress /></Box></div> :
                  selectdata?.nonAlcholicPerfumeReducer?.payload?.map((row, key) => (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {row?.name}
                      </StyledTableCell>
                      <StyledTableCell ><img className=' ' style={{ width: '50px', height: '50px' }} src={row?.imagePath} alt="tableuserimage" /></StyledTableCell>
                      <StyledTableCell >${row?.price} </StyledTableCell>
                      <StyledTableCell >${row?.discountPrice} </StyledTableCell>
                      <StyledTableCell >{row?.quantity} </StyledTableCell>
                      <StyledTableCell >{row?.description} </StyledTableCell>
                      <StyledTableCell >
                        <Stack direction="row" spacing={1}>
                          <Button onClick={() => onClickDeletRecord(row)} variant="outlined" >
                            <DeleteIcon />
                          </Button>
                          <Button onClick={() => onClicknonalcholicperfumesupdate(row)} variant="outlined">
                            <Edit />
                          </Button>
                          <Button onClick={() => onClickToNonAlcholicDetail(row)} variant="outlined">
                            <PreviewIcon />
                          </Button>
                        </Stack>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Dashboard>
      </Suspense>
    </>
  )
}

export default NonAlcholicPerfumes
