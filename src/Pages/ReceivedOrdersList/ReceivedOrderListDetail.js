import React from 'react'
import './ReceivedOrdersList.css';
import { Box, Button, Card, CardContent, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';


const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));

function ReceivedOrderListDetail() {
  const navigate = useNavigate();
  function onClickBackToRegPage() {
    navigate('/receivedorderslist')
  }
  return (
    <>
      <Suspense fallback={<div><Box sx={{ width: '100%' }}><LinearProgress /></Box></div>}>
        <Dashboard>
          <Card sx={{ maxWidth: '95%', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Box sx={{ mt: '15px', ml: '10px' }}>
              <Button onClick={onClickBackToRegPage} sx={{ px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Back</Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', p: 3 }}>
              <CardContent sx={{ width: '40%' }}>
                <img src='https://shopznowpk.com/wp-content/uploads/2021/10/Lomani-Do-It-Body-Spray-For-Men-200-ml.jpeg' sizes='' alt='' />
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  Frozen
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography gutterBottom variant="h6" component="div">
                    DO IT
                  </Typography>
                  <Typography sx={{ ml: 'auto' }} gutterBottom variant="h6" component="div">
                    $ 384
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h6" component="div">
                  Received
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <LocationOnIcon sx={{ mr: 1 }} /> Main Market, Township, City, Texas
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <CallIcon sx={{ mr: 1 }} /> 051-46463-980
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Dashboard>
      </Suspense>
    </>
  )
}

export default ReceivedOrderListDetail