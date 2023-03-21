import React from 'react'
import './ReceivedOrdersList.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Link, } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';


const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));

function ReceivedOrdersListForm() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [perfumeName, setPerfumeName] = useState();
    const [price, setPrice] = useState();
    const [status, setStatus] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();

    const receivedOrderFormObjData = {
        fname: firstName,
        lname: lastName,
        pname: perfumeName,
        price: price,
        status: status,
        address: address,
        phone: phone
    }
    console.log(receivedOrderFormObjData, 'RecivedFormObjData')

    function onClickSubmitBackRecOrderPage() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            fname: firstName,
            lname: lastName,
            pname: perfumeName,
            price: price,
            status: status,
            address: address,
            phone: phone,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/todos/1", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result, 'Reg User List Data');
                // navigate('/alcholicperfumes')
            })
            .catch(error => console.log('error', error));
    }

    const navigate = useNavigate();
    function onClickBackToAddForm() {
        navigate('/nonalcholicperfumes')
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
                                        label="First Name"
                                        type="name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Last Name"
                                        type="name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Perfume Name"
                                        type="name"
                                        value={perfumeName}
                                        onChange={(e) => setPerfumeName(e.target.value)}
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
                                        label="Status"
                                        type="name"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Deivery Address"
                                        type="name"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Phone No"
                                        type="name"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <br />
                                    <Button onClick={onClickSubmitBackRecOrderPage} sx={{ width: "30ch", my: 3 }} variant="contained" endIcon={<SendIcon />}>
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

export default ReceivedOrdersListForm