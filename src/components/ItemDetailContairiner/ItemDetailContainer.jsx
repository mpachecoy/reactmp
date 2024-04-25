import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from "../../data/asyncMock";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ( {} ) => {

    const [item, setItem] = useState (null);
    const id = useParams().id;

    useEffect(() => {
        getProductsById(Number(id))
            .then((res) =>{
                setItem(res);
            })
    }, [id])

  return (
    <div>
       {item && <ItemDetail {...item}/> } 
    </div>
  )
}

export default ItemDetailContainer