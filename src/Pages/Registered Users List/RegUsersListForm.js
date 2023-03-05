import React from 'react';
import './RegUsersList.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { Card, CardContent, Link } from '@mui/material';
import { textAlign } from '@mui/system';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

function RegUsersListForm() {
    const[pname, setPName] = useState();
    const[sku, setSku] = useState();
    const[specification, setSpecification] = useState();
    const[price, setPrice] = useState();
    const[description, setDescription] = useState();

    const formObjData = {
                            perfumeName: pname,
                            sku: sku,
                            specification: specification,
                            price: price,
                            description: description,
                        }
    const regUsersData = () => {
        localStorage.setItem('regformdata',JSON.stringify(formObjData))
        navigate('/')
        alert("Submitted Successfully")
        }
    console.log(regUsersData, 'regUsersData')
    console.log(formObjData, 'formObj')
    const navigate = useNavigate();
    function onClickBackToAddForm(){
        navigate('/')
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
                        label="Perfume Name"
                        type="name"
                        value={pname}
                        onChange={(e) => setPName(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="SKU No"
                        type="name"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Specification"
                        type="name"
                        value={specification}
                        onChange={(e) => setSpecification(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Price"
                        type="name"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Description"
                        type="name"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br/>
                      <Button onClick={regUsersData} sx={{width: "30ch", my:3}} variant="contained" endIcon={<SendIcon />}>
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

export default RegUsersListForm
