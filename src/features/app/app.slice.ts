import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
  name: "app",
  initialState: {
    error: null as null | string,
    isLoading: true,
    isAppInitialized: false,
  },
  reducers: {},
})

export const appReducer = slice.reducer
