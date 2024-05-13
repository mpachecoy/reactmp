import React, { useContext } from "react";
import "./CartWidget.css";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import Context from "../context/CartContext";

const CartWidget = () => {
  const { cantidadTotal } = useContext(Context)

  return (
    <div className="btn patata" href="#link">
      <LiaCartArrowDownSolid /> Carrito
      <div> 
        {cantidadTotal}
      </div>
    </div>
  );
};

export default CartWidget;
