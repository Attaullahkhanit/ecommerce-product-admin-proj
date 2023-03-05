import React from 'react'
import './NonAlcholicPerfumes.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { Card, CardContent, Link, } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';


function NonAlcholicPerfumesForm() {

            const [firstName, setFirstName] = useState();
            const [imgsrc, setImgSrc] = useState();
            const [price, setPrice] = useState();
            const [description, setDescription] = useState();

            const nonalcholicformObjData = {
                                            fname: firstName,
                                            imgsrc: imgsrc,
                                            price: price,
                                            description: description
                                        }
            console.log(nonalcholicformObjData, 'nonalcholicformdata')
          const navigate = useNavigate();
          function onClickBackToAddForm(){
              navigate('/nonalcholicperfumes')
          }
  return (
    <>
        <Dashboard>
        <Card sx={{ maxWidth: '70%', marginTop: '10px', marginLeft: 'auto', marginRight:'auto' }}>
                <Box sx={{p: 2}}>
                    <Button onClick={onClickBackToAddForm} sx={{px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Back</Button>
                </Box>
            <CardContent sx={{textAlign: 'center'}}>
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
                        value = {firstName}
                        onChange = {(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        name='upload-photo'
                        type='file'
                        value={imgsrc}
                        onChange = {(e) => setImgSrc(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Price"
                        type="textarea"
                        value={price}
                        onChange = {(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Description"
                        type="textarea"
                        value={description}
                        onChange = {(e) => setDescription(e.target.value)}
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

export default NonAlcholicPerfumesForm