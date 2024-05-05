import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../data/asyncMock";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetailContainer = ({}) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = useParams().id;

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    getProductsById(Number(id))
      .then((res) => {
        if (!res) {
          navigate("/*");
        } else {
          setItem(res);
        }})
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

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
};

export default ItemDetailContainer;
