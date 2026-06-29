/*
[ATIVIDADE CUMPRIMENTA]


Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe
nenhum argumento.
Ele deve retornar uma <View>, onde dentro dela haverá um <Text> com o conteúdo "Olá, qual seu nome?".
Abaixo deste <Text> deve haver um <TextInput> onde o usuário poderá digitar seu nome.
Ao lado deste <TextInput> deve haver um <Pressable>, que ao ser apertado vai fazer um <Text>
ser exibido abaixo  com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser
igual ao texto que o usuário digitou no <TextInput>.


Ordem visual dos elementos:


_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/


import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react';




const estilos = StyleSheet.create({
  view : {
        backgroundColor: '#ffadfb',
        padding:'10px',
       borderRadius: '10px',
       
    },
    view2 : {
        backgroundColor: '#ffadfb',
        padding:'10px',
        flexDirection:'row',
       borderRadius: '10px',
       
    },
    texto: {
        color:'purple',
        fontSize: "15px",
         fontWeight:'bold',
         textAlign:'center'
    },
    botao: {
        borderRadius:'15px',
         padding: '5px',
        backgroundColor:'#a63ec0',
         margin:'4px',
         width:'80px',


    },
    textoB: {
        color:'white',
        fontSize: "15px",
         fontWeight:'bold',
         textAlign:'center'
    },
    input: {
     
        backgroundColor:'white',
         borderRadius: "8px",
          padding: "5px",
          margin:'5px',
            borderColor:'violet',
            borderWidth:'4px'


    }
})


export default function AtvCumprimento ({}) {
    const [nome, setNome] = useState('')
    const [texto,setTexto] = useState('')
    return (
      <View style = {estilos.view}>
        <Text style = {estilos.texto}>Olá, qual seu nome?</Text>
         
        <View style = {estilos.view2}>


          <TextInput style={estilos.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome aqui"/>


          <Pressable style = {estilos.botao}
          onPress= {() => setTexto(`É um prazer lhe conhecer, ${nome}`)}>
            <Text style = {estilos.textoB}>Salvar</Text>  
          </Pressable>


          </View>


           <Text style = {estilos.texto}>{texto}</Text>
      </View>
    )
}
