import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="itemlist-container ">
      <p className="titulo">Tienda LA CALANDRIA</p>
      <div className="card-container">
        {productos.map((elem) => (
          <div className="card-detail" key={elem.id}>
            <Item {...elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
