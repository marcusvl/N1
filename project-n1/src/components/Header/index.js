import React from "react";
import "./Header.css";

const Header = ({ total }) => (
  <div className="header-box">
    <div className="header-box-menu">
      <icon className="header-box-menu-icon" />
      <image className="header-box-menu-image" />
    </div>
    <div className="header-box-sign-in">
      <icon className="header-box-sign-in-icon" />
      <image className="header-box-sign-in-image" />
      <div className="header-box-sign-in-cart-total">
        <p>{total}</p>
      </div>
    </div>
  </div>
);
export default Header;
