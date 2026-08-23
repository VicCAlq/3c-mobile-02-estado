/*
[ATIVIDADE DOBRA],

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import React, { useState }  from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';
const estilolegal = StyleSheet.create({
    botao : {
        width: "50px",
        height: "50px",
        backgroundColor: "blue",
    },
    texto: {
        color: "red",
        fontSize: "32px"
    
    }
})
export default function AtvDobra({numero}) {
    const [Contadorzin, setContar] = useState(numero)
    function dobrar() {
        setContar(Contadorzin * 2);
    }
    return (
        <View>
            <Text style={estilolegal.texto}>
            {Contadorzin}
            </Text>
        <Pressable onPress={() => dobrar()} style={estilolegal.botao}>
            <Text>
                CLICA AQUI
            </Text>
        </Pressable>
        </View>
    )
}