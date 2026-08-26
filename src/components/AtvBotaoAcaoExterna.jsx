/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/

import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export default function AtvTelefoneSemFio() {
  const [aba, setAba] = useState(1);
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => setAba(1)}><Text>Botão 1</Text></Pressable>
        <Pressable onPress={() => setAba(2)}><Text>Botão 2</Text></Pressable>
      </View>

      {aba === 1 && (
        <View>
          <Text>{t2}</Text>
          <TextInput onChangeText={setT1} value={t1} />
        </View>
      )}

      {aba === 2 && (
        <View>
          <Text>{t1}</Text>
          <TextInput onChangeText={setT2} value={t2} />
        </View>
      )}
    </View>
  );
}
