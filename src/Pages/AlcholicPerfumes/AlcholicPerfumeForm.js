import React from 'react';
import './AlcholicPerfumes.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Link, } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));

const BaseUrl = process.env.REACT_APP_BASE_URL

function AlcholicPerfumeForm() {

  const [firstName, setFirstName] = useState();
  const [imgsrc, setImgSrc] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();
  const [discountPrice, setDiscountPrice] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // image uploading POST API function 
  // useEffect(() => {
  //   setImgUploaded(imgUpload)
  // },[])
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


  // submit form with POST api 
  function onClickSubmitBackToAddForm() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: firstName,
      price: price,
      quantity: quantity,
      description: description,
      imagePath: imgsrc,
      discountPrice: discountPrice
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("${BaseUrl}/alcohlic-perfume", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result, 'alcholic form data submit result')
        navigate('/alcholicperfumes')
        alert(result.message, 'data successfully submited')
      }
        // console.log(result, 'Alcholic Data');

      )
      .catch(error => console.log('error', error));
  }

  // go back 
  const onClickBack = () => {
    navigate('/alcholicperfumes')
  }

  return (
    <>
      <Suspense fallback={<div><Box sx={{ width: '100%' }}><LinearProgress /></Box></div>}>
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

export default AlcholicPerfumeForm
