import React from 'react'
import './NonAlcholicPerfumes.css';
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
const baseUrl = process.env.REACT_APP_BASEURL;

function NonAlcholicPerfumesForm() {
    const [firstName, setFirstName] = useState();
    const [imgsrc, setImgSrc] = useState();
    const [price, setPrice] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [description, setDescription] = useState();

    const [isLoading, setIsLoading] = useState(false);

    // Image Uploading POST API
    const imgUpload = (e) => {
        setIsLoading(true)
        const file = e.target.files[0]
        const formdata = new FormData()
        formdata.append('images', file)
        fetch('${baseUrl}/images-upload', {
            method: "post",
            body: formdata
        })
            .then((res) => res.json())
            .then((res) => {
                setIsLoading(false)
                setImgSrc(res.imgePath)
            })
    }



    const nonalcholicformObjData = {
        fname: firstName,
        imgsrc: imgsrc,
        price: price,
        discountprice: discountPrice,
        quantity: quantity,
        description: description
    }
    console.log(nonalcholicformObjData, 'nonalcholicformdata')
    const navigate = useNavigate();

    // Post Api
    function onClickSubmitBackToAddForm() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            name: firstName,
            price: price,
            discountprice: discountPrice,
            quantity: quantity,
            description: description,
            imagePath: imgsrc
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("${baseUrl}/none-alcohlic-perfume", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result, 'Non alcholic Data...');
                navigate('/nonalcholicperfumes')
            })
            .catch(error => console.log('error', error));
    }

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
                                        autoComplete="current-password"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        variant='outlined'
                                        name='upload-photo'
                                        type='file'
                                        onChange={imgUpload}
                                    />
                                    {isLoading && <div><Box sx={{ width: '60%', textAlign: 'center', ml: 'auto', mr: 'auto' }}><LinearProgress /></Box></div>}
                                    <TextField
                                        id="outlined-number"
                                        label="Price"
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-number"
                                        label="Discount Price"
                                        type="number"
                                        value={discountPrice}
                                        onChange={(e) => setDiscountPrice(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-number"
                                        label="Quantity"
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Description"
                                        type="textarea"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <br />
                                    <Button onClick={onClickSubmitBackToAddForm} sx={{ width: "30ch", my: 3 }} variant="contained" endIcon={<SendIcon />}>
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

export default NonAlcholicPerfumesForm
