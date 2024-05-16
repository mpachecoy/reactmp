import React from "react";
import "./ItemCount.css";
import useCounter from "../../hooks/useCounter";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ItemCount = ({ stock, initialValue, onAdd }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock);

  const handleAgregar = () => {
    onAdd(count);
  }

  return (
    <Container className="item-count">
      <div>
        <Button className="btn-agregar btn-secondary" onClick={handleAgregar}>
          Agregar al Carrito
        </Button>
      </div>
      <div className="count btn-signo">
        <div className="btn btn-outline-secondary" onClick={incrementar}>
          +
        </div>
        <div> {count} </div>
        <div className="btn btn-outline-secondary" onClick={decrementar}>
          -
        </div>
      </div>
    </Container>
  )
}

export default ItemCount;
