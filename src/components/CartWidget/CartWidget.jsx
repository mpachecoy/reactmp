import React from "react";
import "./CartWidget.css";
import { LiaCartArrowDownSolid } from "react-icons/lia";

const CartWidget = () => {
  return (
    <div className="btn patata" href="#link">
      <LiaCartArrowDownSolid /> Carrito
    </div>
  );
};

export default CartWidget;
