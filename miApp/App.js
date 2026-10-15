/* zona de exportaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo} from './componentes/Saludo';
import { Saludo2} from './componentes/Saludo2';
import { Perfil } from './componentes/Perfil'; 

/* zona main (componentes oscreens) */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo React Native</Text>
      <Image source={require('./assets/wave.png')} />
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      <Perfil></Perfil>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

/* zona estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
