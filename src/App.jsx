// import { useAuthState } from "react-firebase-hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/AboutUs";
import Login from "./components/pages/authentication/Login";
import Signup from "./components/pages/authentication/Signup";
import Donate from "./components/pages/Donate";
import Homepage from "./components/pages/Homepage";
import LandingPage from "./components/pages/LandingPage";

import Show from "./components/DataTable";
import Create from "./components/pages/Donate";
import Edit from "./components/EditData";
// import Show from "./components/pages/Show";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  const activeUser = useSelector((state) => state.activeUser);

  const checkIfActive = () => {
    let isActive = false;
    if (user || activeUser.email) {
      isActive = true;
    } else {
      console.log("no user active");
    }

    return isActive;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/home" element={<Homepage />} /> */}
          {checkIfActive()
            ? [<Route path="/home" element={<Homepage />} />]
            : [<Route path={"*"} element={<Navigate replace to={"/"} />} />]}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/show" element={<Show />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;