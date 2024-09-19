const products = [
  {
    id: 1,
    title: 'Remera',
    stock: 5,
    price: 2000,
    category: 'verano',
    image: 'https://picsum.photos/id/13/200/200'
  },
  {
    id: 2,
    title: 'Buzo',
    stock: 3,
    price: 4000,
    category: 'invierno',
    image: 'https://picsum.photos/id/10/200/200'
  },
  {
    id: 3,
    title: 'Short',
    stock: 6,
    price: 1500,
    category: 'verano',
    image: 'https://picsum.photos/id/12/200/200'
  },
  {
    id: 4,
    title: 'Campera',
    stock: 10,
    price: 3000,
    category: 'invierno',
    image: 'https://picsum.photos/id/14/200/200'
  }
]

export const getProducts = async() => {
  return new Promise((resolve) => {
    resolve(products)
  })
}

export const getProduct = (id) => {
  return products.find(product => product.id == id)
}

export const getCategory = (category) => {
  return products.filter(product => product.category == category)
}