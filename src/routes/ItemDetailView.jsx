/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import { getProduct } from '../productsMock.js'
import { useEffect, useState } from "react";

export default function ItemDetailView() {

  const [product, setProduct] = useState({})
  const { productId } = useParams()
  const [cart, setCart] = useState(0)

  const onAdd = (addToCart) => {
    setCart(cart + addToCart)
    console.log(cart)
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
          <ItemCount price={product.price} stock={product.stock} agregarAlCarrito={onAdd} />
        </div>
      </div>
    </>
  )
}