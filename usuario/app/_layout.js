import{Stack} from "expo-router";


export default function RooLayout(){

    return(

        <Stack>
             <Stack.Screen
        name="(tabs)"
         options={{headerShown:false}}
        />

        <Stack.Screen
        name="detalle"
         options={{title:"Detalle usuario"}}
        />


        <Stack.Screen
        name="actualiza"
         options={{title:"Cambios del usuario"}}
        />
        </Stack>

       



    
    );

       

}