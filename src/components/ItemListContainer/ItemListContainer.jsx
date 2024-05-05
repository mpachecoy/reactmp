import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../Itemlist/ItemList";
import { getProducts } from "../../data/asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  const categoria = useParams().categoria;

  useEffect(() => {
    setLoading(true)
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
      .finally(() => setLoading(false))
  }, [categoria]);

  return (
      <div className="item-container">
        {
          loading ?
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          :
          <ItemList productos={productos}></ItemList>
        }

      </div>
  );
};

export default ItemListContainer;
