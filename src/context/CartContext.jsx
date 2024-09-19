/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart([...cart, item])
  }

  const removeItem = (id) => {
    const updatedCart = cart.filter(prod => prod.id !== id)
    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
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

  return (
    <CartContext.Provider value={[cart, setCart, addItem, removeItem, clearCart, isInCart, totalToPay]}>
      {children}
    </CartContext.Provider>
  )
}
