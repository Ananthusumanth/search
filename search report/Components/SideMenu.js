import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function SideMenu() {
  
  return (
    <div id="sidebar">
      <img
        src="https://public-v2links.adobecc.com/4bb84cc1-5418-4da4-50dc-270dc40a8358/component?params=component_id%3A2b8b2b0e-8a8c-4619-a1f4-e3d9f12df687&params=version%3A0&token=1677396414_da39a3ee_b9cb03638fc1d4323224cf4ee4ed177196a3adc9&api_key=CometServer1"
        id="h1"
      />

      <label id="button">
        <Link class="navbar-brand" to="/dashboard" style={{ color: "#4CA2FF" }}>
          Dashboard
        </Link>
      </label>

      <label id="button">
        <Link class="navbar-brand" to="/articles">
        Articles 
        </Link>
      </label>

      <label id="button">
        <Link class="navbar-brand" to="analytics">
        Analytics 
        </Link>
      </label>

      <label id="button">
        <Link class="navbar-brand" to="/messages">
          Messages
        </Link>
      </label>

      <label id="button">
        <Link class="navbar-brand" to="/calender">
          Calendar
        </Link>
      </label>
    </div>

    // <div className="Menu">
    //   <div>
    //   <img src="https://public-v2links.adobecc.com/4bb84cc1-5418-4da4-50dc-270dc40a8358/component?params=component_id%3A2b8b2b0e-8a8c-4619-a1f4-e3d9f12df687&params=version%3A0&token=1677396414_da39a3ee_b9cb03638fc1d4323224cf4ee4ed177196a3adc9&api_key=CometServer1"  id="h1"/>
    //   </div>
    //   <Menu
    //     id="sidebar"
    //     onClick={({ key }) => {
    //       navigate(key);
    //     }}
    //     defaultSelectedKeys={[window.location.pathname]}
    //     items={[
    //       { label: "Dashboard", key: "/dashboard" },
    //       { label: "Articles", key: "/articles" },
    //       { label: "Analytics", key: "/analytics" },
    //       { label: "Messages", key: "/messages" },
    //       { label: "Calender", key: "/calender" },
    //     ]}
    //   ></Menu>
    // </div>
  );
}

export default SideMenu;
