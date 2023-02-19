
import { configureStore } from '@reduxjs/toolkit'
import tableReducer from "../Slice/gettableData";
const Store = configureStore({
    reducer: {
       data : tableReducer
    },
  })

  export default Store;