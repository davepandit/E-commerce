import React from 'react'
import { useAppContext } from '../../context/AppContext'

const Home = () => {
  //establishing the link between the component and the state
  const connection = useAppContext()
  // console.log(connection)
  return (
    <>
      <div>
       home
      </div>
    </>
  )
}

export default Home