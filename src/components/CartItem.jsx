/* eslint-disable react/prop-types */
export default function CartItem({ item, removeItem }) {
  return (
    <>
      <div className="cart-card">
        <div>
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div>
          <h2>{item.title}</h2>
          <p>Valor unidad: {item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Valor: ${item.price * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}><span>Eliminar del carrito</span></button>
        </div>
      </div>
    </>
  )
}
