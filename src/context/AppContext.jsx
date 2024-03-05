import React, { useState } from 'react'
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

     //making of the dark theme 
     const [mode , setMode] = useState("light")

     //toggle the theme
    const toggleMode = ()=>{
      if(mode === "light"){
        setMode("dark")
        document.body.style.backgroundColor = "rgb(17 , 24 , 39)"
        document.body.style.color = "white"
  
       }
       else{
        setMode("light")
        document.body.style.backgroundColor = "white"
        document.body.style.color = "rgb(17 , 24 , 39)"
       }
  

    }

     
    
  return (
    <AppContext.Provider value={{mode , setMode , toggleMode}}>
        {props.children}

    </AppContext.Provider>
  )
}


export {useAppContext}
export default AppContextProvider