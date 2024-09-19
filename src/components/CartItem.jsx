/* eslint-disable react/prop-types */
export default function CartItem({ item, removeItem }) {
  return (
    <>
      <div className="cart-card">
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Valor: ${item.price * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar del carrito</button>
        </div>
      </div>
    </>
  )
}
