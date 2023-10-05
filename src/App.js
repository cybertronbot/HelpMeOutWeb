import React from "react";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Pages/auth/Login";
import Recorded from "./Pages/Recorded";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  return (

    <Router >
    <Routes>
      <Route path="/" exact  element={<Home/>}/>
      
      <Route path='/auth/login' element={<Login/>} />
      <Route path='/recorded' element={<Recorded/>} />
      <Route path='/video-details' element={<DetailsPage/>} />
   
    </Routes>
   </Router>
  );
}

export default App;
