import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Analytics from "../Pages/Analytics";
import Articles from "../Pages/Articles";
import Messages from "../Pages/Messages";
import Calender from "../Pages/Calendar";
import Searchbar from "./Searchbar";

function Content() {
  return (
    <div>
      <div>
        <Searchbar/>
      </div>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Content;
