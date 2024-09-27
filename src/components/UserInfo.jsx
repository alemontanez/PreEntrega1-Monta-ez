/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function UserInfo({ cart, createNewOrder }) {

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
      <div>
        <h3>User Info</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
          <input type='text' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input type='text' placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='text' placeholder='Telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <button onClick={handleSubmit}>Finalizar compra</button>
        </div>
      </div>
    </>
  )
}