import { useState } from 'react'
import {Routes , Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from './pages/home/Home'
import Orders from './pages/orders/Orders'
import  Cart  from './pages/cart/Cart'
import Dashboard from './pages/dashboard/Dashboard'
import Footer from "./components/footer/Footer"
import ErrorPage from "./pages/error/ErrorPage"
import Allproducts from "./pages/allproducts/Allproducts"
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProduct from './pages/addproducts/Addproducts'
import UpdateProduct from './pages/updateproducts/UpdateProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Orders />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/allproducts' element={<Allproducts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/productinfo/:id' element={<ProductInfo />} />
        <Route path='/updateproduct' element={<UpdateProduct />} />
        <Route path='/addproduct' element={<AddProduct />} />


      </Routes>
      <Footer />
      
    </div>
    </>
  )
}

export default App
