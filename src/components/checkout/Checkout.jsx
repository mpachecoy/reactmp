import { addDoc, collection, getDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import Context from "../context/CartContext";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [usuario, setUsuario] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })

    const [emailMatch, setEmailMatch] = useState(true)
    const [error, setError] = useState({})

    const { cart, getTotal } = useContext(Context)
    console.log(cart)
    console.log(getTotal)

    const updateUser = (event) => {
        setUsuario((usuario) => ({
            ...usuario,
            [event.target.name]: event.target.value
        }))
    }

    const navigate  = useNavigate()

    const validateEmails = () => {
        if(usuario.email === usuario.repeatedEmail) {
            setEmailMatch(true)
        }else{
            setEmailMatch(false)
        }
    }

    const validateForm = () => {
        const errors = {}
        if(!usuario.name){
            errors.name= "Tenés que agregar un nombre"
        }
        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        const isFormValid = validateForm()
        validateEmails()
        if(isFormValid && emailMatch){

            const ordersCollection = collection(db, 'orders')

            try {

                for(const item of cart) {
                    const productRef = doc(db,'productos', item.id)
                    const productDoc = await getDoc(productRef)

                    const currentStock = productDoc.data().stock

                    if(currentStock >= item.cantidad) {
                        await updateDoc(productRef, {
                            stock: currentStock - item.cantidad
                        })
                    }else{
                        console.log(`No hay stok para ${item.name}`)
                    }
                    const order = {
                        buyer: usuario,
                        cart: cart,
                        total: getTotal()
                    }
        
                    const orderDocRef = await addDoc(ordersCollection, order)
                    Swal.fire({
                        title: 'Gracias por tu compra',
                        text: `El número de orden es: ${orderDocRef.id}`,
                        icon: 'success',
                        confirmButtonText: 'Cool'      
                    }) 
                }               
            } catch (error) {
                console.log(error)
            }
        }
    }


  return (
    <div>

      <form className="d-flex flex-column align-items-center mt-5">
        <h2>Datos de Facturacion</h2>
        <div className="form-group w-50 justify-content-center">
          <input type="text" className="form-control" name='name' onChange={updateUser} placeholder="Ingrese su Nombre"/>
        </div>
        <div className="form-group w-50">
          <input type="email" className="form-control" name='email' onChange={updateUser} placeholder="Ingrese Email"/>
        </div>
        <div className="form-group w-50">
          <input type="email" className="form-control" name='repeatEmail' onChange={updateUser} placeholder="Repita el Email"/>
        </div>
        <div className="form-group w-50">
          <input type="text" className="form-control" name='phone' onChange={updateUser} placeholder="Ingrese su telefono"/>
        </div>
        <button className='btn btn-outline-secondary'> Finalizar Compra </button>
      </form>
    </div>
  );
};

export default Checkout;
