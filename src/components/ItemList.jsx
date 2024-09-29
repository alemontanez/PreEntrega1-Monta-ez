import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import Item from "./Item";

export default function ItemList() {

  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, 'products')
      const productsQuery = categoryId
        ? query(productsCollection, where('category', '==', categoryId))
        : productsCollection

      const snapshot = await getDocs(productsQuery)
      if (snapshot.size !== 0) {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      }
    } catch (error) {
      console.error('Error al obtener los productos: ', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [categoryId])

  if (loading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    )
  } else {
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
}