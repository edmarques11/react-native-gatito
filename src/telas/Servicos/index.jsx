import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";

import { useSelector } from "react-redux";

let servicos = [];

export default function Servicos() {
  servicos = useSelector((state) => state.servicos.items);
  return (
    <>
      <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
