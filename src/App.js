import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';
import NavigationBar from './components/NavigationBar';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavigationBar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element ={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
