import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Header_Logo } from "../utils/constants";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const setButton = () => {
    loginbtn === "Logout" ? setLoginbtn("Login") : setLoginbtn("Logout");
  };

  const { loginUser } = useContext(UserContext);

  const isOnline = useOnline();
  return (
    <div className="flex justify-between   bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
      <div>
        <img className="p-1 h-1/2 w-1/4 m-3" src={Header_Logo} />
      </div>
      <div className="flex item s-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{isOnline ? "✅ Online" : "🔴 Offline"}</li>
          <li className="px-4">
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="loginbtn"
            onClick={() => {
              setButton();
            }}
          >
            {loginbtn === 'Logout' ? loginUser : loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
