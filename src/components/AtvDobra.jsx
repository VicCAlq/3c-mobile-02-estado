/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { View, Text, Pressable} from 'react-native'
import { useState } from 'react'



export default function AtvDobra({numero}) {
  const [setNumero] = useState(0)
  function duplicar() {
    setNumero(numero * 2)
  }

    return(
        <View>
            <Text>{numero}</Text>
          <Pressable onPress={() => duplicar()}>
          </Pressable>
        </View>
    )
  }