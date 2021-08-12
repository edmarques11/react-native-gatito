import React from 'react';
import { SafeAreaView, StatusBar, Text, FlatList } from 'react-native'
import Item from '../Item';

const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.9,
    descricao: 'Realizamos a higiene completa do seu pet'
  }, {
    id: 2,
    nome: 'Vacina V4',
    preco: 179.9,
    descricao: 'Imunize seu pet de varias doenças'
  },
  {
    id: 3,
    nome: 'Vacina antirábica',
    preco: 89.9,
    descricao: 'vacina contra raiva'
  }
]

export default function Servicos() {
  return <SafeAreaView>
    <StatusBar />
    <Text>Serviços!</Text>
    <FlatList
      data={servicos}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={({ item: id }) => toString(id)}
    />
  </SafeAreaView>
}