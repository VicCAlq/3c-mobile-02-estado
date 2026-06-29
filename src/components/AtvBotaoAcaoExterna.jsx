/*
[ATIVIDADE TELEFONE SEM FIO]


Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>,
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do
 outro <Pressable>, e vice-versa.
*/


import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
export default function AtvTelefoneSemFio({}) {
    const [conteudo, setConteudo] = useState(0);
    const [texto1, setTexto1] = useState('');
    const [texto2, setTexto2] = useState('');
   
    return (


        <View style = {estilos.view2}>
    <View style = {estilos.view}>


            <Pressable style = {estilos.botao1}
                         onPress= {() => setConteudo(1)}>
                          <Text style = {estilos.textoB}>Botao 1</Text>  
                           
            </Pressable>


           <Pressable style = {estilos.botao2}
                         onPress= {() => setConteudo(2)}>
                          <Text style = {estilos.textoB}>Botao 2</Text>  
                           
            </Pressable>
             </View>


         <View>
                <View>
                    {conteudo == 1 && (
                                <View>
                            <Text style = {estilos.texto}>{texto2}</Text>
                            <TextInput style = {estilos.input}
                            value={texto1}
                            onChangeText={setTexto1}
                            placeholder="Digite aqui"/>
                                </View>
                       
                    )}
                    {conteudo == 2 && (
                             <View>
                            <Text style = {estilos.texto}>{texto1}</Text>
                            <TextInput style = {estilos.input}
                            value={texto2}
                            onChangeText={setTexto2}
                            placeholder="Digite aqui"/>
                                </View>
                    )}
                </View>
                        </View>


       


        </View>
           


       
       
    )
}






const estilos = StyleSheet.create ({
    botao1: {
        padding: '10px',
        borderRadius: '15px',
        backgroundColor: 'purple',
    margin: "10px",
       
},
    botao2: {
     
        padding: '10px',
        borderRadius: '15px',
        backgroundColor: 'purple',
    margin: "10px",
       
},
    view:{
           flexDirection:'row',
      backgroundColor:'#d065eb',
       justifyContent:'center',
        padding:'10px',
       borderRadius: '10px',
    },
    view2:{
      backgroundColor:'#bb5cd3',
            borderRadius: '15px',
            padding:'10px',
    },
    texto: {
        color:'#66197e',
        fontSize: "15px",
         fontWeight:'bold',
         textAlign:'center'
    },
     textoB: {
        color:'lavender',
        fontSize: "15px",
         fontWeight:'bold',
         textAlign:'center'
    },
    input: {
     
        backgroundColor:'#ffbaf4',
         borderRadius: "8px",
          padding: "5px",
          margin:'5px',
            borderColor:'purple',
            borderWidth:'4px'
    }
}
)


