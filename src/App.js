import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AdminHome from './components/AdminHome';
import AdminDescriptionPage from './components/AdminDescriptionPage';
import AdminContactUs from './components/AdminContactUs';
import AdminAboutUs from './components/AdminAboutUs';
import AdminProfilePage from './components/AdminProfilePage';
import CustomerProfilePage from './components/CustomerProfilePage';
import CustomerHome from './components/CustomerHome';
import CustomerDescriptionPage from './components/CustomerDescriptionPage';
import CustomerContactUs from './components/CustomerContactUs';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path='/login' element={<Login/>} />
          <Route path='/adminhome' element={<AdminHome/>}/>
          <Route path='/admindescription' element={<AdminDescriptionPage/>}/>
          <Route path='/admincontactus' element={<AdminContactUs/>}/>
          <Route path='/adminaboutus' element={<AdminAboutUs/>}/>
          <Route path='/adminprofilepage' element={<AdminProfilePage/>}/>
          <Route path='/customerprofilepage' element={<CustomerProfilePage/>}/>
          <Route path='/customerhome' element={<CustomerHome/>}/>
          <Route path='/customerdescription' element={<CustomerDescriptionPage/>}/>
          <Route path='/customercontactus' element={<CustomerContactUs/>}/>
          <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
