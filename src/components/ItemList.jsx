import { useContext, useEffect } from "react";
import Item from "./Item";
import { getCategory, getProducts } from "../productsMock.js";
import { ProductContext } from "../context/ProductContext.jsx";
import { useParams } from "react-router-dom";

export default function ItemList() {

  const { categoryId } = useParams()
  const [products, setProducts] = useContext(ProductContext)

  useEffect(() => {
    if (categoryId) {
      setProducts(getCategory(categoryId))
    } else {
      getProducts().then((data) => setProducts(data))
    }
  }, [categoryId, setProducts])

  return (
    <>
      {
        products.map(product =>
          <Item key={product.id} product={product} />
        )
      }
    </>
  )
}