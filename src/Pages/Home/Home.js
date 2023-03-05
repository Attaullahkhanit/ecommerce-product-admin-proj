import React from 'react';
import './Home.css';
import { UserOutlined, HeaderSearch, ConsoleSqlOutlined } from '@ant-design/icons';
import { Select, Avatar, Card, Input, Button } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import FormItemLabel from 'antd/es/form/FormItemLabel';
import Dashboard from '../Dashboard/Dashboard';


function Home() {
  const userSignInStatus = localStorage.getItem("Save_User_SIgnIn_Status")
  const navigate = useNavigate()
  useEffect(() => {
    // check is the user logedIn already if not send hime to signin page
    if (JSON.parse(userSignInStatus) !== true) {
      navigate("/signup")
    }
  }, [])
  const [searchBarValue, setSearchBarValue] = useState()
  const [searchbarList, setSearchBarList] = useState()
  const [searchApiData, setSearchApiData] = useState()
  const provinceData = ['Account', 'SignIn', 'SignUp'];
  const cityData = ['SignIn', 'SignUp']
  const handleProvinceChange = (value) => {
    console.log(value)

    if (value == "SignIn") {
      navigate("/signin")
    } else if (value == "SignUp") {
      navigate("/signup")
    }
  };

  const { Search } = Input;


  const onSearch = (value) => {
    const a = fetch(`https://v1.nocodeapi.com/atta/gr/IFCnaBwDjJwDcsef/search?q=${value}`);
    a.then((aaa) => {
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
      .then(response => response.json())
      .then(result => setSearchBarList(result))
      .catch(error => console.log('error', error));
  }
  console.log(searchbarList, 'sapf')

  const searchfunction = (item) => {
    navigate("/detailpage", { state: item })
    // navigate(`/detailpage`, { state: {invoiceID: 33 }});
  }
  console.log(typeof userSignInStatus, "nnnnnnn")
  const logout = () => {
    localStorage.removeItem("Save_User_SIgnIn_Status")
    navigate("/signin")
  }
  return (
    <>

      <Card
        className="site-card-border-less-wrapper card">
        <div className='home-searchbar'>
          {/* search bar  */}
          <div className='home-search'>
            <Search placeholder="input search text" enterButton="Search" onChange={(e) => setSearchBarValue(e.target.value)} value={searchBarValue} size="large" onSearch={getBooksLibraryData} />
            {/* search result list  */}
            <ul className='search-result'>
              {searchbarList?.results?.slice(0, 5).map((item) => {
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
            <Button onClick={logout}>Logoutfsdf</Button>
          </div>
        </div>
      </Card>

    </>
  )
}

export default Home


