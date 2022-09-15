import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import styled from "styled-components";

import SignUp from "./components/pages/authentication/Signup";
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/authentication/Login";
import Donate from "./components/pages/Donate";
import NavigationBar from "./components/NavigationBar";
import Show from "./components/DataTable";
import Create from "./components/pages/Donate";
import Edit from "./components/EditData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingpage" element={<HomePage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/show" element={<Show />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
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
