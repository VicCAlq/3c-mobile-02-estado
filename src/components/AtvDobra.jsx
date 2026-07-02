/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function AtvDobra({numero}) {
  const [contador, setContador] = useState(numero);

  return (
    <View>
      <Text>Você clicou/tocou {contador} vezes</Text>
      <Button 
        title="Clique aqui!" 
        onPress={() => setContador(contador * 2)} 
      />
    </View>
  );
}
