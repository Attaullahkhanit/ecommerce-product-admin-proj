import React from 'react'
import './NonAlcholicPerfumes.css';
import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { getFileSrcFromPublicFolderDetailpg } from '../../utils';


function NonAlcholicPerfumesDetail() {
  const navigate = useNavigate();
  function onClickBackToRegPage() {
    navigate('/nonalcholicperfumes')
  }
  return (
    <>
      <Dashboard>
        <Card sx={{ maxWidth: '95%', mt: '10px', ml: 'auto', mr: 'auto' }}>
          <Box sx={{ mt: '15px', ml: '10px' }}>
            <Link onClick={onClickBackToRegPage} sx={{ px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Back</Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardContent sx={{ width: '40%' }}>
              <img src={getFileSrcFromPublicFolderDetailpg("DetailMainImg.png")} sizes='' alt='' />
            </CardContent>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%" }}>
                <Box sx={{ mx: 2 }}><img src={getFileSrcFromPublicFolderDetailpg("Rectangle 102.png")} sizes='' alt='' /></Box>
                <Box sx={{ mx: 2 }}><img src={getFileSrcFromPublicFolderDetailpg("Rectangle 103.png")} sizes='' alt='' /></Box>
                <Box sx={{ mx: 2 }}><img src={getFileSrcFromPublicFolderDetailpg("Rectangle 104.png")} sizes='' alt='' /></Box>
              </Box>
              <Typography sx={{ fontWeight: 'bold' }} variant="h3" component="div">
                Chanel Perfume
              </Typography>
              <Typography gutterBottom variant="body3" color="text.secondary">
                SKU: Chanel123
              </Typography>
              <Typography sx={{ pt: 2 }} gutterTop variant="body1" component="div">
                Nishane hacivant perfume 20ML
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                Price: 200$
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica.species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Box>

        </Card>
      </Dashboard>
    </>
  )
}

export default NonAlcholicPerfumesDetail