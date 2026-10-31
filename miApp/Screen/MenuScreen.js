
import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetaScreen from './TarjetaScreen';
import TextInputScreen from './TextInputScreen';
import FastListScreen from './FastListScreen';
import ImageScreen from './ImageScreen';
import ModalScreen from './ModalScreen';
import ActivityScreen from './ActivityScreen';



/* zona main (componentes oscreens) */
export default function MenuScreen() {
    const[screen, setScreen]= useState('menu');

    switch(screen){
        case 'safe':
            return<SafeScreen/>;
        case'press':
            return<PressableScreen/>;
         case'text input':
            return<TextInputScreen/>;
        case'flatlist':
            return<FastListScreen/>;
        case'image':
            return<ImageScreen/>;    
        case'modal':
            return<ModalScreen/>; 
        case'activity':
            return<ActivityScreen/>;   
        case'tarjetas':
            return<TarjetaScreen/>;
    
        case 'menu':
            default:
           
            return (

                <View style={styles.container}>
                    <Text>Menu de Practicas</Text>
                     <Button title="Practica Tarjetas" onPress={()=>setScreen('tarjetas')}></Button>
                     
                      <Button title="Practica SafeAreaView" onPress={()=>setScreen('safe')}></Button>
                     
                       <Button title="Practica Pressable" onPress={()=>setScreen('press')}></Button>
                       -
                       <Button title="Practica TextInput & Alert" onPress={()=>setScreen('text input')}></Button>
                       
                       <Button title="Practica FlatList & Section list" onPress={()=>setScreen('flatlist')}></Button>
                      
                       <Button title="Practica ImageBackground & SplashScreen" onPress={()=>setScreen('image')}></Button>
                       
                       <Button title="Practica Modal & bottom sheet" onPress={()=>setScreen('modal')}></Button>
                    
                       <Button title="Practica ActivityIndicator, KeyboardAvoiding" onPress={()=>setScreen('activity')}></Button>
                       


                </View>
             );
       }// switch 
}// funcion

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