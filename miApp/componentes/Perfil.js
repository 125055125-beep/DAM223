

import { View, Text, Button} from 'react-native';
import {useState} from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {

const[mostrar, setMostrar] = useState(false);

  return (
    <View>
      <Text>{nombre}</Text>


      {mostrar && 
      <>                         /*   fragmento de texto y un if  renderizado condicional*/
       <Text>{carrera}</Text>
       <Text>{materia}</Text>
       <Text>{cuatrimestre}</Text>
      </>
        }

        <Button title="Ver perfil" onPress={ ()=>setMostrar(!mostrar) }> </Button>

    </View>
  );
};