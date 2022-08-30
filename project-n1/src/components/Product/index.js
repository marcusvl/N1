import React from "react";
import Produto from "./Produto";
import "./Product.css";
import Detalhes from "./Detalhes";

const Product = ({ total, setTotal }) => {
  return (
    <div className="product-box">
      <Produto />
      <Detalhes total={total} setTotal={setTotal} />
    </div>
  );
};

export default Product;
