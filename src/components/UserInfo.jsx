/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function UserInfo({ cart, createNewOrder, clearCart }) {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const handleSubmit = () => {
    const order = {
      buyer: {
        nombre,
        apellido,
        email,
        telefono
      },
      items: cart,
      creadoEn: new Date()
    }
    createNewOrder(order)
  }

  return (
    <>
      <div className='user-form'>
        <h3>Datos de compra:</h3>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30 }}>
          <input type='text' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input type='text' placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='text' placeholder='Telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <button onClick={handleSubmit}><span>Finalizar compra</span></button>
          <button onClick={() => clearCart()}><span>Vaciar carrito</span></button>
        </div>
      </div>
    </>
  )
}