/*
[ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <View>, onde dentro dela haverá um <Text> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <Text> deve haver um <TextInput> onde o usuário poderá digitar seu nome. 
Ao lado deste <TextInput> deve haver um <Pressable>, que ao ser apertado vai fazer um <Text> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <TextInput>.

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

/*<TextInput
        style={estilo.input}
        value={textoInserido}
        onChangeText={setTextoInserido}
        placeholder="Digite aqui o novo texto"
      />
      <Pressable style={estilo.botao} onPress={() => setTexto(textoInserido)}>
        <Text style={estilo.textoBotao}>Salvar texto</Text>
      </Pressable>
    </View>*/
import { View, Text, Pressable, TextInput} from 'react-native'
import { useState } from 'react'



export default function AtvCumprimenta({}){
    const [NOME, setNOME] = useState("")
    const [texto] = useState("Olá, qual seu nome?")
    return( 
        <View>
            <Text>{texto}</Text>

            <TextInput
            value={NOME}
            onChangeText={setNOME}
            >
            </TextInput>
             <Pressable onPress={() => setNOME(NOME)}>
                   <Text>É um prazer lhe conhecer, [NOME]</Text>
                 </Pressable>
        </View>
    
)
}