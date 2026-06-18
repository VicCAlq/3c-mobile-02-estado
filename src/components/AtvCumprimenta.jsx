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

import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    div1:{
        backgroundColor: "gray",
        margin:"10px",
        padding:"10px",
        borderRadius: "5px",
    },
    div2:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding:"5px",
        gap:'5px'
    },
    textinput:{
        borderRadius: "5px",
        backgroundColor: "#bbb",
        padding:"5px"
    },
    botaoSalvar:{
        padding:"5px",
        backgroundColor:"black",
        color:"white",
        borderRadius: "5px",
    }
})

export default function AtvCumprimenta({}){

    const [nome, setNome] = useState("")
    const [mudar, setMudar] = useState(false)

    const mudarNome = ()=>{
        if(nome === ""){
            return <></>
        } else if(nome !== "" && mudar !== false) {
            return <View>
            <Text>É um prazer lhe conhecer, {nome}</Text>
            </View>
        }
    }

    return (<View style={estilo.div1}>
        <Text>
            Olá, qual seu nome?
        </Text>
        <View style={estilo.div2}>
            <TextInput 
            placeholder="Seu nome"
            onChangeText={setNome}
            style={estilo.textinput}/>
            <Pressable style={estilo.botaoSalvar} onPress={() => setMudar(true)}>Salvar</Pressable>
        </View>
        {mudarNome()}
    </View>)
}