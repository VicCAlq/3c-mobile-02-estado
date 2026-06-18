/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <View> com dois <Pressable> na horizontal, e abaixo destes dois botões mais uma <View>. 
Ao clicar no primeiro <Pressable>, a <View> de baixo deverá exibir um <Text> com o conteúdo "Página em construção". 
Ao clicar no segundo <Pressable>, o conteúdo dessa <View> deve ser substituído por três <View> dispostas lado a lado, 
onde cada uma destas <Views> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import { useState } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

const estilo = StyleSheet.create({
    div1: {
        backgroundColor:"grey",
        padding:"10px",
        borderRadius:"5px",
        justifyContent:"center"
    },
    div2:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        gap:'10px'
    },
    botao:{
        backgroundColor:"black",
        borderRadius:'5px',
        color:'white',
        padding:"10px"
    },
    div3:{
        paddingTop:'10px',
        justifyContent:'center',
        alignItems:'center'
    },
    div4:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        gap:'20px'
    },
    view:{
        height:"200px",
        width:'200px',
    },
    viewEsquerda:{
        backgroundColor:'purple'
    },
    viewMeio:{
        backgroundColor:'teal'
    },
    viewDireita:{
        backgroundColor:'orange'
    }
})

export default function AtvMudaConteudo({}){

    const [conteudo, setConteudo] = useState(0)

    const paginaRenderizada = ()=>{
        if(conteudo === 1){
            return <View>
                <Text>
                    Página em construção
                </Text>
            </View>
        } else if(conteudo === 2) {
            return <View style={estilo.div4}>
                <View style={[estilo.view, estilo.viewEsquerda]} />
                <View style={[estilo.view, estilo.viewMeio]} />
                <View style={[estilo.view, estilo.viewDireita]} />
            </View>
        }
    }

    return(
        <View style={estilo.div1}>
            <View style={estilo.div2}>
                <Pressable style={estilo.botao} onPress={() => setConteudo(1)}> a </Pressable>
                <Pressable style={estilo.botao} onPress={() => setConteudo(2)}> b </Pressable>
            </View>
            <View style={estilo.div3}>
                {paginaRenderizada()}
            </View>
        </View>
    )
}