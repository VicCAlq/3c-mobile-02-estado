import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Placar from './components/Placar';
import InputTexto from './components/InputTexto';
import AtvDobra from './components/AtvDobra';
import AtvCumprimenta from './components/AtvCumprimenta';


export default function App() {
  return (
    <View style={styles.container}>
      <Placar/>
      <InputTexto/>
      <StatusBar style="auto" />

      <View>
        <AtvDobra numero={2}></AtvDobra>
        <AtvCumprimenta></AtvCumprimenta>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101015",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#eec"
  }
});
