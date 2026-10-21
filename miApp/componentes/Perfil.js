

import { View, Text, StyleSheet, Button} from 'react-native';
import {useState} from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre, style }) => {

const[mostrar, setMostrar] = useState(false);

  return (    <View style={[estilos.tarjeta, style]}>
      <Text style={estilos.nombres}>{nombre}</Text>


      {mostrar && 
      <>                         
       <Text style={estilos.carrera}>{carrera}</Text>
       <Text style={estilos.otroTexto}>{materia}</Text>
       <Text style={estilos.otroTexto}>{cuatrimestre}</Text>
      </>
        }

        <Button title="Ver perfil" onPress={ ()=>setMostrar(!mostrar) }> </Button>

    </View>
  );
};
const estilos= StyleSheet.create({
  nombres:{
    fontSize:24,
    fontWeight:800,
    textTransform:'uppercase',


  },

  carrera:{
    fontSize:20,
  fontFamily:'Roboto',
  color:'purple',

  },

  otroTexto:{
    fontSize:18,
  fontFamily:'Courier',
  color:'pink',
  fontStyle:'italic',

  },

  tarjeta:{
    borderWidth:3,
    borderRadius:10,
    padding:15,
    margin:20,
    backgroundColor:'white',
  },

 




});
