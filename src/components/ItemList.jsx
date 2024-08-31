import { useState, useEffect } from "react";
import Item from "./Item";
import { getAllProducts, getCategory } from "../productsMock.js";
import { useParams } from "react-router-dom";

export default function ItemList() {

  const { categoryId } = useParams()

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    if (categoryId) {
      setAllProducts(getCategory(categoryId))
    } else {
      getAllProducts
      .then((data) => setAllProducts(data))
    }
  }, [categoryId])

  return (
    <>
      {
        allProducts.map(product =>
          <Item key={product.id} id={product.id} title={product.title} stock={product.stock} price={product.price} img={product.image} />
        )
      }
    </>
  )
}