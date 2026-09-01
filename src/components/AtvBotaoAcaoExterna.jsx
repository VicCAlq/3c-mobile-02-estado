/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/

import React, { useState } from "react";
import {
  View,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

export default function AtvTelefoneSemFio() {
  const [ativo, setAtivo] = useState(null); // 1 ou 2
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");

  return (
    <View style={styles.container}>
      {/* Botões lado a lado */}
      <View style={styles.botoes}>
        <Pressable
          style={styles.botao}
          onPress={() => setAtivo(1)}
        >
          <Text>Botão 1</Text>
        </Pressable>

        <Pressable
          style={styles.botao}
          onPress={() => setAtivo(2)}
        >
          <Text>Botão 2</Text>
        </Pressable>
      </View>

      {/* Área abaixo dos botões */}
      <View style={styles.areaInferior}>
        {ativo === 1 && (
          <>
            <Text>Texto recebido do Botão 2:</Text>
            <Text style={styles.mensagem}>{texto2}</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite para o Botão 2"
              value={texto1}
              onChangeText={setTexto1}
            />
          </>
        )}

        {ativo === 2 && (
          <>
            <Text>Texto recebido do Botão 1:</Text>
            <Text style={styles.mensagem}>{texto1}</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite para o Botão 1"
              value={texto2}
              onChangeText={setTexto2}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 8,
  },
  areaInferior: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    marginTop: 10,
    padding: 8,
    borderRadius: 5,
  },
  mensagem: {
    marginTop: 8,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
