import React, { useContext } from "react";
import "./CartWidget.css";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import Context from "../context/CartContext";

const CartWidget = () => {
  const { cantidadTotal } = useContext(Context)

  return (
    <div className="d-flex gap-1 btn patata align-items-center" href="#link">
      <LiaCartArrowDownSolid /> Carrito
      <div className="border rounded-pill bg-white"> 
        { cantidadTotal() }
      </div>
    </div>
  )
};

export default CartWidget;
