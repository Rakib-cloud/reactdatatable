import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader:false,
    err:null,
    keys:[]
}

export const fetchtabledata = createAsyncThunk('fetchdata/data',async()=>{
    const res = await fetch('https://nafisa.selopian.us/product_formula',{
    method:'GET',
    headers:{
       // 'Authorization':bearer ${reduxtoken}
    }
})
const data = await res.json()
if (res.status===200) {
    return data
}
})

const gettableData = createSlice({
    name:'apidata',
    initialState,
    extraReducers:(builder=>{
        builder.addCase(fetchtabledata.pending,state=>{
            state.loader = true;
        })
        builder.addCase(fetchtabledata.fulfilled,(state,action)=>{
            state.loader = false;
            state.keys = action.payload;
        })
        builder.addCase(fetchtabledata.rejected,(state,action)=>{
            state.loader = false;
            state.keys = [];
            state.err = action.payload.error;
        })
    })
})


export default gettableData.reducer;