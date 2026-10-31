/* zona de importaciones*/

import { StyleSheet, View, Text, Switch, Pressable} from 'react-native';
import {useState} from 'react';


/* zona main (componentes oscreens) */
export default function PressableScreen() {

  const [encendido, setEncendido] = useState(false);
  const[contador, setContador]= useState(0);

  return (

    <View style={styles.container}>
        <Text>Aqui va la practica 11</Text>
        <Text>equipo de Karen</Text>
        <Text style = {styles.titulo}>Practica: switch y Pressable</Text>

        <Switch
        value={encendido} onValueChange={(valor) => setEncendido(valor)}></Switch>

        <Text style={styles.texto}>El switch esta:{encendido? 'encendido' : 'Apagado'}</Text>

        <Pressable style ={styles.boton}onPress={() => setContador(contador + 1)}>

           <Text style={styles.textoboton}>Presioname</Text> 

        </Pressable>
        <Text style ={styles.texto}>Veces presionado: {contador} </Text>
     
    </View>
  );
}

/* zona estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
  },
   titulo:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:40,
   },
    texto:{
      fontZise:18,
      marginVertical:15,

    },
    boton:{
      backgroundColor:'#cf6bba',
      padding:15,
      borderRadius:10,
      marginTop:30,

    },

    textpBoton:{
      color:'white',
      fontSize:18,
      fontWeight:'bold',

    },


})