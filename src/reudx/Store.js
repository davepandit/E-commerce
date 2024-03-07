import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./slices/CartSlice"

//creating a store
const Store = configureStore({
    reducer:{
        //name of the reducer : nae of the slice
        cart:cartReducer

    }
})

export default Store