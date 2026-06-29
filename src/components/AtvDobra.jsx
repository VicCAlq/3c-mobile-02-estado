
/*
[ATIVIDADE DOBRA]


Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero".
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento,
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/


import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'




const estilos = StyleSheet.create({
    botao: {
        padding: '8px',
        borderRadius: '10px',
        backgroundColor: '#bb5cd3',
        margin: '2px',
       
       
    },
    view: {
        padding: '20px',
       borderRadius: '10px',
        backgroundColor: 'violet',
        marginHorizontal:'50px',
    },
    texto:{
       color:'purple',
        fontSize: "15px",
         fontWeight:'bold',
         textAlign:'center'
    },
     textob:{
       color:'lavender',
        fontSize: "15px",
         fontWeight:'bold',
         textAlign:'center'
    }
})


export default function AtvDobra(numero) {


  const [number, setNumber] = useState(2);


  function Dobrar() {
    setNumber(number * 2);
  }


  return (
    <View style={estilos.view}>


      <Text style={estilos.texto}>{number}</Text>


      <Pressable style = {estilos.botao}
      onPress={Dobrar}
      ><Text style = {estilos.textob}>Dobrar!</Text>
      </Pressable>
     
    </View>
  );
}

