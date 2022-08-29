import React from "react";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumps-box">
      <div className="breadcrumps-box-list">
        <p className="breadcrumps-box-list-home">Home</p>
        <p className="breadcrumps-box-list-separator">{">"}</p>
        <p className="breadcrumps-box-list-tenis">Tênis</p>
        <p className="breadcrumps-box-list-separator">{">"}</p>
        <p className="breadcrumps-box-list-nike">Tênis Nike Air Max 97 SE</p>
      </div>
    </div>
  );
};

export default Breadcrumbs;
