import React, { useState } from "react";
import "./Vitrine.css";

const Vitrine = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const pickProduct = (product) => setSelectedProduct(product);

  return (
    <div className="vitrine">
      <div className="vitrine-title">
        <h5>Você também vai curtir</h5>
        <div className="vitrine-title-line" />
      </div>
      <div className="vitrine-produto">
        <div className="vitrine-flag-box">
          <p>20% OFF</p>
        </div>
        {/* <div className="vitrine-icons"> */}
        <div className="vitrine-icons-left">
          <icon className="vitrine-icons-left-icon" />
        </div>
        <div className="vitrine-icons-right">
          <icon className="vitrine-icons-right-icon" />
        </div>
        {/* </div> */}
        <img
          className="vitrine-flag-image"
          src="../../../assets/images/vitrine.svg"
          alt="imageVitrine"
        />
      </div>
      <div className="vitrine-details">
        <p className="vitrine-details-text">Tênis Nike Air Max 2090</p>
        <div className="vitrine-details-box">
          <div className="vitrine-details-price">
            <p className="vitrine-details-price-gray">R$ 190,00</p>
            <p className="vitrine-details-price-red">R$ 150,00</p>
          </div>
          <p className="vitrine-details-box-text">ou 3x de R$ 50,00</p>
        </div>
      </div>
      <button className="vitrine-produto-button">Adicionar ao carrinho</button>
      <div className="vitrine-paginators">
        <button
          className="vitrine-paginators-icons"
          style={selectedProduct === "1" ? { opacity: 1 } : { opacity: 0.2 }}
          onClick={() => pickProduct("1")}
        ></button>
        <button
          className="vitrine-paginators-icons"
          style={selectedProduct === "2" ? { opacity: 1 } : { opacity: 0.2 }}
          onClick={() => pickProduct("2")}
        ></button>
        <button
          className="vitrine-paginators-icons"
          style={selectedProduct === "3" ? { opacity: 1 } : { opacity: 0.2 }}
          onClick={() => pickProduct("3")}
        ></button>
        <button
          className="vitrine-paginators-icons"
          style={selectedProduct === "4" ? { opacity: 1 } : { opacity: 0.2 }}
          onClick={() => pickProduct("4")}
        ></button>
      </div>
    </div>
  );
};

export default Vitrine;
