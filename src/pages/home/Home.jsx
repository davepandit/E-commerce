import React from 'react'
import { useAppContext } from '../../context/AppContext'
import HeroBanner from '../../components/herobanner/HeroBanner'

const Home = () => {
  //establishing the link between the component and the state
  const connection = useAppContext()
  // console.log(connection)
  return (
    <>
      <div>
       <HeroBanner />
      </div>
    </>
  )
}

export default Home