import React from 'react'
import { useAppContext } from '../../context/AppContext'
import HeroBanner from '../../components/herobanner/HeroBanner'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/product/Product'
import Testimonials from '../../components/testimonials/Testimonials'

const Home = () => {
  //establishing the link between the component and the state
  const connection = useAppContext()
  // console.log(connection)
  return (
    <>
      <div>
       <HeroBanner />
       <Filter />
       <ProductCard />
       <Testimonials />
      </div>
    </>
  )
}

export default Home