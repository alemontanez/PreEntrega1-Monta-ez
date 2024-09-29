import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore'
import { CartContext } from "../context/CartContext.jsx";
import ItemDetail from "../components/ItemDetail.jsx";
import { db } from '../firebaseConfig.js'
import Swal from 'sweetalert2'

export default function ItemDetailView() {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
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
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado al carrito.",
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      const newCart = [...cart]
      const newQuantity = newCart[index].quantity + quantity

      if (newQuantity > newCart[index].stock) {
        Swal.fire({
          title: "Ocurrió un problema",
          text: "Se sobrepasó la cantidad de stock indicada.",
          icon: "error"
        });
        return
      }

      newCart[index] = {
        ...newCart[index],
        quantity: newQuantity
      }
      setCart(newCart)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cantidad actualizada.",
        showConfirmButton: false,
        timer: 1500
      })
    }
    setCount(1)
  }

  useEffect(() => {
    const getProduct = doc(db, 'products', productId)
    getDoc(getProduct).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({id: snapshot.id, ...snapshot.data()})
      }
      setLoading(false)
    })
  }, [productId])

  if (loading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    )
  } else {
    return (
      <>
        <ItemDetail product={product} handleClickDec={handleClickDec} handleClickInc={handleClickInc} count={count} onAdd={onAdd}/>
      </>
    )
  }
}