/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'

export const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState('')

  const addItem = (item) => {
    setCart([...cart, item])
  }

  const removeItem = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Una vez hecho no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro.",
      cancelButtonText: 'Cancelar.'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
        Swal.fire({
          title: "Producto eliminado.",
          text: "Se eliminó el producto del carrito.",
          icon: "success"
        });
      }
    });
  }

  const clearCart = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Una vez hecho no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro.",
      cancelButtonText: 'Cancelar.'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([])
        Swal.fire({
          title: "Carrito vacío.",
          text: "Se eliminó todos los productos del carrito.",
          icon: "success"
        });
      }
    });
  }

  const isInCart = (id) => {
    return cart.findIndex(prod => prod.id === id)
  }

  const totalToPay = () => {
    let total = 0
    cart.forEach(prod => {
      total += (prod.quantity * prod.price)
    })
    return total
  }

  const createNewOrder = (newOrder) => {

    Swal.fire({
      title: "¿Finalizar compra?",
      // text: "Una vez hecho no se puede revertir.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, newOrder).then((snapshot) => {
          setOrder(snapshot.id)
          const getDoc = doc(db, 'orders', snapshot.id)
          updateDoc(getDoc, {order: snapshot.id})
          Swal.fire({
            title: "Compra realizada con éxito.",
            text: `ID de compra: ${snapshot.id}`,
            icon: "success"
          });
        })
      }
    });

  }

  return (
    <CartContext.Provider value={[cart, setCart, addItem, removeItem, clearCart, isInCart, totalToPay, createNewOrder]}>
      {children}
    </CartContext.Provider>
  )
}
