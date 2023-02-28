import React from 'react'
import './ReceivedOrdersList.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { Card, CardContent, Link, } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


function ReceivedOrdersListForm() {
        const navigate = useNavigate();
        function onClickBackToAddForm(){
            navigate('/nonalcholicperfumes')
        }
  return (
    <>
        <Dashboard>
        <Card sx={{ maxWidth: '70%', marginTop: '10px', marginLeft: 'auto', marginRight:'auto' }}>
            <CardContent sx={{textAlign: 'center'}}>
                <Box sx={{justifyContent: 'end', textAlign: 'right'}}>
                    <Link onClick={onClickBackToAddForm} sx={{px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Back</Link>
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, textAlign: 'center', width: '60%' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                    <TextField
                        id="outlined-password-input"
                        label="First Name"
                        type="name"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Last Name"
                        type="name"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Perfume Name"
                        type="name"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Price"
                        type="name"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Status"
                        type="name"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Deivery Address"
                        type="name"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Phone No"
                        type="name"
                    />
                        <br/>
                      <Button sx={{width: "30ch", my:3}} variant="contained" endIcon={<SendIcon />}>
                        Submit
                      </Button>
                    </div>
                    </Box>
                </CardContent>
            </Card>
            </Dashboard>
    </>
  )
}

export default ReceivedOrdersListForm