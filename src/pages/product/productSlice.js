import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    product : [],

}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers:{
        requestPending : (state) => {
            state.isLoading = true;
        },
        setProducts: (state, action) =>{
            state.product = action.payload;
            state.isLoading = false;

        } 
    }
})


const {reducer, actions } = productSlice;


export const { setProducts, requestPending} =  actions;

export default reducer;