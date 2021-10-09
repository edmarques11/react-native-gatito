import { createSlice } from "@reduxjs/toolkit";

export const servicos = createSlice({
  name: 'servicos',
  initialState: {
    items: [
      {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não de banho no seu gato! Mas se precisar nos damos.",
      },
      {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
      },
      {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica.",
      },
    ]
  },
  reducers: {

  }
});

export const actions = servicos.actions;
export default servicos.reducer