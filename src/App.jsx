// import { useState } from 'react'
import NavBar from './components/NavBar'
import HomeView from './routes/HomeView'
import ItemDetailView from './routes/ItemDetailView'
import CartView from './routes/CartView'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/category/:categoryId' element={<HomeView />} />
          <Route exact path='/product/:productId' element={<ItemDetailView />} />
          <Route exact path='/cart' element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App