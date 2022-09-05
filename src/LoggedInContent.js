import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarLoggedIn from './components/loggedInPages/NavBarLoggedIn';
import DashBoard from './components/loggedInPages/pages/DashBoard';
import './App.css';

function LoggedInContent() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBarLoggedIn/>
     <Routes>
      <Route path='/' element={<DashBoard />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default LoggedInContent