/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function AtvDobra(props) {
  const [num, setNum] = useState(props.numero);

  return (
    <View>
      <Text>{num}</Text>

      <Pressable onPress={() => setNum(num * 2)}>
        <Text>Dobrar</Text>
      </Pressable>
    </View>
  );
}