import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchsParagh = createAsyncThunk('text/fetchParagh' , async (num1,format) => {
    return  await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${num1}&format=${format}`)
})


export const paragSlice = createSlice({
    name : "paragSlice",
    initialState:{
        data:[],
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(fetchsParagh.fulfilled, (state,action)=>{
            state.data = action.payload.data
        })
    }   
})

export const {  } = paragSlice.actions

export default paragSlice.reducer