/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function AtvDobra({ numero }) {
  const [valor, setValor] = useState(numero);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Número: {valor}</Text>

      <Pressable
        style={styles.botao}
        onPress={() => setValor(valor * 2)}
      >
        <Text style={styles.textoBotao}>Dobrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  texto: {
    fontSize: 20,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
