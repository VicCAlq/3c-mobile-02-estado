/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";

const telefoneCss = StyleSheet.create({
      view: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#303540",
    padding: 10,
    margin: 10,
    gap: 10,
  },

  texto: {
    color: "#eee",
     fontSize: 20,
  },

  textoBotao: {
    color: "#eee",
    fontSize: 16,
  },

  botao: {
    borderRadius: 5,
    backgroundColor: "#505560",
    padding: 10,
  },

  viewBotoes: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    marginRight: 10,
  },
})
export default function AtvTelefoneSemFio(){
    const [pagina, setPagina] = useState(0)
    const [texto1, setTexto1] = useState("")
    const [texto2, setTexto2] = useState("")

        function primeira(){
            setPagina(1)
        }
          function segunda(){
            setPagina(-1)
        }

    return(
        <View style={telefoneCss.view}>
            <View style={telefoneCss.viewBotoes}>
                <Pressable onPress={() => primeira()}  style={telefoneCss.botao}>
                    <Text> botão 1 </Text>
                </Pressable>
                <Pressable onPress={() => segunda()} style={telefoneCss.botao}>
                    <Text> botão 2 </Text>
                </Pressable>
                <View>
                    
                </View>
            </View>
           



            {pagina === 1 && (
               
            <View>
                <Text style={telefoneCss.texto}> {texto1} </Text>
                  <TextInput
                         style={telefoneCss.input}
                         value={texto2}
                         onChangeText={setTexto2}
                         placeholder="Nome aqui"
                       />
            </View>
             
            )}

            {pagina === -1 && (
                <View>
                <Text style={telefoneCss.texto}> {texto2} </Text>
                  <TextInput
                         style={telefoneCss.input}
                         value={texto1}
                         onChangeText={setTexto1}
                         placeholder="Nome aqui"
                       />
            </View>
            )}
        </View>

    )
}
