import { useState } from 'react'
import {Routes , Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from './pages/home/Home'
import Orders from './pages/orders/Orders'
import  Cart  from './pages/cart/Cart'
import Dashboard from './pages/dashboard/Dashboard'
import Footer from "./components/footer/Footer"
import ErrorPage from "./pages/error/ErrorPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
      <Footer />
      
    </div>
    </>
  )
}

export default App
