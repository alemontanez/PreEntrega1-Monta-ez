/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export default function Item({ product }) {

  return (
    <>
      <div className="card">
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>Precio: ${product.price}</p>
        <Link to={`/product/${product.id}`}>
          <button>Ver detalle</button>
        </Link>
      </div>
    </>
  )
}