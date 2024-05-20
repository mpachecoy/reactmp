import { addDoc, collection, getDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import Context from '../context/CartContext';
import { useForm } from "react-hook-form";
import { db } from "../../config/firebase";
import Swal from 'sweetalert2'


const Checkout = () => {
    const [ pedidoId, setPedidoId ]= useState("")
    const [emailMatch, setEmailMatch] = useState(true)
    const [ error, setError ] = useState({})
    const { cart, getTotal, vaciarCarrito } = useContext(Context)

    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
      const validateEmail = () => {
        if(data.email === data.repeatEmail){
          setEmailMatch(true)
        }else{
          setEmailMatch(false)
          console.log('Los correo no coinciden')
        }
      }

      const validateForm = () => {
        const errors = {}
        if(!data.nombre){
          errors.nombre = 'Tenes que agregar un nombre'
        }else if(!data.telefono){
          errors.telefono = 'Tenes que agregar telefono'
        }else if(!data.email){
          errors.email = 'Tenes que agregar telefono'
        }else if(!data.repeatEmail){
          errors.repeatEmail = 'Tenes que agregar telefono'
        }
        setError(errors)
        return Object.keys(errors).length === 0
      }

      const pedido = {
        ciente: data,
        carrito: cart,
        total: getTotal()
      }

      const pedidoRef = collection(db, "pedidos")

      const isFormValid = validateForm()
      validateEmail()

      if(isFormValid && emailMatch){
        addDoc(pedidoRef, pedido)
        .then((doc) => {
          setPedidoId(doc.id)
          Swal.fire({
            title: 'Muchas gracias por tu compra!',
            text:`Tu numero de compras es:    ${doc.id}`,
            icon: 'success',
            confirmButtonText: 'ACEPTAR'
          })
          vaciarCarrito()
        })
      }else{
        Swal.fire({
          title: 'Hay un error en el formulario!',
          icon: 'error',
          confirmButtonText: 'ACEPTAR'
        })
      }
    }


  return (
    <div>
      <div className="container mt-3">
        <h2 className="d-flex justify-content-center ">Datos de Facturacion</h2>
        <form className="container mt-3" onSubmit={handleSubmit(comprar)}>
          <div className="row">
            <div className="col">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Nombre" 
                {...register("nombre")} 
              />
            </div>
            <div className="col">
              <input 
                type="number" 
                className="form-control" 
                placeholder="Ingrese su telefono" 
                {...register("telefono")}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="col">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Ingrese su email" 
                {...register("email")}
              />
            </div>
            <div className="col">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Repita el email" 
                {...register("repeatEmail")}
              />
            </div>
          </div>
          <button className="btn btn-primary d-flex justify-content-center" type="submit">Finalizar Compra</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
