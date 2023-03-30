import React from 'react';
import './AlcholicPerfumes.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card, CardContent, Link, } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));
const baseUrl = process.env.REACT_APP_BASEURL;

function AlcholicPerfumesUpdate() {
  const locationData = useLocation();

  console.log(locationData.state, 'alcholicData for Updatpage')

  const [firstName, setFirstName] = useState(locationData?.state?.name);
  const [imgsrc, setImgSrc] = useState("");
  const [price, setPrice] = useState(locationData?.state?.price);
  const [discountPrice, setDiscountPrice] = useState(locationData?.state?.discountPrice);
  const [quantity, setQuantity] = useState(locationData?.state?.quantity);
  const [description, setDescription] = useState(locationData?.state?.description);



  const [isLoading, setIsLoading] = useState(false)

  //   Update Button Put Api
  const imgUpload = (e) => {
    setIsLoading(true)
    const file = e.target.files[0]
    const formdata = new FormData()
    formdata.append('images', file)
    fetch('https://backend-apis.pasha.org.uk/images-upload', {
      method: "post",
      body: formdata
    })
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false)
        setImgSrc(res.imgePath)
      })
  }
  const onClickUpdateBackToAddForm = () => {
    console.log({
      name: firstName,
      imagePath: imgsrc,
      price: price,
      description: description,
      discountPrice: discountPrice,
    }, 'iiiiiiiiiiiiiiiiiiiiii')
    var requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: firstName,
        imagePath: imgsrc,
        price: price,
        discountPrice: discountPrice,
        quantity: quantity,
        description: description,

      }),
    };

    fetch(`${baseUrl}/update-alcohlic-perfume/${locationData?.state?._id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result, 'updated result')
        navigate('/alcholicperfumes')
      }
      )
      .catch(error => console.log('error', error));

  }
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate('/alcholicperfumes')
  }

  //const alcholicPerfumesRecord = locationData.state ;
  // image uploading function 





  return (
    <>
      <Suspense fallback={<div><Box sx={{ width: '60%', textAlign: 'center', ml: 'auto', mr: 'auto' }}><LinearProgress /></Box></div>}>
        <Dashboard>
          <Card sx={{ maxWidth: '70%', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Box sx={{ p: 2 }}>
              <Button onClick={onClickBack} sx={{ px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Back</Button>
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
                    id="outlined-basic"
                    variant='outlined'
                    label="Product Name"
                    type="name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="current-password"
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
                    id="outlined-password-input"
                    label="Discount Price"
                    type="number"
                    value={discountPrice}
                    onChange={(e) => setDiscountPrice(e.target.value)}
                  />
                  <TextField
                    id="outlined-password-input"
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
                  <Button onClick={onClickUpdateBackToAddForm} sx={{ width: "30ch", my: 3 }} variant="contained" endIcon={<SendIcon />}>
                    Update
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

export default AlcholicPerfumesUpdate
