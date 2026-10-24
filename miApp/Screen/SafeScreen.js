/* zona de importaciones*/

import { StyleSheet, View} from 'react-native';

/* zona main (componentes oscreens) */
export default function SafeScreen() {
  return (

    <View style={styles.container}>
        <text>Aqui va la practica 10</text>
        <text>equipo de dulce</text>
     
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