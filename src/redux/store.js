import { configureStore } from "@reduxjs/toolkit";
import paragSlice  from "./paragSlice"
export const store = configureStore({
    reducer:{
        paragSlice: paragSlice
    }
})