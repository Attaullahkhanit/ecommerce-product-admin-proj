import React, { Suspense } from 'react';
// import Dashboard from '../Dashboard/Dashboard';
import './AlcholicPerfumes.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import userimage from '../../Images/cutout.jpg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { alcholicPerfumesAction } from '../../Redux/Actions/AlcholicPerfumesAction';
import { Box, Button } from '@mui/material';
import { Edit, ViewAgenda } from '@mui/icons-material';
import PreviewIcon from '@mui/icons-material/Preview';
import LinearProgress from '@mui/material/LinearProgress';


const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));

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



function AlcholicPerfumes() {

  const navigate = useNavigate();
  function onClickAddForm() {
    navigate('/alcholicperfumeform')
  }
  function onClickToAlcholicDetail(objrow) {
    navigate('/alcholicperfumesdetail',
      { state: objrow }
    )
  }
  function onClickalcholicperfumesupdate(objrow) {
    navigate('/alcholicperfumesupdate',
      { state: objrow })
  }
  const dispatchdata = useDispatch();
  useEffect(() => {
    dispatchdata(alcholicPerfumesAction());
  }, [])
  const selectdata = useSelector(state => state);
  console.log(selectdata.alcholicPerfumesReducer, 'alcholicreduxdata')
  // Delete Record

  const onClickDeletRecord = (listrecord) => {
    console.log(listrecord, "deletedddd")
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch(`${BaseUrl}/delete-alcohlicPerfume/${listrecord._id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        //result?.filter((item) => item !== listrecord._id);
        //alert(result?.message)
        console.log(result, 'myyyyyyyy')

      }
      )
      .catch(error => console.log('error', error));

  }


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard>
          <div className='regUL-title'>
            <div><h6>Alcholic Perfumes</h6></div>
            <Box sx={{ p: 2 }}>
              <Button onClick={onClickAddForm} sx={{ px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Add Product</Button>
            </Box>
          </div>
          <TableContainer className='tablecontainer' >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Perfume Name</StyledTableCell>
                  <StyledTableCell>Image</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                  <StyledTableCell>Discount Price</StyledTableCell>
                  <StyledTableCell>Quantity</StyledTableCell>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {selectdata.alcholicPerfumesAction.payload} */}
                {selectdata.alcholicPerfumesReducer.dtload == true ?
                  <div><Box sx={{ width: '100%' }}><LinearProgress /></Box></div> :
                  selectdata?.alcholicPerfumesReducer?.payload?.map((row) => (
                    <StyledTableRow key={row?.name}>
                      <StyledTableCell component="th" scope="row">
                        {row?.name}
                      </StyledTableCell>
                      <StyledTableCell ><img className=' ' style={{ width: '50px', height: '50px' }} src={row?.imagePath} alt="tableuserimage" /></StyledTableCell>
                      <StyledTableCell >{row?.price}</StyledTableCell>
                      <StyledTableCell >{row?.discountPrice}</StyledTableCell>
                      <StyledTableCell >{row?.quantity}</StyledTableCell>
                      <StyledTableCell >{row?.description}</StyledTableCell>
                      <StyledTableCell > <Stack direction="row" spacing={1}>
                        <Button onClick={() => onClickDeletRecord(row)} aria-label="delete" variant="outlined">
                          <DeleteIcon />
                        </Button>
                        <Button onClick={() => onClickalcholicperfumesupdate(row)} aria-label="update" variant="outlined">
                          <Edit />
                        </Button>
                        <Button onClick={() => onClickToAlcholicDetail(row)} variant="outlined">
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

export default AlcholicPerfumes
