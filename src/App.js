import React from "react";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Pages/auth/Login";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact  element={<Home/>}/>
      
      <Route path='/auth/login' element={<Login/>} />
   
    </Routes>
   </Router>
  );
}

export default App;
