/* zona de exportaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Perfil} from '../componentes/Perfil';

/* zona main (componentes oscreens) */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
     

      <Perfil 
      nombre="Schoenstatt"
      carrera="ITITD"
      materia="movil"
      cuatrimestre="4°"
      style={styles.tarjeta1}></Perfil>

      <Perfil 
      nombre="Judith"
      carrera="Sistemas"
      materia="movil"
      cuatrimestre="13°"
      style={styles.tarjeta2}></Perfil>

    <Perfil 
      nombre="Paul"
      carrera="ITIID"
      materia="movil"
      cuatrimestre="4°"
      style={styles.tarjeta3}></Perfil>


          
      <StatusBar style="auto" />
    </View>
  );
}

/* zona estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },

  tarjeta1:{backgroundColor:'#d6c9d3'},
  tarjeta2:{backgroundColor:'#b4e0eb'},
  tarjeta3:{backgroundColor:'#fac1de'},

});
