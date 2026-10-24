/* zona de importaciones*/

import { StyleSheet, View, Text, Button } from 'react-native';
import MenuScreen from './Screen/MenuScreen';

/* zona main (componentes oscreens) */
export default function App() {
  return (

    <View style={styles.container}>
      <MenuScreen/>
     
    </View>
  );
}

/* zona estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
  },

});