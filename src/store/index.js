import { configureStore } from "@reduxjs/toolkit";
import servicos from './servicos'
import carrinho from "./carrinho";

export const store = configureStore({
  reducer: {
    servicos,
    carrinho
  }
});