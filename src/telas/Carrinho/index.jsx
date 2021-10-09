import React from "react";
import { FlatList, Text } from "react-native";
import Item from "./Item";
import StatusCarrinho from "../../componentes/StatusCarrinho";
import { useSelector } from "react-redux";

let servicos = [];

export default function Carrinho() {
  servicos = useSelector((state) => state.carrinho.items);

  const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  );

  if (servicos && servicos.length > 0)
    return (
      <>
        <StatusCarrinho total={total} />
        <FlatList
          data={servicos}
          removeClippedSubviews={false}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={({ id }) => String(id)}
        />
      </>
    );
  else {
    return (
      <Text
        style={{
          fontSize: 22,
          flex: 1,
          alignSelf: "center",
        }}
      >
        Não tem nada qui seu bocó!!!
      </Text>
    );
  }
}
