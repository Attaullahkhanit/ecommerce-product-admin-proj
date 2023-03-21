import React from 'react';
import './RegUsersList.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Link } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));

function RegUsersListForm() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const regFormObjData = {
        name: name,
        email: email,
        phoneNo: phone,
        price: price,
        description: description,
    }
    console.log(regFormObjData, 'RegFormObj Data')

    function onClickSubmitBackRegUsersPage() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            name: name,
            email: email,
            phoneNo: phone,
            price: price,
            description: description,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://backend-apis.pasha.org.uk/allusers", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result, 'Reg User List Data')
                navigate('/alcholicperfumes')
            })
            .catch(error => console.log('error', error));
    }

    const navigate = useNavigate();

    function onClickBackToAddForm() {
        navigate('/')
    }

    return (
        <>
            <Suspense fallback={<div><Box sx={{ width: '100%' }}><LinearProgress /></Box></div>}>
                <Dashboard>
                    <Card sx={{ maxWidth: '70%', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Box sx={{ p: 2 }}>
                            <Button onClick={onClickBackToAddForm} sx={{ px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Back</Button>
                        </Box>
                        <CardContent sx={{ textAlign: 'center' }}>
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
                                        label="Name"
                                        type="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Email"
                                        type="name"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Phone No"
                                        type="phone no"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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
                                    <br />
                                    <Button onClick={onClickSubmitBackRegUsersPage} sx={{ width: "30ch", my: 3 }} variant="contained" endIcon={<SendIcon />}>
                                        Submit
                                    </Button>
                                </div>
                            </Box>
                        </CardContent>
                    </Card>
                </Dashboard>
            </Suspense>
        </>
    )
}

export default RegUsersListForm
