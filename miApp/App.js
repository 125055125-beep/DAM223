/* 1.ZONA DE IMPORTACIONES */
import { StyleSheet, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import  MenuScreen  from './Screen/MenuScreen';
/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function App(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
    <MenuScreen/>
    </View>
    </SafeAreaProvider>
  );
}
/* 3.ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fffefe',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
},
  
});