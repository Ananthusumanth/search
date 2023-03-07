import React from "react";
// import { useState } from 'react';
// import{FaBars} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import "../App.css";

const Sidebar = ({ children }) => {
  // const [isopen , setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(!isopen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/articles",
      name: "Articles",
    },
    {
      path: "/analytics",
      name: "Analytics",
    },
    {
      path: "/messages",
      name: "Messages",
    },
    {
      path: "/calender",
      name: "Calender",
    },
  ];
  return (
    <div className="con">
      <div className="sidebar">
        <img
          src="https://public-v2links.adobecc.com/4bb84cc1-5418-4da4-50dc-270dc40a8358/component?params=component_id%3A2b8b2b0e-8a8c-4619-a1f4-e3d9f12df687&params=version%3A0&token=1678001079_da39a3ee_e6ed0124577d719ed4a0e726fe3c024c19fc2f4d&api_key=CometServer1"
          alt="name"
          className="img"
        />
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
            style={{ textDecoration: "none" }}
          >
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
