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
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function AtvMudaConteudo() {
  const [conteudo, setConteudo] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <Pressable
          style={styles.botao}
          onPress={() => setConteudo("texto")}
        >
          <Text style={styles.textoBotao}>Página</Text>
        </Pressable>

        <Pressable
          style={styles.botao}
          onPress={() => setConteudo("cores")}
        >
          <Text style={styles.textoBotao}>Cores</Text>
        </Pressable>
      </View>

      <View style={styles.areaConteudo}>
        {conteudo === "texto" && (
          <Text style={styles.texto}>Página em construção</Text>
        )}

        {conteudo === "cores" && (
          <View style={styles.linhaCores}>
            <View style={[styles.quadrado, { backgroundColor: "purple" }]} />
            <View style={[styles.quadrado, { backgroundColor: "teal" }]} />
            <View style={[styles.quadrado, { backgroundColor: "orange" }]} />
          </View>
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
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },

  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },

  areaConteudo: {
    alignItems: "center",
  },

  texto: {
    fontSize: 20,
  },

  linhaCores: {
    flexDirection: "row",
  },

  quadrado: {
    width: 200,
    height: 200,
  },
});
