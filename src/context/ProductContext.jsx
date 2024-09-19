/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react"
import { getProducts } from "../productsMock.js"

export const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])

  return (
    <ProductContext.Provider value = { [products, setProducts] }>
      {children}
    </ProductContext.Provider>
  )
}