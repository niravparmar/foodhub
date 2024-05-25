import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  [btnStatus, setBtnStatus] = useState("Login");

  useEffect(() => {
    console.log("Use Effect Called");
  },[]);

  // console.log("Header Rendered");

  const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" :"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/">Cart</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              btnStatus == "Login"
                ? setBtnStatus("Logout")
                : setBtnStatus("Login");
            }}
          >
            {btnStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
