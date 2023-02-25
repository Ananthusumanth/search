import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "../App.css";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="Menu">
      <div>
      <img src="https://tse1.mm.bing.net/th?id=OIP.P1kbH6YiKpzihsWP4XC2QAHaBD&pid=Api&P=0"   id="h1"/>
      </div>
      <Menu
        id="sidebar"
        onClick={({ key }) => {
          navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Dashboard", key: "/dashboard" },
          { label: "Articles", key: "/articles" },
          { label: "Analytics", key: "/analytics" },
          { label: "Messages", key: "/messages" },
          { label: "Calender", key: "/calender" },
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
