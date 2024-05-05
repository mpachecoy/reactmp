import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="itemlist-container h-100">
      <p className="titulo">LA CALANDRIA</p>
      <div className="card-container h-100">
        {productos.map((elem) => (
          <div className="card-detail h-100" key={elem.id}>
            <Item {...elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
