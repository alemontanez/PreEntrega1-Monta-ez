import { Link } from 'react-router-dom'

export default function Item({ product }) {

  return (
    <>
      <div className="card">
        <img src={product.imageUrl} alt="" />
        <h2>{product.title}</h2>
        <div>
          <Link to={`/product/${product.id}`}>
            <button><span>Ver detalle</span></button>
          </Link>
        </div>
      </div>
    </>
  )
}