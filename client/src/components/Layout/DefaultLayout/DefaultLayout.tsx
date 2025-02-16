import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "../../../assets/css/layoutDefalut.css";
import React from "react";
import { Button } from "antd";

const LayoutDefault: React.FC = () => {
  const naviagte = useNavigate()
  const handleLogin = () => {
    naviagte('/login')
  }
  const handleSignUp = () => {
    naviagte('/register')
  }
  
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <a href="/"><img alt="logo-apt" src={logo}></img></a>
          </div>
          <div className="menu">
            <Button type="primary" onClick={handleLogin}>Login</Button>
            <Button onClick={handleSignUp}>Sign Up</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
      <footer>
        <p>@CopyRight: APT3233</p>
        <a href="https://t.me/apt3233" target="_blank" rel="noreferrer">
          Contact me!
        </a>
      </footer>
    </>
  );
};

export default LayoutDefault;
