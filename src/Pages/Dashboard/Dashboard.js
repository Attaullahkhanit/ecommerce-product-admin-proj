import React, {useState} from 'react';
import './Dashboard.css';
import Title from 'antd/lib/typography/Title';
import { useNavigate, useNavigation } from "react-router-dom";
import Link from '@mui/material/Link';
import {
      OrderedListOutlined,
      DesktopOutlined,
      FileOutlined,
      PieChartOutlined,
      FilterOutlined,
      ExperimentOutlined,
      TeamOutlined,
      UserOutlined,
    } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu, theme, Input,  Avatar, Button  } from 'antd';
import Btnuser from '../../Component/Btnuser';
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }


    const { Search } = Input;

function Dashboard(props) {
       const history= useNavigate()
       const items = [
        getItem(<button onClick={()=>history('/')}>Register Users List</button>, '1', <OrderedListOutlined />),
        getItem(<button onClick={()=>history('/alcholicperfumes')}>Alcoholic</button>, '2', <FilterOutlined />),
        getItem(<button onClick={()=>history('/nonalcholicperfumes')}> Non-alcoholic</button>, '3', <FilterOutlined />),
        getItem(<button onClick={()=>history('/receivedorderslist')}>Received Orders List</button>, '4', <OrderedListOutlined />),

        
      ];
      const [collapsed, setCollapsed] = useState(false);
      const {
        token: { colorBgContainer },
      } = theme.useToken();

      
  return (
    <>
      <Layout
      style={{
        minHeight: '100vh',
      }}
      >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Title style={{color: 'white',
          textAlign:'center',
          padding: 5,
          }} level={3}>Dashboard</Title>
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          
          style={{
            display: 'flex',
            flex: 'row',
            padding: 0,
            background: "#001529",
            minHeight: 60,
          }}
        >
        <Content style={{
            marginLeft: 'auto'
        }}>
          <div style={{float: 'right', marginRight: '20px'}}>
            <Avatar style={{background: 'gray'}} size={35} icon={<UserOutlined />} />
            <Link sx={{px: 2, py: 1, ml: 2, background: '#2BBBAD', borderRadius: '3px', color: 'white', textDecoration: 'none', }} name="Add User">Log Out</Link>
          </div>
                    
        </Content>
          
        
        </Header>
        
        <Content
          style={{
            margin: '0 0px',
          }}
        >
          {props.children}
          {/* <div
            style={{
              padding: 24,
              minHeight: 560,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div> */}
        </Content>
      </Layout>
    </Layout>
    </>
  )
}

export default Dashboard
