import Contactpage from "./pages/Contactpage"
import Appbar from './pages/Appbar';
import React from "react"
import Formation from './pages/Formation';
import Reviewpage from './pages/Reviewpage';
import WelcomePage from './pages/WelcomePage';
import {   Route, Routes } from 'react-router-dom'
import Suggestions from  "./pages/admin/Suggestions"
import AdminDisplayFormation  from "./pages/admin/AdminDisplayFormation"
import Login from "./pages/Login";


function App() {
 return (
  <div className="container">
    <div className="screen">
        <Appbar />
        <div className="content-section">
          <Routes>
              <Route exact  path="/" element={<WelcomePage /> }/>
              <Route path="/Formation" element={<Formation />} />
              <Route path="/Formation/:id" element={<Reviewpage />} />
              <Route path="/Contact" element={<Contactpage />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Admin/Suggestion" element={<Suggestions />} />
              <Route  exact  path="/Admin/*" element={<AdminDisplayFormation />} />
         </Routes>
        </div>
    </div>
  </div>
 )
 }


export default App