
import { StyleSheet, View, Text, TextInput, Button, Alert, Platform} from 'react-native';
import {useState} from 'react';

const mostrarAlerta = (titulo, mesaje) =>{
  if (Platform.OS === 'web'){
    window.alert(`{titulo}\n\n ${mensaje}`);
  }

  else{
    Alert.alert(titulo, mensaje);
  }
}


/* zona main (componentes oscreens) */
export default function TextInputScreen() {
  const[nombre, setNombre] = useState ('');
  const[correo, setCorreo] = useState ('');
  const[telefono, setTelefono] = useState ('');
  

  const registrar = () =>{
    const faltantes = [];
    if(nombre.trim()===''){
      faltantes.push('Nombre');
    }

    if(correo.trim()===''){
      faltantes.push('Correo');
    }

    if(telefono.trim()===''){
      faltantes.push('Telefono');
    }

    if(faltantes.length > 0){
      mostrarAlerta('Faltan datos', 'completa'+faltantes.join(','));
      return;
    }
     
    if(!correo.includes('@')){
      mostrarAlerta('Correo invalido', ' el correo debe tener el formato correcto');
      return;
    }

    if(telefono.length!==10){
      mostrarAlerta('Telefono invalido', 'debe tener 10 digitos');
      return;
    }

    mostrarAlerta('Datos registrados correctamente', `Nombre:${nombre}\n Correo:${correo}\n Telefono${telefono}`);
    setNombre('');
    setCorreo('');
    setTelefono('');

  }

  return (

    <View style={styles.container}>
        <Text>Aqui va la practica 12</Text>
        <Text>equipo de jesus rojo</Text>
        <Text style={styles.titulo}>Reegistro de datos</Text>

        <TextInput 
        style ={styles.input} 
        placeholder= "Nombre" 
        value={nombre}
        onChangeText={setNombre}></TextInput>

     <TextInput 
     style ={styles.input} 
     placeholder= "Correo" 
     value={correo}
     onChangeText={setCorreo} 
     keyboardType="email-address" 
     autoCapitalize=" none"></TextInput>

     <TextInput
      style ={styles.input} 
      placeholder= "Telefono" 
      value={telefono} 
      onChangeText={setTelefono} 
      keyboardType='numeric'
      maxLength={10}></TextInput>

    <Button title= 'Registrar' onPress={registrar}/>
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

  titulo:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20,

  },

  input:{
    borderWidth:1,
    borderColor:'#ac0b69',
    borderRadius:8,
    padding:10,
    marginBottom:12,

  },




});