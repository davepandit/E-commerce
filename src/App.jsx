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

//testing purpose 

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
//importing the reducers
import { addElementToTheCart , deleteElementFromTheCart } from './reudx/slices/CartSlice'


function App() {
  const [count, setCount] = useState(0)
  //instance for the dispatch 
  const dispatch = useDispatch()

  //taking the data from the store
  const item = useSelector((state)=>(state.cart))
  console.log(item)


  //handler functions to note the events
  const addToCart = ()=>{
    dispatch(addElementToTheCart({
      name:"T-shirts",
      price:12,
      id:1
    }))
  }

  const deleteFromCart = ()=>{
    dispatch(deleteElementFromTheCart(item[0].id))
  }


  return (
    <>
    <div>
      <Navbar />
      <button onClick={addToCart} className='bg-red-100 p-4 ml-7'>Add</button>
      <button onClick={deleteFromCart} className='bg-red-100 p-4 ml-7'>Del</button>
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
