import React, { useContext } from 'react'
import Context from '../context/CartContext'
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {
    const { cart, removerItem, getTotal, vaciarCarrito } = useContext(Context)

    if (cart.length === 0){
        return (
            <div className='d-flex flex-column align-items-center mt-5'>
                <h1> NO AGREGASTE PRODUCTOS </h1>
                <hr/>
                <Link className='btn btn-secondary w-25 mt-2' to='/'> VER PRODUCTOS</Link>
            </div>
        )
    }else{
        return (
                <table className="table justify-content-center align-items-center ">
                    <thead className='justify-content-center'>
                        <tr className="table-primary justify-content-center align-items-center">
                            <th className="align-items-center"></th>
                            <th className="">Producto</th>
                            <th className="">Cantidad</th>
                            <th className="">Precio</th>
                            <th className="">Subtotal</th>
                            <th className=""></th>
                        </tr>
                    </thead>
                    <tbody className='align-items-center'>
                        {
                            cart.map((prod) => (
                             <tr className="justify-content-center align-items-center" key={prod.id}>
                                <th className="" ><img className="imagenfinal" src={prod.img} alt="" /></th>
                                <th className="">{prod.nombre}</th>
                                <th className="">{prod.cantidad}</th>
                                <th className="">{prod.precio}</th>
                                <th className="">{prod.precio * prod.cantidad}</th>
                                <th className=""><button className='btn btn-outline-secondary' onClick={() => removerItem(prod.id)}><FaRegTrashCan  /></button></th>
                            </tr>
                            ))
                        }
                    </tbody>
                    <tfoot className='footer-carrito'>
                        <tr className="table-primary text-center ">
                            <th className=""></th>
                            <th className="">Total:</th>
                            <th className=""> ${getTotal()}</th>
                            <th className=""><button className='btn btn-outline-secondary' onClick={() => vaciarCarrito()}>Vaciar</button></th>
                            <th className=""><Link className='btn btn-secondary' to='/checkout'> Finalizar COMPRA</Link></th>
                            <th className=""></th>
                        </tr>
                    </tfoot>
                </table>
          )
    }
}

export default Cart