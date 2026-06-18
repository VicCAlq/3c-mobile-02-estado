/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/

import { useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native";
const estilo = StyleSheet.create({
    botoes:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        margin:'10px',
        padding: '10px',
        gap:'10px'
    },
    botao:{
        backgroundColor:'white',
        padding:'10px'
    },
    view:{
         backgroundColor:'gray',
         alignItems:"center"
    },
    output:{
        color:"white",
        padding:"10px",
        gap:"10px"
    }
})

export default function AtvTelefoneSemFio({}){

    const [subs, setSubs] = useState(0)
    const [texto, setTexto]  = useState("")
    const [texto2, setTexto2] = useState("")

    const paginaRender = () => {
        if(subs === 1){
            return < >
                <Text> {texto2} </Text> 
                <TextInput 
                placeholder="Digite uma cor"
                value={texto}
                onChangeText={setTexto}/>
            </>
        } else if(subs === 2){
            return <>
                <Text> {texto} </Text> 
                <TextInput 
                placeholder="Digite um nome"
                value={texto2}
                onChangeText={setTexto2}/>
            </>
        }
    }
    
    return(<>
        <View style={estilo.view}>
            <View style={estilo.botoes}>
                <Pressable style={estilo.botao} onPress={()=> setSubs(1)}>Clique aqui</Pressable>
                <Pressable style={estilo.botao} onPress={()=> setSubs(2)}>Ou aqui</Pressable>
            </View>
            <View style={estilo.output}>
              {paginaRender()}      
            </View>
        </View>
    </>);
}