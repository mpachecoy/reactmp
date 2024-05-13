import React from 'react';
import Button from "react-bootstrap/Button";
import { LiaCartArrowDownSolid } from "react-icons/lia";

const ItemAdd = ({ onAdd }) => {
    const count = 1
    const handleAgregar = () => {
      onAdd(count);
    }
     
  return (
    <Button className="btn-agregar btn-secondary" onClick={handleAgregar}>
        <LiaCartArrowDownSolid />
    </Button>
  )
}

export default ItemAdd