import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
          <Route exact path="/" element={<RegUsersList />} />
          <Route exact path="/perfumesignin" element={<PerfumeSignIn />} />
          <Route exact path="/alcholicperfumes" element={<AlcholicPerfumes />} />
          <Route exact path="/nonalcholicperfumes" element={<NonAlcholicPerfumes />} />
          <Route exact path="/receivedorderslist" element={<ReceivedOrdersList />} />
          {/* Detail_Routing */}
          <Route exact path="/reguserslistform" element={<RegUsersListForm />} />
          <Route exact path="/receivedordersform" element={<ReceivedOrdersListForm />} />
          <Route exact path="/alcholicperfumeform" element={<AlcholicPerfumeForm />} />
          <Route exact path="/nonalcholicperfumesform" element={<NonAlcholicPerfumesForm />} />
          {/* Form_Routing */}
          <Route exact path="/reguserslistdetail" element={<RegUsersListDetail />} />
          <Route exact path="/receivedorderlistdetail" element={<ReceivedOrderListDetail />} />
          <Route exact path="/alcholicperfumesdetail" element={<AlcholicPerfumesDetail />} />
          <Route exact path="/nonalcholicperfumesdetail" element={<NonAlcholicPerfumesDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
