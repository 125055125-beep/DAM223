/* zona de exportaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo} from './componentes/Saludo';
import { Saludo2} from './componentes/Saludo2';
import { Perfil} from './componentes/Perfil';

/* zona main (componentes oscreens) */
export default function App() {
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
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'start',
  },

  tarjeta1:{backgroundColor:'#d6c9d3'},
  tarjeta2:{backgroundColor:'#b4e0eb'},
  tarjeta3:{backgroundColor:'#fac1de'},

});
