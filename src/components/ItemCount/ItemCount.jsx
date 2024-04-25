import React, { useState } from "react";
import "./ItemCount.css";
import useCounter from "../../hooks/useCounter";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ItemCount = ({ stock, initialValue, onAdd }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock);

  return (
    <Container className="item-count">
      <div>
        <Button className="btn-agregar" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
      </div>
      <div className="count btn-signo">
        <Button onClick={incrementar}>+</Button>
        <div> {count} </div>
        <Button onClick={decrementar}>-</Button>
      </div>
    </Container>
  );
};

export default ItemCount;
