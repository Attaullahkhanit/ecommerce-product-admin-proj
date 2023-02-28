import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Typography} from 'antd';
import './DetailPage.css';
import Dashboard from '../Dashboard/Dashboard';
// import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const { Title, Text } = Typography;

function DetailPage() {
    const userSignInStatus= localStorage.getItem("Save_User_SIgnIn_Status")
    const navigate = useNavigate()
    useEffect(()=>{
      // check is the user logedIn already if not send hime to signin page
          if(JSON.parse(userSignInStatus) !==true){
              navigate("/signup")
          }  
    },[])
    const homePageStateData=useLocation()
    const gotInsideStateData= homePageStateData?.state
    console.log(gotInsideStateData, 'aaaaaa')
      return ( 
       <Dashboard>
          <h1 className='detailpage-heading1'> Detail Page</h1>
             <Card
                  hoverable
                  style={{
                    minWidth: 100,
                    minHeight: 240,
                  }}
                  className="detailpage-card"
                  cover= {<img alt="example" src={gotInsideStateData.image_url} />}
                >
                  
                  <div className='detailpage-card-title-col'>
                  <div>
                      <Text><Text strong>Type: </Text> {gotInsideStateData.type}</Text>
                    </div>
                    <div>
                      <Text><Text strong>Book Title: </Text> {gotInsideStateData.title}</Text>
                    </div>
                    <div>
                      <Text><Text strong>Published On: </Text><span>{gotInsideStateData.original_publication_day}</span><span>{gotInsideStateData.original_publication_month}</span><span>{gotInsideStateData.original_publication_year}</span></Text>
                    </div>
                    <div>
                      <Text><Text strong>Book Id: </Text> {gotInsideStateData.obj_id}</Text>
                    </div>
                    <div>
                      <Text><Text strong>Books Reviews: </Text><span>{gotInsideStateData.text_reviews_count}</span></Text>
                    </div>
                    <div className='detailpage-card-author'>
                      <div>
                      <img src={gotInsideStateData.small_image_url} alt="profile-img"/>
                      </div>
                      <div className='detailpage-card-author1'>
                      <Text><Text strong> Author: </Text> {gotInsideStateData.author.name}</Text>
                      <Text><Text strong>Author Id: </Text> {gotInsideStateData.author.id}</Text>
                      </div>
                    </div>
                    <div>
                      <Text><Text strong>Total Ratings: </Text> {gotInsideStateData.ratings_count}</Text>
                    </div>
                  </div>
                </Card>

          </Dashboard> 
   
  )
}

export default DetailPage
