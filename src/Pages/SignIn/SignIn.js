import React, { useState, useEffect, useDispatch, useSelector } from 'react';
import './SignIn.css';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';

function SignIn() {
  const [userName, setUserName] = useState('name')
  const [userPassword, setUserPassword] = useState('1234')
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const navigatehome = useNavigate()
  const getdataLocalhost = JSON.parse(localStorage.getItem("userSignup"))

  const signInHandler = async () => {
    await navigatehome("/")
    if (userName == getdataLocalhost.email && userPassword == getdataLocalhost.pass) {
      // save user sign In status for page authorization 
      await localStorage.setItem("Save_User_SIgnIn_Status", true)
      await navigatehome("/")
    } else {
      alert("please enter correct data")
    }
  };

  // Api Calling





  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const localdata = localStorage.getItem("userSignup")
  console.log(localdata, "signupdta in signin")
  const ssss = JSON.parse(localdata)




  // Redux Work
  // useEffect(()=>{

  // },[])


  return (
    <>

      <h1 className='heading-1'>Sign In</h1>
      <Card
        hoverable style={{ width: "35%", margin: "auto" }}
        className="site-card-border-less-wrapper card">
        <Form
          className=' form'
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            className='form-item1'
            label="Username"
            name="username"
            value="name"
            onChange={(e) => setUserName(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className='form-item1'
            label="Password"
            name="password"
            value="password"
            onChange={(e) => setUserPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item

            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 3,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 3,
              span: 16,
            }}
          >
            <Button className='ed-btn' type="primary" onClick={signInHandler} htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>

    </>
  )
}

export default SignIn
