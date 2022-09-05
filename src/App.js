import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/pages/Home';
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     {/* Navigation bar should be a ternary operator of whether or not a user is logged in. */}
     <NavigationBar />
     <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
