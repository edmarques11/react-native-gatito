import React from 'react';
import { TextInput } from 'react-native';

export default function CampoInteiro({ valor, acao }) {
  const atualiza = (novoValor, acaoRetorno) => {
    const verificacaoInteiro = novoValor.match(/^[0-9]*$/);
    if (!verificacaoInteiro) return;

    const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2')
    acaoRetorno(removeZeroEsquerda);
  }

  const numeroEmTexto = String(valor);

  return <TextInput
    keyboardType="number-pad"
    selectTextOnFocus
    onChangeText={(novoValor) => atualiza(novoValor, acao)}
    value={numeroEmTexto}
  />
}