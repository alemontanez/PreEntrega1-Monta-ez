/* eslint-disable react/prop-types */
import ItemCount from './ItemCount'
import './itemDetail.css'

export default function ItemDetail({ product, handleClickDec, handleClickInc, count, onAdd }) {

  return (
    <>
      <div className="item-container">
        <div className='item-card'>
          <img src={product.imageUrl} alt="" />
          <h2>{product.title}</h2>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <ItemCount  handleClickDec={handleClickDec} handleClickInc={handleClickInc} count={count} />
          <button onClick={() => onAdd(count)}><span>Agregar al carrito</span></button>
        </div>
      </div>
    </>
  )
}