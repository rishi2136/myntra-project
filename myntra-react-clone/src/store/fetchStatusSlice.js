import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currFetching = false;
    }
  }
})

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;