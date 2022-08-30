import React from "react";
import "./Header.css";

const Header = ({ total }) => (
  <div className="header-box">
    <div className="header-box-menu">
      <icon className="header-box-menu-icon" />
      <image className="header-box-menu-image" />
    </div>
    <div className="header-box-menu-categories">
      <p>Lançamentos</p>
      <p>Tênis</p>
      <p>T-shirts</p>
      <p>Calças</p>
      <p>Inverno</p>
      <p>Off</p>
    </div>
    <div className="header-box-sign-in">
      <input
        className="header-box-sign-in-input"
        placeholder="O que esta procurando?"
      ></input>
      <icon className="header-box-sign-in-icon" />
      <icon className="header-box-sign-in-person" />
      <image className="header-box-sign-in-image" />
      <div className="header-box-sign-in-cart-total">
        <p>{total}</p>
      </div>
    </div>
  </div>
);
export default Header;
