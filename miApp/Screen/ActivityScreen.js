import { StyleSheet, View} from 'react-native';

/* zona main (componentes oscreens) */
export default function ActivityScreen() {
  return (

    <View style={styles.container}>
        <text>Aqui va la practica 16</text>
        <text>equipo de schos</text>

        
     
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