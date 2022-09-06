import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/loggedInPages/pages/HomePage';
import Login from './components/pages/authentication/Login';
import SignUp from './components/pages/authentication/Signup'
import LandingPage from './components/pages/LandingPage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element ={<Login/>}/>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<HomePage />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
