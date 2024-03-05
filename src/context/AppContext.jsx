import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import App from '../App'

//creating a context
const AppContext = createContext(null)

//state for testing 
// const state = {
//     name:"Dave",
//     rollNo:12
// }


//creating a custom hook
const useAppContext = ()=>{
    return useContext(AppContext)
}


const AppContextProvider = (props) => {
    // console.log(props)
    
  return (
    <AppContext.Provider value={{}}>
        {props.children}

    </AppContext.Provider>
  )
}


export {useAppContext}
export default AppContextProvider