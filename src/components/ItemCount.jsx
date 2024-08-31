/* eslint-disable react/prop-types */
import { useState } from "react"

export default function ItemCount( {price, stock, agregarAlCarrito} ) {
  const [count, setCount] = useState(1)

  const handleClickInc = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const handleClickDec = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div>
        <button onClick={handleClickDec}>-</button>
        <span> {count} </span>
        <button onClick={handleClickInc}>+</button>
      </div>
      {count !== 0 && <p>Total: ${price * count}</p>}
      <button onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
    </>
  )
}