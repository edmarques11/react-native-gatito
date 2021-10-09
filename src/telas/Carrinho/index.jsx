import React from "react";
import { FlatList, Text, View } from "react-native";
import Item from "./Item";
import StatusCarrinho from "../../componentes/StatusCarrinho";
import { useSelector } from "react-redux";
import { cores } from "../../estilos";

let servicos = [];

export default function Carrinho() {
  servicos = useSelector((state) => state.carrinho.items);
  const finishRequest = useSelector((state) => state.carrinho.finishRequest);

  const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  );
  if (!finishRequest) {
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
        <View
          style={{
            flex: 1,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: cores.laranja,
              fontWeight: "bold",
            }}
          >
            Não tem nada por aqui!!!😕
          </Text>
        </View>
      );
    }
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: cores.laranja,
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Concluído ✅
        </Text>
      </View>
    );
  }
}
