/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function AtvDobra({numero}) {

  const [valor, setValor] = useState(numero)
 
  return(
  <View style={estilo.view}>
      <Text style={estilo.texto}>
        {valor}
      </Text>
      <View style={estilo.viewBotoes}>
        <Pressable style={estilo.botao} onPress={() => setValor(valor * 2)}>
          <Text style={estilo.textoBotao}>Dobra</Text>
        </Pressable>
      </View>
    </View>
  )
}

