/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/


import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

 return(
 <View style={estilo.view}>
      <Text style={estilo.texto}>
        {placar}
      </Text>
      <View style={estilo.viewBotoes}>
        <Pressable style={estilo.botao} onPress={() => marcarPonto()}>
          <Text style={estilo.textoBotao}>Mais um</Text>
        </Pressable>
        <Pressable style={estilo.botao} onPress={() => perderPonto()}>
          <Text style={estilo.textoBotao}>Menos um</Text>
        </Pressable>
      </View>
    </View>
  )
