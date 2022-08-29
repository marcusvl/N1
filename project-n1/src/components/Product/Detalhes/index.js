import React, { useState } from "react";
import "./Detalhes.css";

const Detalhes = ({ total, setTotal }) => {
  const [selectedColor, setSelectedColor] = useState("green");
  const [selectedTotal, setSelectedTotal] = useState(0);

  const pickColor = (color) => setSelectedColor(color);

  const increase = () => setSelectedTotal(selectedTotal + 1);

  const decrease = () =>
    setSelectedTotal(selectedTotal > 0 ? selectedTotal - 1 : selectedTotal);

  const buy = () => {
    setTotal(total + selectedTotal);
    setSelectedTotal(0);
    localStorage.setItem("total", total);
  };

  return (
    <div className="detalhes-box">
      <div className="detalhes-box-nome-produto">
        <h5>Tênis Nike Air Max 97 SE</h5>
        <p>Código: 76545</p>
      </div>
      <div className="detalhes-box-preço-produto">
        <div className="detalhes-box-preço-produto-info">
          <p className="detalhes-box-preço-produto-info-gray">R$ 373,00</p>
          <p className="detalhes-box-preço-produto-info-red">R$ 261,90</p>
        </div>
        <p className="detalhes-box-preço-produto-parcela">ou 10x de R$ 26,19</p>
      </div>
      <div className="detalhes-box-cor-produto">
        <div className="detalhes-box-cor-produto-cores">
          <p>Cores</p>
          <div className="detalhes-box-cor-produto-cores-icons">
            <button
              className="detalhes-box-cor-produto-cores-icons-green"
              style={
                selectedColor === "green"
                  ? {
                      borderWidth: 4,
                      borderColor: "#2F1893",
                      borderStyle: "solid",
                    }
                  : { border: "none" }
              }
              onClick={() => pickColor("green")}
            />
            <button
              className="detalhes-box-cor-produto-cores-icons-blue"
              style={
                selectedColor === "blue"
                  ? {
                      borderWidth: 4,
                      borderColor: "#2F1893",
                      borderStyle: "solid",
                    }
                  : { border: "none" }
              }
              onClick={() => pickColor("blue")}
            />
            <button
              className="detalhes-box-cor-produto-cores-icons-red"
              style={
                selectedColor === "red"
                  ? {
                      borderWidth: 4,
                      borderColor: "#2F1893",
                      borderStyle: "solid",
                    }
                  : { border: "none" }
              }
              onClick={() => pickColor("red")}
            />
          </div>
        </div>
        <div className="detalhes-box-cor-produto-tamanho">
          <p>Tamanho</p>
          <div className="detalhes-box-cor-produto-tamanho-icons">
            <icon className="detalhes-box-cor-produto-tamanho-icons-39" />
            <icon className="detalhes-box-cor-produto-tamanho-icons-40" />
            <icon className="detalhes-box-cor-produto-tamanho-icons-41" />
            <icon className="detalhes-box-cor-produto-tamanho-icons-42" />
          </div>
        </div>
      </div>
      <div className="detalhes-box-compra-produto">
        <div className="detalhes-box-compra-produto-icons">
          <button
            className="detalhes-box-compra-produto-icons-plus"
            onClick={increase}
          />
          <div className="detalhes-box-compra-produto-quantity">
            <p>{selectedTotal}</p>
          </div>
          <button
            className="detalhes-box-compra-produto-icons-minus"
            onClick={decrease}
          />
        </div>
        <button
          className="detalhes-box-compra-produto-icons-button"
          onClick={buy}
        >
          <icon className="detalhes-box-compra-produto-icons-cart" />
          Comprar
        </button>
      </div>
      <div className="detalhes-box-info-produto">
        <div className="detalhes-box-info-produto-descrição">
          <p>Detalhes do produto</p>
          <icon className="detalhes-box-info-produto-descrição-icon" />
        </div>
        <div className="detalhes-box-info-produto-frete">
          <p>Calcular frete e entrega</p>
          <icon className="detalhes-box-info-produto-descrição-icon" />
        </div>
      </div>
      <div className="detalhes-box-compartilhar-produto">
        <p>Compartilhar</p>
        <div className="detalhes-box-compartilhar-produto-icons">
          <div className="detalhes-box-compartilhar-produto-icons-icon">
            <icon className="detalhes-box-compartilhar-produto-icons-instagran" />
          </div>
          <div className="detalhes-box-compartilhar-produto-icons-icon">
            <icon className="detalhes-box-compartilhar-produto-icons-facebook" />
          </div>
          <div className="detalhes-box-compartilhar-produto-icons-icon">
            <icon className="detalhes-box-compartilhar-produto-icons-email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
