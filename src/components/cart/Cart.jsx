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
                <div className="d-flex flex-column cart ">
                    <thead className=''>
                        <tr className="head table-primary">
                            <th className="align-items-center "></th>
                            <th className="">Producto</th>
                            <th className="cantidad-cart">Cantidad</th>
                            <th className="">Precio</th>
                            <th className="">Subtotal</th>
                            <th className=""></th>
                        </tr>
                    </thead>
                    <tbody className='align-items-center'>
                        {
                            cart.map((prod) => (
                             <tr className="body-cart" key={prod.id}>
                                <th className="" ><img className="imagenfinal" src={prod.img} alt="" /></th>
                                <th className="">{prod.nombre}</th>
                                <th className="cantidad-cart">{prod.cantidad}</th>
                                <th className="">{prod.precio}</th>
                                <th className="">{prod.precio * prod.cantidad}</th>
                                <th className=""><button className='btn btn-outline-secondary' onClick={() => removerItem(prod.id)}><FaRegTrashCan  /></button></th>
                            </tr>
                            ))
                        }
                    </tbody>
                    <tfoot className='footer-carrito'>
                        <tr className="table-primary text-center foot">
                            <th className=""></th>
                            <th className="">Total:</th>
                            <th className=""> ${getTotal()}</th>
                            <th className=""><button className='btn btn-outline-secondary' onClick={() => vaciarCarrito()}>Vaciar</button></th>
                            <th className=""><Link className='btn btn-secondary' to='/checkout'> Finalizar COMPRA</Link></th>
                        </tr>
                    </tfoot>
                </div>
          )
    }
}

export default Cart