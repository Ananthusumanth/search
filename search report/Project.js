import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Analytics from './Pages/Analytics';
import Articles from './Pages/Articles';
import Dashboard from './Pages/Dashboard';
import Messages from './Pages/Messages';
import Calender from './Pages/Calendar';
import Sidebar from './Components/Sidebar';



function Project () {
  return (
    <div className='sai'>
      <Sidebar>
      <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/articles" element={<Articles/>}></Route>
          <Route path="/analytics" element={<Analytics/>}></Route>
          <Route path="/messages" element={<Messages/>}></Route>
          <Route path="/calender" element={<Calender/>}></Route>
        </Routes>
        </Sidebar>
    </div>
  )
}

export default Project 
