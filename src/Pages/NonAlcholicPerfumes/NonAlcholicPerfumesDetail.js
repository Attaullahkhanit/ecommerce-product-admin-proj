import React from 'react'
import './NonAlcholicPerfumes.css';
import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFileSrcFromPublicFolderDetailpg } from '../../utils';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));
//const baseUrl = process.env.REACT_APP_BASEURL;


function NonAlcholicPerfumesDetail() {
  const navigate = useNavigate();
  function onClickBackToRegPage() {
    navigate('/nonalcholicperfumes')
  }
  const uselocatData = useLocation();
  console.log(uselocatData.state, 'nonalcholic page data');
  const nonalcholicData = uselocatData.state
  return (
    <>
      <Suspense fallback={<div><Box sx={{ width: '60%', textAlign: 'center', ml: 'auto', mr: 'auto' }}><LinearProgress /></Box></div>}>
        <Dashboard>
          <Card sx={{ maxWidth: '95%', mt: '10px', ml: 'auto', mr: 'auto' }}>
            <Box sx={{ mt: '15px', ml: '10px' }}>
              <Link onClick={onClickBackToRegPage} sx={{ px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Back</Link>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <CardContent sx={{ width: '40%' }}>
                <img src={nonalcholicData?.imagePath} sizes='' alt='' />
              </CardContent>
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%" }}>
                  <Box sx={{ mx: 2 }}><img src={getFileSrcFromPublicFolderDetailpg("Rectangle 102.png")} sizes='' alt='' /></Box>
                  <Box sx={{ mx: 2 }}><img src={getFileSrcFromPublicFolderDetailpg("Rectangle 103.png")} sizes='' alt='' /></Box>
                  <Box sx={{ mx: 2 }}><img src={getFileSrcFromPublicFolderDetailpg("Rectangle 104.png")} sizes='' alt='' /></Box>
                </Box>
                <Typography sx={{ fontWeight: 'bold' }} variant="h3" component="div">
                  {nonalcholicData?.name}
                </Typography>
                <Typography gutterBottom variant="body3" color="text.secondary">
                  SKU: Chanel123
                </Typography>
                <Typography sx={{ pt: 2 }} gutterTop variant="body1" component="div">
                  {nonalcholicData?.description}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  Price: {nonalcholicData?.price}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Box>

          </Card>
        </Dashboard>
      </Suspense>
    </>
  )
}

export default NonAlcholicPerfumesDetail
