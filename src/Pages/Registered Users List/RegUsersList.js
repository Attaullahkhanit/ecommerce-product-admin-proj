import React, { useEffect, useState } from 'react';
import './RegUsersList.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { regUsersListAction } from '../../Redux/Actions/RegUsersListAction';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Suspense } from 'react';
import PreviewIcon from '@mui/icons-material/Preview';
import { Edit } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';


const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));

const BaseUrl = process.env.REACT_APP_BASE_URL

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



function RegUsersList() {

  const navigate = useNavigate();
  function onClickAddForm() {
    navigate('/reguserslistform')
  }
  function onClickViewDetail(objrow) {
    //  objrow 
    console.log("sdfsdfsdf")
    navigate(
      '/reguserslistdetail',
      { state: objrow },
    )
  }

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const dispatchData = useDispatch();
  useEffect(() => {
    dispatchData(regUsersListAction())
  }, [])

  const selectData = useSelector(state => state)
  console.log(selectData.regUsersListReducer, 'redux Dataaaaaa')

  const regUserApiData = selectData.regUsersListReducer;

  const onClickDeletRecord = (listrecord) => {
    console.log(listrecord, "deletedddd")
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    fetch(`${BaseUrl}/delete-user/${listrecord._id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        alert(result?.message)
        console.log(result)
      }
      )
      .catch(error => console.log('error', error));

  }
  const onClickalcholicperfumesupdate = () => {
    navigate('/reguserslistupdate')
  }

  return (
    <>
      <Suspense fallback={<div><Box sx={{ width: '100%' }}><LinearProgress /></Box></div>}>
        <Dashboard>
          <div className='regUL-title'>
            <div><h6>Register Users List</h6></div>
            <Box sx={{ p: 2 }}>
              <Button onClick={onClickAddForm} sx={{ px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Add User</Button>
            </Box>
          </div>
          {/* , */}
          <TableContainer className='tablecontainer'>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell value={firstName} onChange={(e) => setFirstName(e.target.value)}>Name</StyledTableCell>
                  <StyledTableCell value={lastName} onChange={(e) => setLastName(e.target.value)}>Email</StyledTableCell>
                  <StyledTableCell value={email} onChange={(e) => setEmail(e.target.value)}>Phone No</StyledTableCell>
                  <StyledTableCell value={phone} onChange={(e) => setPhone(e.target.value)}>Password</StyledTableCell>
                  <StyledTableCell value={phone} onChange={(e) => setPhone(e.target.value)}>__V</StyledTableCell>
                  <StyledTableCell >Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {regUserApiData?.dtload == true ?
                  <div><Box sx={{ width: '100%' }}><LinearProgress /></Box></div> :
                  regUserApiData?.payload?.map((row) => (
                    <StyledTableRow key={row?.name}>
                      <StyledTableCell component="th" scope="row">
                        {row?.name} Fredrik
                      </StyledTableCell>
                      <StyledTableCell >{row?.email}</StyledTableCell>
                      <StyledTableCell >{row?.mobileNumber}</StyledTableCell>
                      <StyledTableCell >{row?.password}</StyledTableCell>
                      <StyledTableCell >{row?.__v}</StyledTableCell>
                      <StyledTableCell > <Stack direction="row" spacing={1}>
                        <Button variant='outlined' onClick={() => onClickDeletRecord(row)} variant="outlined">
                          <DeleteIcon />
                        </Button>
                        <Button onClick={onClickalcholicperfumesupdate} aria-label="update" variant="outlined">
                          <Edit />
                        </Button>
                        <Button onClick={() => onClickViewDetail(row)} variant="outlined">
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

export default RegUsersList
