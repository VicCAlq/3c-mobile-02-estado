/*
[ATIVIDADE MUDA CONTEÚDO]


Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento.
Este componente deve exibir uma <View> com dois <Pressable> na horizontal, e abaixo destes dois botões
mais uma <View>. Ao clicar no primeiro <Pressable>, a <View> de baixo deverá exibir um <Text> com o conteúdo
"Página em construção".


Ao clicar no segundo <Pressable>, o conteúdo dessa <View> deve ser substituído por três <View>
 dispostas lado a lado,
onde cada uma destas <Views> deve ter o tamanho de 200px de altura por 200px de largura,
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/


import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'


const estilos = StyleSheet.create ({
     texto: {
       color:'purple',
        fontSize: "15px",
         fontWeight:'bold',
         textAlign:'center'  
    },
    textob: {
       color:'lavender',
        fontSize: "15px",
         fontWeight:'bold',
         textAlign:'center'  
    },
   botao: {
        padding: '12px',
        borderRadius: '20px',
        backgroundColor: 'violet',
        margin: '5px',
        marginHorizontal:'50px',
       
       
    },
    view:{
      backgroundColor:'#bb5cd3',
       flexDirection: 'row',
       justifyContent:'center',
       padding:'10px',
        borderRadius: '15px',
    },
    view2:{
      backgroundColor:'#d065eb',
      padding:'10px',
      borderRadius: '15px',
    },
    viewE:{
        backgroundColor:'purple',
        height:'200px',
        width: '200px'
    },
    viewM:{
        backgroundColor:'teal',
        height:'200px',
        width: '200px'
    },
    viewD:{
        backgroundColor:'orange',
        height:'200px',
        width: '200px'
    }
})


export default function AtvMudaConteudo () {
    const [conteudo, setConteudo] = useState (0);
    return (
      <View>
        <View style = {estilos.view}>
            <Pressable style = {estilos.botao}
             onPress= {() => setConteudo(1)} >
                <Text style = {estilos.textob}>Botão 1</Text>
            </Pressable>


            <Pressable style = {estilos.botao}
            onPress = {() => setConteudo(2)}>
                <Text style = {estilos.textob}>Botão 2!</Text>
            </Pressable>


        </View>
         <View style = {estilos.view2}>
               {conteudo == 1 && (
                   
                        <Text style = {estilos.texto}>Página em construção</Text> )}
               
                {conteudo == 2 && (
                <View style = {estilos.view}>
                     <View style = {estilos.viewE}></View>
                     <View style = {estilos.viewM}></View>
                     <View style = {estilos.viewD}></View>
                </View>
                                  )}
            </View>
        </View>
    )
}


