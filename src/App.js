
import Appbar from './pages/Appbar';
import React from "react"
import Formation from './pages/Formation';
import Reviewpage from './pages/Reviewpage';
import WelcomePage from './pages/WelcomePage';
import {   Route, Routes } from 'react-router-dom'



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
              <Route path="/Contact" element={<Formation />} />
              <Route path="/Admin" element={<Formation />} />
         </Routes>
        </div>
    </div>
  </div>
  )
}

export default App