/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

export default function CartItem({ item, removeItem }) {

  const [cart, setCart, , , , isInCart] = useContext(CartContext)
  const [count, setCount] = useState(item.quantity)

  const index = isInCart(item.id)

  const handleClickInc = () => {
    if (count < item.stock) {
      setCount(count + 1)
      const newCart = [...cart]
      newCart[index].quantity = count + 1
      setCart(newCart)
    }
  }
  const handleClickDec = () => {
    if (count > 1) {
      setCount(count - 1)
      const newCart = [...cart]
      newCart[index].quantity = count - 1
      setCart(newCart)
    }
  }

  return (
    <>
      <div className="cart-card">
        <div>
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div>
          <h2>{item.title}</h2>
          <p>Valor unidad: {item.price}</p>
          <ItemCount handleClickDec={handleClickDec} handleClickInc={handleClickInc} count={count}/>
          <p>Valor: ${item.price * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}><span>Eliminar del carrito</span></button>
        </div>
      </div>
    </>
  )
}
