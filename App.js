import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
// import reactotron from 'reactotron-react-native';

import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/Rotas';

import { Provider } from "react-redux";
import { store } from './src/store';

// reactotron.configure().useReactNative().connect();
// console.tron = reactotron;

export default function App() {
  // reactotron.log("alura");
  return (
    <Provider store={store}>
      <TelaPadrao><Rotas /></TelaPadrao>
    </Provider>
  )
}