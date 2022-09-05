import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarLoggedIn from './components/loggedInPages/NavBarLoggedIn';
import DashBoard from './components/loggedInPages/pages/DashBoard';
import './App.css';
import Badge from './components/loggedInPages/pages/Badge';

function LoggedInContent() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBarLoggedIn/>
     <Routes>
      <Route path='/' element={<DashBoard />} />
      <Route path='/badge' element={<Badge />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default LoggedInContent