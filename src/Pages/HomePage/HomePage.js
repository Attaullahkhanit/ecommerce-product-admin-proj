import React from 'react';
import './HomePage.css';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

// search and sign up
import { Select, Avatar, Card, Input, Button } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useNavigate, useNavigation } from "react-router-dom";
import Link from '@mui/material/Link';
import Dashboard from '../Dashboard/Dashboard';

const { Header, Content, Footer, Sider } = Layout;

function HomePage() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();


    //   search and sign up
    const userSignInStatus= localStorage.getItem("Save_User_SIgnIn_Status")
    const navigate = useNavigate()
    useEffect(()=>{
      // check is the user logedIn already if not send hime to signin page
          if(JSON.parse(userSignInStatus) !==true){
              navigate("/signup")
          }  
    },[])
    const [searchBarValue, setSearchBarValue] = useState()
    const [searchbarList, setSearchBarList] = useState()
    const [searchApiData, setSearchApiData] = useState()
    const provinceData = ['Account','SignIn', 'SignUp'];
    const cityData = ['SignIn', 'SignUp']
    const handleProvinceChange = (value) => {
        console.log(value)
      
      if(value == "SignIn"){
            navigate("/signin")
        }else if(value == "SignUp"){
            navigate("/signup")
        }
      };
  
    const { Search } = Input;
    

    const onSearch = (value) =>{
      const a= fetch(`https://v1.nocodeapi.com/atta/gr/IFCnaBwDjJwDcsef/search?q=${value}`);
      a.then((aaa)=>{
        console.log(aaa, 'a')
      })
    } 
 

        // api call

            const getBooksLibraryData = () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

                fetch(`https://v1.nocodeapi.com/atta/gr/IFCnaBwDjJwDcsef/search?q=${searchBarValue}`, requestOptions)
                .then(response =>  response.json())
                .then(result => setSearchBarList(result))
                .catch(error => console.log('error', error)); 
            }
            console.log(searchbarList, 'sapf')
            
        const searchfunction = (item) => {
        navigate("/detailpage", {state:item})
        // navigate(`/detailpage`, { state: {invoiceID: 33 }});
        }
        console.log(typeof userSignInStatus,"nnnnnnn")
        const logout=()=>{
            localStorage.removeItem("Save_User_SIgnIn_Status")
            navigate("/signin")
        }

        const navigatedata = useNavigation();
        function onClickLogOut(){
            navigatedata('/logout')
        }
  return (
    <>
      
       
        <Layout>
            
            {/* Header search and signup   */}
              <Card
                    className="site-card-border-less-wrapper card">
                    <div className='home-searchbar'>
                        {/* search bar  */}
                         <div className='home-search'>
                            <Search placeholder="input search text" enterButton="Search" onChange={(e)=> setSearchBarValue(e.target.value)} value={searchBarValue} size="large"  onSearch={getBooksLibraryData} />
                            {/* search result list  */}
                            <ul className='search-result'>
                                { searchbarList?.results?.slice(0,5).map((item)=>{
                                    console.log(item, 'yay')
                                    return (
                                    
                                    <li onClick={() => searchfunction(item)}>{item.title}</li>
                                    )
                                })               
                                }
                            </ul>
                            </div>

                    {/* avatar  */}
                    <div className='home-avatar'>
                        <Avatar size={35} icon={<UserOutlined />} />
                        <Select
                            className='homoe-select' 
                                style={{
                                width: 180,
                            }}
                                onChange={handleProvinceChange}
                                options={cityData.map((province) => ({
                                    label: province,
                                    value: province,
                                }))}
                        />
                    <div><Link onClick={onClickLogOut} sx={{px: 2, py: 1, background: '#2BBBAD', color: 'white', textDecoration: 'none', }} name="Add User">Add User</Link></div>
                    </div>
                </div>
            </Card>
            <Content
            style={{
                margin: '24px 16px 0',
            }}
            >
                
            <div
                style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                }}
            >
                content
            </div>
            </Content>
            <Footer
            style={{
                textAlign: 'center',
            }}
            >
            Registered with ISO ©2018 Created
            </Footer>
        </Layout> 
    
    </>
  )
}

export default HomePage
