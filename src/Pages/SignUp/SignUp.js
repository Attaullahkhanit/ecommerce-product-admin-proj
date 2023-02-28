import React , {useState} from 'react';
import { useNavigate } from "react-router-dom";
import  { Button, Checkbox, Form, Input, Card } from 'antd';
import './SignUp.css';
import Dashboard from '../Dashboard/Dashboard';

function SignUp() {
   const [name, setname]= useState()
   const [email, setEmail]= useState()
   const [password, setPassword]= useState()
   
   const onFinish = (values) => {
        console.log('Success:', values);
      };
      const navigate = useNavigate();

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    const signindt =  {name: name,
                       email:email,
                       pass: password}
    const signupbtclicked=()=>{
            localStorage.setItem("userSignup",JSON.stringify(signindt))
            navigate('/signin')
            alert("Submitted Successfully")
    }
    
     
  return (
    <>
    <Dashboard>
      <h1 className='heading-1'>Sign Up</h1>
     <Card
     hoverable 
     style={{
      minWidth: 100,
      minHeight: 450,
    }}
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
        value={name}
        onChange ={(e)=> setname(e.target.value)}
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
        label="User Email"
        value={email}
        onChange ={(e)=> setEmail(e.target.value)}
        placeholder="Enter Your Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        value={password}
        onChange ={(e)=> setPassword(e.target.value)}
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
        label="Confirm Password"
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please Confirm your password!',
          },
          ({getFieldValue}) => ({
            validator(_, value){
              if(!value || getFieldValue('password') === value){
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two password that entered do not match!'));
            },
          }),
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
        <Checkbox>Creating an account means you’re okay with our Terms of Service, Privacy Policy.</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 3,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={signupbtclicked}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Dashboard>
    </>
  )
}

export default SignUp
