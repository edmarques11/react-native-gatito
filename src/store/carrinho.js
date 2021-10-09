import { createSlice } from "@reduxjs/toolkit";

export const carrinho = createSlice({
  name: 'carrinho',
  initialState: {
    items: []
  },
  reducers: {
    add(state, action) {
      const itemExists = state.items.findIndex((item) => item.id === action.payload.id)

      if (itemExists >= 0) {
        state.items[itemExists].quantidade += action.payload.quantidade
      } else {
        state.items.push(action.payload)
      }
    },
    remove(state, { payload }) {
      const indexRemove = state.items.findIndex(item => {
        return item.id === payload
      })

      if (indexRemove >= 0) {
        if (state.items.length === 1) {
          state.items = []
        } else {
          state.items = state.items.splice(indexRemove, 1)
        }
        console.log(state.items)
      }
    }
  }
});

export const actions = carrinho.actions;
export default carrinho.reducer