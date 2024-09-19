import { Link } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from "../context/CartContext"

export default function CartWidget() {

  const [cart] = useContext(CartContext)

  return (
    <>
        <Link to={'/cart'}>
         <button>
            <span>🛒</span>
            {cart.length > 0 && <span>{cart.length}</span>}
          </button>
        </Link>
    </>
  )
}