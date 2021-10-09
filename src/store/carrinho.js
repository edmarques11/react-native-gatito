import { createSlice } from "@reduxjs/toolkit";

export const carrinho = createSlice({
  name: 'carrinho',
  initialState: {
    items: [],
    finishRequest: false
  },
  reducers: {
    add(state, action) {
      const indexItemExists = state.items.findIndex((item) => item.id === action.payload.id)

      if (indexItemExists >= 0) {
        state.items[indexItemExists].quantidade += action.payload.quantidade
      } else {
        state.items.push(action.payload)
      }
      state.finishRequest = false
    },
    remove(state, { payload }) {
      const arrayFilter = state.items.filter(el => el.id !== payload)
      state.items = arrayFilter
    },
    changeFinishRequest(state) {
      state.finishRequest = !state.finishRequest

      if (state.finishRequest) {
        state.items = []
      }
    }
  }
});

export const actions = carrinho.actions;
export default carrinho.reducer