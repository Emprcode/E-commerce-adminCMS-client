import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items : [],
    isLoading: false
}

const itemsSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        requestPending : (state, action) => {
            state.isLoading = true
        },
        setItems: (state, action)=> {
            
            state.items = action.payload
            state.isLoading = false
        },
     
    }
})


const {reducer, actions} = itemsSlice

export const {requestPending, setItems} = actions


export default reducer;