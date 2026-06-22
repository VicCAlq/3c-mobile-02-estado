/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <View> com dois <Pressable> na horizontal, e abaixo destes dois botões mais uma <View>. 
Ao clicar no primeiro <Pressable>, a <View> de baixo deverá exibir um <Text> com o conteúdo "Página em construção". 
Ao clicar no segundo <Pressable>, o conteúdo dessa <View> deve ser substituído por três <View> dispostas lado a lado, 
onde cada uma destas <Views> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/
import { useState } from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'

const style = StyleSheet.create({
    view1: {
        flexDirection: "row",
    },

    pressable: {backgroundColor:"orange"},

    ViewP:
    {
        height: 200,
        width: 200,
        backgroundColor: "purple"
    },
    ViewT: {
        height: 200,
        width: 200,
        backgroundColor: "teal"
    },
    ViewO: {
        height: 200,
        width: 200,
        backgroundColor: "orange"
    }
})
export default function AtvMudaConteudo()
{
    const [pag, setPag] = useState("")
    const [view, setView] = useState()


    return(
        <View style={style.view1}>
            <Pressable onPress={() => setPag("Página em construção")}>
                <Text>Botão 1</Text>
            </Pressable>
            <Pressable onPress={() => setPag("") && setView(<View>
                <View style={style.ViewP}></View>
                <View style={style.ViewT}></View>
                <View style={style.ViewO}></View>
            </View>)}>
                <Text>Botão 2</Text>
            </Pressable>

            <View>
                {view}
                <Text>{pag}</Text></View>
        </View>
        
    )
}