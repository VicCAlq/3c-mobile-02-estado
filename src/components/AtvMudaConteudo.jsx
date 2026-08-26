/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <View> com dois <Pressable> na horizontal, e abaixo destes dois botões mais uma <View>. 
Ao clicar no primeiro <Pressable>, a <View> de baixo deverá exibir um <Text> com o conteúdo "Página em construção". 
Ao clicar no segundo <Pressable>, o conteúdo dessa <View> deve ser substituído por três <View> dispostas lado a lado, 
onde cada uma destas <Views> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function AtvMudaConteudo() {
  const [opcao, setOpcao] = useState(0);

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => setOpcao(1)}>
          <Text>Botão 1</Text>
        </Pressable>
        <Pressable onPress={() => setOpcao(2)}>
          <Text>Botão 2</Text>
        </Pressable>
      </View>

      <View>
        {opcao === 1 && <Text>Página em construção</Text>}

        {opcao === 2 && (
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 200, height: 200, backgroundColor: "purple" }} />
            <View style={{ width: 200, height: 200, backgroundColor: "teal" }} />
            <View style={{ width: 200, height: 200, backgroundColor: "orange" }} />
          </View>
        )}
      </View>
    </View>
  );
}
