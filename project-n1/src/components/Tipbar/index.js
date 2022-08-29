import React from "react";
import "./Tipbar.css";

const Tipbar = () => {
  return (
    <div className="tipbar-box">
      <div className="tipbar-box-troca">
        <div className="tipbar-box-troca-icon"></div>
        <p className="tipbar-box-troca-paragraph">PRIMEIRA TROCA GRÁTIS</p>
      </div>
      <div className="tipbar-box-frete">
        <icon className="tipbar-box-frete-icon"></icon>
        <p className="tipbar-box-frete-paragraph">
          FRETE GRÁTIS NAS COMPRAS ACIMA DE R$500
        </p>
      </div>
      <div className="tipbar-box-parcele">
        <icon className="tipbar-box-parcele-icon"></icon>
        <p className="tipbar-box-parcele-paragraph">
          PARCELE EM ATÉ 6X SEM JUROS
        </p>
      </div>
    </div>
  );
};

export default Tipbar;
