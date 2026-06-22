/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/
import { useState } from 'react'
import {View, Pressable, TextInput, StyleSheet} from 'react-native'

export default function AtvTelefoneSemFio()
{
    const [Text, setText] = useState(<Text></Text>);
    const [TextInput, setTextInput] = useState(<TextInput
        value={Text}
        onChangeText={setText}
        placeholder="Digite aqui o novo texto"
    ></TextInput>);

    return(<View>
        <Pressable onPress={() => setText(TextInput)&& setTextInput(Text)}><Text>Botão 1</Text></Pressable>
        <Pressable onPress={() => setText(TextInput)&& setTextInput(Text)}><Text>Botão 2</Text></Pressable>
        <View>
            {Text}
        </View>
    </View>)
    
}