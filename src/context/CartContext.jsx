/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'
import { db } from '../firebaseConfig'

export const CartContext = createContext()

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  const addItem = (item) => {
    setCart([...cart, item])
  }

  const removeItem = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se eliminará el producto del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar producto",
      cancelButtonText: 'Cancelar'
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
      title: "¿Estás seguro?",
      text: "Se eliminarán todos los productos del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vaciar carrito",
      cancelButtonText: 'Cancelar'
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
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        const orders = collection(db, 'orders')
        addDoc(orders, newOrder).then((snapshot) => {
          const getDoc = doc(db, 'orders', snapshot.id)
          updateDoc(getDoc, {order: snapshot.id})
          Swal.fire({
            title: "Compra realizada con éxito.",
            text: `ID de compra: ${snapshot.id}`,
            icon: "success"
          });
        })
        setTimeout(() => {
          setCart([])
          navigate('/')
        }, 1000)
      }
    });
  }

  return (
    <CartContext.Provider value={[cart, setCart, addItem, removeItem, clearCart, isInCart, totalToPay, createNewOrder]}>
      {children}
    </CartContext.Provider>
  )
}
