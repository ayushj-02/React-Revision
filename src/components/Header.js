import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useStatusOnline();
  return (
    <div className="flex justify-between items-center p-4 bg-[#f5f5f5] shadow-sm mb-2">
      <div className="logo-container">
        <Link to="/">
          <img
            src={
              "https://pbs.twimg.com/profile_images/596692454666932225/7_80kLb-_400x400.png"
            }
            alt="logo"
            className="w-15"
          />
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className="px-2.5">
            Status :{" "}
            {onlineStatus ? (
              <span style={{ color: "green" }}>Online</span>
            ) : (
              <span style={{ color: "red" }}>Offline</span>
            )}
          </li>
          <li className="px-2.5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2.5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2.5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2.5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2.5">Cart</li>
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
