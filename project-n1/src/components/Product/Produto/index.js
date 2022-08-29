import React, { useState } from "react";
import "./Produto.css";
import Image1 from "../../../assets/images/image1.svg";
import Image2 from "../../../assets/images/image2.svg";
import Image3 from "../../../assets/images/image3.svg";
import Image4 from "../../../assets/images/image4.svg";

const Produto = () => {
  const [selected, setSelected] = useState(Image1);
  return (
    <div className="produto">
      <div className="produto-main-image">
        <div className="produto-main-image-flag">
          <p className="produto-main-image-flag-text">20% OFF</p>
        </div>
        <img
          className="produto-main-image-big"
          src={selected}
          alt="main product"
        />
      </div>
      <div className="produto-gallery">
        <img
          className={
            selected === Image1
              ? "produto-gallery-images-selected"
              : "produto-gallery-images-unselected"
          }
          onClick={() => setSelected(Image1)}
          src={Image1}
          alt="image1"
        />
        <img
          className={
            selected === Image2
              ? "produto-gallery-images-selected"
              : "produto-gallery-images-unselected"
          }
          onClick={() => setSelected(Image2)}
          src={Image2}
          alt="image2"
        />
        <img
          className={
            selected === Image3
              ? "produto-gallery-images-selected"
              : "produto-gallery-images-unselected"
          }
          onClick={() => setSelected(Image3)}
          src={Image3}
          alt="image3"
        />
        <img
          className={
            selected === Image4
              ? "produto-gallery-images-selected"
              : "produto-gallery-images-unselected"
          }
          onClick={() => setSelected(Image4)}
          src={Image4}
          alt="image4"
        />
      </div>
    </div>
  );
};

export default Produto;
