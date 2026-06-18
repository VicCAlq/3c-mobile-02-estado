/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

const estilo = StyleSheet.create ({
    div1:{
        backgroundColor:"grey",
        padding:"10px",
        borderRadius:"5px",
        justifyContent:"center",
        alignItems:"center"
    }, 
    botao:{
        backgroundColor:"black",
        padding:"10px",
        borderRadius:"5px",
        color:"white",
        marginTop:"5px"
    }
})

export default function AtvDobra({numero}){

    const[numeroMuda, setNumero] = useState(numero)

    return(
        <View style={estilo.div1}>
            <Text>{numeroMuda}</Text>
            <Pressable style={estilo.botao} onPress={()=> setNumero(numeroMuda * 2)}>Dobrar número</Pressable>
        </View>
    )
}