import { createSlice } from '@reduxjs/toolkit'

export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    dishes: null,
  },
  reducers: {
    setDish: (state,action) => {
        state.dishes=action.payload;
        }
  },
})

// Action creators are generated for each case reducer function
export const { setDish } = dishSlice.actions

export default dishSlice.reducer