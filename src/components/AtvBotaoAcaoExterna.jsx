/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/

import { Pressable, View, Text, StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    botaozinho: {
        backgroundColor: "mediumpurple",
        borderRadius:"20px",
        maxWidth:"10vw" 
    },
    texto: {
        color: "white",
        fontSize:"20px"

    },
})

export default function AtvBotaoAcaoExterna({acao})
{
    return(<View>
        <Text style={estilo.texto}>
            Clique abaixo
        </Text>
        <Pressable onPress={acao} style={estilo.botaozinho}>
            <Text style={estilo.texto}>
                Clique aqui
            </Text>
        </Pressable>
    </View>)
        
}
