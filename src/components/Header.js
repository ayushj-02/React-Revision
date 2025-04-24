import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import useStatusOnline from "../utils/useStatusOnline";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useStatusOnline();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            onlineStatus :{" "}
            {onlineStatus ? (
              <span style={{ color: "green" }}>Online</span>
            ) : (
              <span style={{ color: "red" }}>Offline</span>
            )}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              setLoginBtn(loginBtn === "Logout" ? "Login" : "Logout")
            }
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
