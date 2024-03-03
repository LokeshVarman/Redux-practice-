import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";

 const store=configureStore({
    devTools:true,
    reducer:{
        customers:customerReducer
    }
})

export default store;