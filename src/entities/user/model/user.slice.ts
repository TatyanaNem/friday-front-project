import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: true,
    profile: null as null | ProfileType,
    isLoading: false,
  } as InitialState,
  reducers: {},
})

//types
type InitialState = {
  profile?: null | ProfileType
  isAuth?: boolean
  isLoading?: boolean
}

type ProfileType = {
  name: string
  avatar: string
}

export const userReducer = userSlice.reducer
