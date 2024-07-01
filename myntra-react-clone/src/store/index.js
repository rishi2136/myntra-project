import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./BagSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import itemsSlice from "./itemsSlice";

let myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer
  }
})


export default myntraStore;