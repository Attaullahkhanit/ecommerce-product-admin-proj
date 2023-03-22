import { Box, Button, Card, CardContent, Link, Typography } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './RegUsersList.css';
import { getFileSrcFromPublicFolderDetailpg } from '../../utils';
import { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));

//const BaseUrl = process.env.REACT_APP_BASE_URL

function RegUsersListDetail() {
  const navigate = useNavigate();
  const uselocatdata = useLocation()

  // const [uselocat, setuseloct] = useState()
  // useEffect(() => {
  //   setuseloct(uselocatdata);

  // })
  // console.log(uselocat, 'myuselocatdatannnnn')

  console.log(uselocatdata.state, 'myuselocatdatannnnn')

  function onClickBackToRegPage() {
    navigate('/')
  }


  return (
    <>
      <Suspense fallback={<div><Box sx={{ width: '100%' }}><LinearProgress /></Box></div>}>
        <Dashboard>
          <Card sx={{ maxWidth: '95%', mt: '10px', ml: 'auto', mr: 'auto' }}>
            <Box sx={{ mt: '15px', ml: '10px' }}>
              <Button onClick={onClickBackToRegPage} sx={{ px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Back</Button>
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
                <h4>{uselocatdata?.name}</h4>
                <Typography sx={{ fontWeight: 'bold' }} variant="h3" component="div">
                  {uselocatdata?.state?.name}
                </Typography>
                <Typography gutterBottom variant="body3" color="text.secondary">
                  SKU: Chanel123
                </Typography>
                <Typography sx={{ pt: 2 }} variant="body1" component="div">
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
      </Suspense>
    </>
  )
}

export default RegUsersListDetail
