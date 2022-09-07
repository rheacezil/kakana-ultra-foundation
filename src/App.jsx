import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import styled from "styled-components";

import HomePage from './components/loggedInPages/pages/HomePage';
import Login from './components/pages/authentication/Login';
import SignUp from './components/pages/authentication/Signup'
import LandingPage from './components/pages/LandingPage';
import { useSelector } from 'react-redux';


function App() {
  const activeUser = useSelector((state) => state.activeUser)


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        {activeUser.email ? (<HomePage />) : (<Login />)}
      </BrowserRouter>

    </div>
  );
}

export default App;

// const AppBody = styled.div`
//   display: flex;
//   height: 100vh;
// `;

// const AppLoading = styled.div`
//   display: grid;
//   place-items: center;
//   height: 100vh;
//   width: 100%;
// `;

// const AppLoadingContents = styled.div`
//   text-align: center;
//   padding-bottom: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   > img {
//     height: 100px;
//     padding: 20px;
//     margin-bottom: 40px;
//   }
// `;
