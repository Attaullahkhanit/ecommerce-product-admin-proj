import React from 'react'
import './NonAlcholicPerfumes.css';
import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function NonAlcholicPerfumesDetail() {
          const navigate = useNavigate();
          function onClickBackToRegPage(){
              navigate('/nonalcholicperfumes')
          }
  return (
    <>
       <Dashboard>
          <Card sx={{ display: 'flex', flexDirection: 'row', maxWidth: '95%', marginTop: '10px', marginLeft: 'auto', marginRight:'auto' }}>
          
          <CardContent sx={{width: '40ch'}}>
            <img src='https://shopznowpk.com/wp-content/uploads/2021/10/Lomani-Do-It-Body-Spray-For-Men-200-ml.jpeg' sizes='' alt=''/>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Frozen
            </Typography>
            <Box sx={{display: 'flex', flexDirection:'row'}}>
              <Typography sx={{ml: 'auto'}} gutterBottom variant="h6" component="div">
                $ 384
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          
            <Box sx={{textAlign: 'right', marginLeft: 'auto', marginTop: '15px', mr: '10px'}}>
                <Link onClick={onClickBackToRegPage} sx={{px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Back</Link>
            </Box>
          </Card>
        </Dashboard>
    </>
  )
}

export default NonAlcholicPerfumesDetail