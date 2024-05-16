import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../data/asyncMock";
import { Await, useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = ({}) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = useParams().id;

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true)
    const getProducts = async() => {
      const queryRef = doc(db, 'productos', id)
      const response = await getDoc(queryRef)
      const newItem = {
        ...response.data(),
        id: response.id
      }
      setItem(newItem)
      setLoading(false)
    }
    getProducts()
  }, [id])

  return(
    <div>
      {
        loading ?
        <div className="d-flex justify-content-center">
          <div className="spinner-border m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        :
        (item && <ItemDetail {...item} />) 
      }       
    </div>
  )
}

export default ItemDetailContainer;
