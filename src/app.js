import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/userContext";
import Disciplines from "./pages/Disciplines";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Teachers from "./pages/Teachers";
import GlobalStyle from "./styles/globalStyle.js";

export default function App(){
  const [user, setUser] = useState("");
  return(
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
      <GlobalStyle/>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/disciplines" element={<Disciplines/>}/>
          <Route path="/teachers" element={<Teachers/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}