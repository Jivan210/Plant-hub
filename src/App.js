import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AdminHome from './components/AdminHome';
import AdminDescriptionPage from './components/AdminDescriptionPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path='/login' element={<Login/>} />
          <Route path='/adminhome' element={<AdminHome/>}/>
          <Route path='/admindescription' element={<AdminDescriptionPage/>}/>
          <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
