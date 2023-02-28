import './App.css';
import {DatePicker, Button} from 'antd';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import DetailPage from './Pages/DetailPage/DetailPage';
import { useEffect } from 'react';
import HomePage from './Pages/HomePage/HomePage';
import Dashboard from './Pages/Dashboard/Dashboard';
import 'materialize-css/dist/css/materialize.min.css';
import AlcholicPerfumes from './Pages/AlcholicPerfumes/AlcholicPerfumes';
import RegUsersList from './Pages/Registered Users List/RegUsersList';
import NonAlcholicPerfumes from './Pages/NonAlcholicPerfumes/NonAlcholicPerfumes';
import ReceivedOrdersList from './Pages/ReceivedOrdersList/ReceivedOrdersList';
import PerfumeSignIn from './Pages/PerfumeSignIn/PerfumeSignIn';
import RegUsersListDetail from './Pages/Registered Users List/RegUsersListDetail';
import RegUsersListForm from './Pages/Registered Users List/RegUsersListForm';
import ReceivedOrdersListForm from './Pages/ReceivedOrdersList/ReceivedOrdersListForm';
import AlcholicPerfumeForm from './Pages/AlcholicPerfumes/AlcholicPerfumeForm';
import NonAlcholicPerfumesForm from './Pages/NonAlcholicPerfumes/NonAlcholicPerfumesForm';
import ReceivedOrderListDetail from './Pages/ReceivedOrdersList/ReceivedOrderListDetail';
import AlcholicPerfumesDetail from './Pages/AlcholicPerfumes/AlcholicPerfumesDetail';
import NonAlcholicPerfumesDetail from './Pages/NonAlcholicPerfumes/NonAlcholicPerfumesDetail';

function App() {
  
  return (
    <> 
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<RegUsersList />} />
              <Route path="/perfumesignin" element={<PerfumeSignIn />} />
              <Route path="/alcholicperfumes" element={<AlcholicPerfumes />} />
              <Route path="/nonalcholicperfumes" element={<NonAlcholicPerfumes />} />
              <Route path="/receivedorderslist" element={<ReceivedOrdersList />} />
                {/* Detail_Routing */}
              <Route path="/reguserslistform" element={<RegUsersListForm />} />
              <Route path="/receivedordersform" element={<ReceivedOrdersListForm/>} />
              <Route path="/alcholicperfumeform" element={<AlcholicPerfumeForm/>} />
              <Route path="/nonalcholicperfumesform" element={<NonAlcholicPerfumesForm/>} />
                {/* Form_Routing */}
              <Route path="/reguserslistdetail" element={<RegUsersListDetail />} />
              <Route path="/receivedorderlistdetail" element={<ReceivedOrderListDetail />} />
              <Route path="/alcholicperfumesdetail" element={<AlcholicPerfumesDetail />} />
              <Route path="/nonalcholicperfumesdetail" element={<NonAlcholicPerfumesDetail />} />
              {/* <Route path="/" element={<Home />} /> */}
              {/* <Route path="/signin" element={<SignIn />} />  
              <Route path="/signup" element={<SignUp />} />
              <Route path='/detailpage' element={<DetailPage/>} />
              <Route path="/homePage" element={<HomePage />} />  
              <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </BrowserRouter> 
    </>
  );
}

export default App;
