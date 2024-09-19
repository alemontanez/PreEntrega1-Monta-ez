/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from '../productsMock.js'
import { CartContext } from "../context/CartContext.jsx";
import ItemCount from "../components/ItemCount";

export default function ItemDetailView() {

  const [product, setProduct] = useState({})
  const { productId } = useParams()
  const [cart, setCart, addItem, , , isInCart] = useContext(CartContext)

  const [count, setCount] = useState(1)

  const handleClickInc = () => {
    if (count < product.stock) {
      setCount(count + 1)
    }
  }
  const handleClickDec = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const onAdd = (quantity) => {
    const productWithQuantity = {...product, quantity}
    const index = isInCart(product.id)

    if (index === -1) {
      addItem(productWithQuantity)
      console.log('se agregó')
    } else {
      const newCart = [...cart]
      const newQuantity = newCart[index].quantity + quantity

      if (newQuantity > newCart[index].stock) {
        alert('Se sobrepasó la cantidad de stock')
        return
      }

      newCart[index] = {
        ...newCart[index],
        quantity: newQuantity
      }
      setCart(newCart)
      console.log('Cantidad actualizada')
    }
  }

  useEffect(() => {
    setProduct(getProduct(productId))
  }, [productId])

  return (
    <>
      <div className="container">
        <div className="item-detail">
          <img src={product.image} alt="" />
          <h2>{product.title}</h2>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <ItemCount price={product.price} stock={product.stock} handleClickDec={handleClickDec} handleClickInc={handleClickInc} count={count} />
          <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
      </div>
    </>
  )
}