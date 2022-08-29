import React from "react";
import Produto from "./Produto";
import "./Product.css";
import Detalhes from "./Detalhes";
import Vitrine from "./Vitrine";

const Product = ({ total, setTotal }) => {
  return (
    <div className="product-box">
      <Produto />
      <Detalhes total={total} setTotal={setTotal} />
      <Vitrine />
    </div>
  );
};

export default Product;
