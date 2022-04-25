import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/userContext";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./styles/globalStyle.js";

export default function App(){
  const [token, setToken] = useState(null);

  return(
    <UserContext.Provider value={{token, setToken}}>
      <BrowserRouter>
      <GlobalStyle/>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}