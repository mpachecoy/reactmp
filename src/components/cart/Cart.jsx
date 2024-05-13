import React, { useContext } from 'react'
import Context from '../context/CartContext'
import { FaRegTrashCan } from "react-icons/fa6";



const Cart = () => {
    const { cart, removerItem, getTotal, varciarCarrito} = useContext(Context)
    console.log(cart)

  return (
    <div>
        <table className="table table-dark mt-5">
            <thead>
                <tr className="table-primary">
                <th className="" scope="col"></th>
                <th className="" scope="col">Producto</th>
                <th className="" scope="col">Cantidad</th>
                <th className="" scope="col">Precio</th>
                <th className="" scope="col">Subtotal</th>
                <th className="" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((prod) => (
                     <tr className="" key={prod.id}>
                        <th className=""><img src={prod.img} alt="" /></th>
                        <th className="">{prod.nombre}</th>
                        <th className="">{prod.cantidad}</th>
                        <th className="">{prod.precio}</th>
                        <th className="">{prod.precio * prod.cantidad}</th>
                        <th className=""><button className='btn btn-outline-secondary' onClick={() => removerItem(prod.id)}><FaRegTrashCan  /></button></th>
                    </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr className="table-primary text-center">
                    <th className="" scope="col">Total:</th>
                    <th className=""> ${getTotal()}</th>
                    <th className=""><button className='btn btn-outline-secondary' onClick={() => varciarCarrito()}>Vaciar</button></th>
                    <th className=""><button className='btn btn-secondary'>Finalizar COMPRA</button></th>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default Cart