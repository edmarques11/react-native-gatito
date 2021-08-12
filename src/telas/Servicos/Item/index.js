import React from 'react';
import { Text } from 'react-native';

export default function Item({ nome, preco, descricao }) {

  return <>
    <Text>{nome}</Text>
    <Text>{descricao}</Text>
    <Text>{preco}</Text>
  </>
}