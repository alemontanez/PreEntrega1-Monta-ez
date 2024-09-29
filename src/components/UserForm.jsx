import { useForm } from 'react-hook-form'

export default function UserForm({ cart, createNewOrder, clearCart }) {

  const { register, handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    const order = {
      customer: data,
      items: cart,
      created: new Date()
    }
    createNewOrder(order)
  })

  return (
    <>
      <div>
        <button onClick={() => clearCart()}><span>Vaciar carrito</span></button>
      </div>
      <h3>Datos de compra:</h3>
      <form className='user-form' onSubmit={onSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          {...register('nombre', {
            required: {
              value: true,
              message: 'Nombre es requerido'
            },
            minLength: {
              value: 2,
              message: 'Nombre debe tener al menos 2 caracteres'
            },
            maxLength: {
              value: 20,
              message: 'Nombre debe tener máximo 20 caracteres'
            }
          })}
        />
        {
          errors.nombre && <span>{errors.nombre.message}</span>
        }
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          {...register('apellido', {
            required: {
              value: true,
              message: 'Apellido es requerido'
            },
            minLength: {
              value: 2,
              message: 'Apellido debe tener al menos 2 caracteres'
            },
            maxLength: {
              value: 20,
              message: 'Apellido debe tener máximo 20 caracteres'
            }
          })}
        />
        {
          errors.apellido && <span>{errors.apellido.message}</span>
        }
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          {...register('correo', {
            required: {
              value: true,
              message: 'Correo es requerido'
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Correo no válido'
            }
          })}
        />
        {
          errors.correo && <span>{errors.correo.message}</span>
        }
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          {...register('telefono', {
            required: {
              value: true,
              message: 'Teléfono es requerido'
            },
            pattern: {
              value: /^\d{6,15}$/,
              message: 'Teléfono no válido'
            }
          })}
        />
        {
          errors.telefono && <span>{errors.telefono.message}</span>
        }
        <div>
          <button ><span>Finalizar compra</span></button>
        </div>
      </form>
    </>
  )
}
