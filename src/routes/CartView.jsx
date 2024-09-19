import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from '../components/CartItem'
import '../components/CartItem.css'

export default function CartView() {

  const [cart, , , removeItem, clearCart, , totalToPay] = useContext(CartContext)
  
  return (
    <>
      <div className="cart-container">
        <h2>Carrito</h2>
        {
          cart.length === 0 
          ? <p>El carrito se encuentra vacío.</p>
          : (
            <div>
              {cart.map(item => <CartItem key={item.id} item={item} removeItem={removeItem}/>)}
              <p>Precio final: ${totalToPay()}</p>
              <button>Finalizar compra</button>
              <button onClick={() => clearCart()}>Vaciar carrito</button>
            </div>
          )
        }
      </div>
    </>
  )
}