import React, {createContext, useState, useEffect} from 'react'

const Context = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("cart")) || []

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState(carritoInicial)

    const addItem = (productoAgregado, cantidad) => {
        const nuevoProducto = {
            cantidad,
            ...productoAgregado
        }
        if(estaEnCarrito(nuevoProducto.id)) {
            const carritoActualizado = cart.map((el) => {
                if(el.id === nuevoProducto.id) {
                    return {...el, cantidad: el.cantidad + nuevoProducto.cantidad }
                }
                return el
            })
            setCart(carritoActualizado)
        }else{
            setCart([...cart, nuevoProducto])
        }
    }
    const estaEnCarrito = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const removerItem = (id) => {
        const borrarItem = cart.filter((prod) => prod.id !== id)
        setCart([...borrarItem])
    }
    const getTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
        return total
    }
    const varciarCarrito = () => {
        setCart([])
    }

    const cantidadTotal = () => {
        let total =  0
        cart.forEach((prod) => {
            total = total + prod.cantidad
        })
        return total
    }
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

  return (
    <Context.Provider
        value ={{
            cart,
            addItem,
            removerItem, 
            getTotal, 
            varciarCarrito,
            cantidadTotal
        }} 
    >
        {children}
    </Context.Provider>
  )
}

export default Context