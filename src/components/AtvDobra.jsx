/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { useState } from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'

const estilo = StyleSheet.create
({
    view:
    {
        backgroundColor:"steelblue",
         justifyContent: "center",
         alignItems: "center",

     },

     

    pressable:
    {
        backgroundColor:"midnightblue",
        
    },
})

export default function AtvDobra ({numero})
{
    const [dobro, setdobro] = useState(numero)

    function dobrar()
    {
        setdobro(dobro*2)
    }
return(
    <View style={estilo.view}>
        <Text>
            {dobro}
        </Text>
        <Pressable style={estilo.pressable} onPress={()=>dobrar()}>
        <Text>
            clique e dobre
        </Text>
        </Pressable>
    </View>
)
}