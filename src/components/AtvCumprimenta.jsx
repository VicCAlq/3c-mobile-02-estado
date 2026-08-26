/*
[ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <View>, onde dentro dela haverá um <Text> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <Text> deve haver um <TextInput> onde o usuário poderá digitar seu nome. 
Ao lado deste <TextInput> deve haver um <Pressable>, que ao ser apertado vai fazer um <Text> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <TextInput>.

Ordem visual dos elementos:

_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/

import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function AtvCumprimenta() {
  const [nome, setNome] = useState("");
  const [nomeConfirmado, setNomeConfirmado] = useState("");

  function aoClicarEmSalvar() {
    setNomeConfirmado(nome);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, qual seu nome?</Text>

      <View style={styles.linha}>
        <TextInput
          style={styles.input}
          placeholder="Nome aqui"
          value={nome}
          onChangeText={setNome}
        />

        <Pressable style={styles.botao} onPress={aoClicarEmSalvar}>
          <Text style={styles.textoBotao}>Salvar</Text>
        </Pressable>
      </View>

      {nomeConfirmado !== "" && (
        <Text style={styles.mensagem}>
          É um prazer lhe conhecer, {nomeConfirmado}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    marginBottom: 10,
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 8,
    width: 140,
    marginRight: 8,
    borderRadius: 4,
  },
  botao: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 4,
  },
  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
  },
  mensagem: {
    fontSize: 16,
  },
});
