/* 1.ZONA DE IMPORTACIONES */
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, Platform } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
        window.alert(`${titulo}\n\n${mensaje}`);
    } else {
        Alert.alert(titulo, mensaje);
    }
}

/* 2.ZONA DEL MAIN */
export default function RegistroScreen() {
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');
    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const enviarRegistro = () => {

        if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
            mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
            return;
        }

        if (isNaN(Number(semestre))) {
            mostrarAlerta('Error', 'El semestre debe ser un número.');
            return;
        }

        mostrarAlerta(
            'Registro enviado',
            `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`
        );
    }

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <Text style={styles.tituloPrincipal}>Registro de Evento Universitario</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Carrera"
                value={carrera}
                onChangeText={setCarrera}
            />
            <TextInput
                style={styles.input}
                placeholder="Semestre"
                value={semestre}
                onChangeText={setSemestre}
                keyboardType="numeric"
            />

            <Text style={styles.subtitulo}>Opciones</Text>

            <View style={styles.fila}>
                <Text>¿Asistirá al taller?</Text>
                <Switch value={taller} onValueChange={(valor) => setTaller(valor)} />
            </View>

            <View style={styles.fila}>
                <Text>¿Requiere constancia?</Text>
                <Switch value={constancia} onValueChange={(valor) => setConstancia(valor)} />
            </View>

            <View style={styles.fila}>
                <Text>¿Participará en deportes?</Text>
                <Switch value={deportes} onValueChange={(valor) => setDeportes(valor)} />
            </View>

            <Button title="Enviar Registro" onPress={enviarRegistro} />

        </SafeAreaView>
    );
}

/* 3.ZONA DE ESTILOS */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf8fa',
        padding: 15,
    },

    tituloPrincipal: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ec70e6',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 12,
    },

    fila: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});