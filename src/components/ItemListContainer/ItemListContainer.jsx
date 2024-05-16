import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../Itemlist/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoria = useParams().categoria;

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const coleccion = collection(db, 'productos')

      const queryRef = !categoria ?
      coleccion
      :
      query(coleccion, where('categoria', '==', categoria))
      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc) =>{
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProductos(productos)
      setLoading(false)
    }
    getData()
  }, [categoria]);

  return (
      <div className="d-flex justify-content-center item-container">
        {
          loading ?
          <div className="">
            <div className="spinner-border m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          :
          (<ItemList productos={productos}></ItemList>)
        }
      </div>
  );
};

export default ItemListContainer;
