import React from 'react'
import './AlcholicPerfumes.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { Card, CardContent, Link, } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


function AlcholicPerfumeForm() {
    const navigate = useNavigate();
    function onClickBackToAddForm(){
        navigate('/alcholicperfumes')
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
                        autoComplete="current-password"
                    />

                    <TextField
                        name='upload-photo'
                        type='file'
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Price"
                        type="textarea"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Description"
                        type="textarea"
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

export default AlcholicPerfumeForm