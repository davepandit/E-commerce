import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    //here we get an array of objects and along with that we also get the item id

]

const CartSlice = createSlice(
    {
        name:"cart",
        initialState:initialState,
        reducers:{
            //addding a particular element to the cart
            addElementToTheCart(state , action){
                state.push(action.payload)
            },
            //deleting a particular element from the cart
            deleteElementFromTheCart(state , action){
                return state.filter((item)=>(action.payload.id != state.itemId))//filter returns only those elements where written condition is matched

            }
        }
    }
)

export const {addElementToTheCart , deleteElementFromTheCart} = CartSlice.actions
export default CartSlice.reducer
