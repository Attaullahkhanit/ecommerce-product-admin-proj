import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './RegUsersList.css';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CallIcon from '@mui/icons-material/Call';

function RegUsersListDetail() {
          const navigate = useNavigate();
          function onClickBackToRegPage(){
              navigate('/')
          }
  return (
    <>
        <Dashboard>
          <Card sx={{ display: 'flex', flexDirection: 'row', maxWidth: '95%', marginTop: '10px', marginLeft: 'auto', marginRight:'auto' }}>
          
          <CardContent sx={{width: '40ch'}}>
            <img src='https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600' sizes='' alt=''/>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Frozen
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <ForwardToInboxIcon/><Link sx={{textDecoration: 'none', px: 2}}>Frozen@gmail.com</Link>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <CallIcon sx={{mr:1}}/> 051-46463-980
            </Typography>
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

export default RegUsersListDetail