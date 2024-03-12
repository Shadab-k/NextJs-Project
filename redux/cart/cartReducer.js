import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    SET_CART: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export default CartSlice.reducer;