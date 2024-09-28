import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from '../components/CartItem'
import '../components/Cart.css'
import { Link } from "react-router-dom"
import UserInfo from "../components/UserInfo"

export default function CartView() {

  const [cart, , , removeItem, clearCart, , totalToPay, createNewOrder] = useContext(CartContext)

    return (
      <>
        <h1 className="cart-title">Carrito</h1>
        <div className="cart-container">
          {
            cart.length === 0 
            ? (
              <div>
                <p>El carrito se encuentra vacío.</p>
                <Link to='/'>
                  <p>Volver a los productos.</p>
                </Link>
              </div>
            )
            : (
              <>
              <div>
                {cart.map(item => <CartItem key={item.id} item={item} removeItem={removeItem}/>)}
              </div>
              <div className="cart-final">
                  <p>Precio final: ${totalToPay()}</p>
                  <div>
                    <UserInfo cart={cart} createNewOrder={createNewOrder} clearCart={clearCart}/>
                  </div>
              </div>
              </>
            )
          }
        </div>
      </>
    )  
}