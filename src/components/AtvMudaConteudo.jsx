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

const Estilinhos = StyleSheet.create({
botoes:{
    borderRadius: 5,
    backgroundColor: "#505560",
    padding: 10,
},
direita:{
    width: 200,
    height: 200,
    backgroundColor: "purple" 
},
meio:{
    width: 200,
    height: 200,
    backgroundColor: "teal" 
},
esquerda:{
    width: 200,
    height: 200,
    backgroundColor: "orange" 
},
 texto: {
    color: "#eee",
     fontSize: 20,
  },
})

export default function AtvMudaConteudo(){
    const [pagina, setPagina] = useState(0)

        function primeira(){
            setPagina(1)
        }
          function segunda(){
            setPagina(-1)
        }

    return(
        <View>
            <View style={{flexDirection: "row"}}>
                <Pressable onPress={() => primeira()} style={Estilinhos.botoes}>
                    <Text> botão 1 </Text>
                </Pressable>
                <Pressable onPress={() => segunda()} style={Estilinhos.botoes}>
                    <Text> botão 2 </Text>
                </Pressable>
            </View>
           



            {pagina === 1 && (
                <Text style={Estilinhos.texto}>Página em construção</Text>
            )}

            {pagina === -1 && (
                <View style={{ flexDirection: "row" }}>
                    <View style={Estilinhos.direita} />
                      <View style={Estilinhos.meio} />
                      <View style={Estilinhos.esquerda} />
                </View>
            )}
        </View>

    )
}