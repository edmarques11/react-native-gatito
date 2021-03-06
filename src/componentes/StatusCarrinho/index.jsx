import React from "react";
import { Text, View } from "react-native";
import Botao from "../Botao";
import estilos from "./estilos";
import { useDispatch } from "react-redux";
import { actions } from "../../store/carrinho";

export default function StatusCarrinho({ total }) {
  const dispatch = useDispatch();

  return (
    <View style={estilos.conteudo}>
      <View style={estilos.total}>
        <Text style={estilos.descricao}>Total do carrinho: </Text>
        <Text style={estilos.valor}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </Text>
      </View>
      <View style={estilos.botao}>
        <Botao
          valor="Concluir Pedido"
          invertido
          acao={() => dispatch(actions.changeFinishRequest())}
        />
      </View>
    </View>
  );
}
