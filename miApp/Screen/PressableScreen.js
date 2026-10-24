/* zona de importaciones*/

import { StyleSheet, View} from 'react-native';

/* zona main (componentes oscreens) */
export default function PressableScreen() {
  return (

    <View style={styles.container}>
        <text>Aqui va la practica 11</text>
        <text>equipo de Karen</text>
     
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