/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/

import { useState } from "react";
import { View, Pressable, Text, TextInput } from "react-native";

export default function AtvTelefoneSemFio() {
  const [lado, setLado] = useState(1);
  const [txt1, setTxt1] = useState("");
  const [txt2, setTxt2] = useState("");

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => setLado(1)}>
          <Text>{txt1}</Text>
        </Pressable>

        <Pressable onPress={() => setLado(2)}>
          <Text>{txt2}</Text>
        </Pressable>
      </View>

      <View>
        {lado === 1 ? (
          <>
            <Text />
            <TextInput
              value={txt1}
              onChangeText={setTxt1}
            />
          </>
        ) : (
          <>
            <Text />
            <TextInput
              value={txt2}
              onChangeText={setTxt2}
            />
          </>
        )}
      </View>
    </View>
  );
}