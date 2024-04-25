import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../Itemlist/ItemList";
import { getProducts } from "../../data/asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {

    const dataProductos = getProducts()

   dataProductos
      .then((res) => {
        if (categoria){
          setProductos(res.filter((prod) => prod.categoria === categoria));
        }else{
          setProductos(res);
        }
      })
      .catch((error) => console.log(error))
  }, [categoria]);

  return (
      <div className="item-container">
        <ItemList productos={productos}></ItemList>
      </div>
  );
};

export default ItemListContainer;
