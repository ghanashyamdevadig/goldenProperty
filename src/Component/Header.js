import React from "react";
import "./Header.css";
import { MenuOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import Line from "../Assests/Images/Line 1.svg"

export default function Header() {
  return (
    <div className="header">
      <div className="hamberger-menu">
        <MenuOutlined />
      </div>
      <div className="logo">
        <div className="login-logo">
          <img src={require("../Assests/Images/Frame 61760.png")} alt="" />
        </div>
      </div>
      <div className="logout-menu">
        <div className="round-box">
          <UserOutlined />
        </div>
        <div className="line">
            <img src={Line} alt="" />
        </div>
        <div className="admin">
          <p>Admin</p>
        </div>
        <div className="drop-down">
          <DownOutlined />
        </div>
      </div>
    </div>
  );
}
