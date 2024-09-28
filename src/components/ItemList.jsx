import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebaseConfig'
import Item from "./Item";

export default function ItemList() {

  const { categoryId } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (categoryId) {
      const productsCollection = query(collection(db, 'products'), where('category', '==', categoryId))
      getDocs(productsCollection).then((snapshot) => {
        if (snapshot.size === 0) {
          console.error('no hay productos')
        }
        setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      })
    } else {
      const productsCollection = collection(db, 'products')
      getDocs(productsCollection).then((snapshot) => {
        if (snapshot.size === 0) {
          console.error('no hay productos')
        }
        setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      })
    }
  }, [categoryId])

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