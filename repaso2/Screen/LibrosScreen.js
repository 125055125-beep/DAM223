/* 1.ZONA DE IMPORTACIONES */
import {
  StyleSheet, View, Text, TextInput, Pressable, FlatList,
  ActivityIndicator, ImageBackground, Alert, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const mostrarAlerta = (titulo, mensaje) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
}

/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function LibrosScreen() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  const bgMain = require('../assets/fondo.jpeg');
  const agregarLibro = () => {

    // 1. Validar que todos los campos esten llenos
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      mostrarAlerta('Campos incompletos', 'Todos los campos son obligatorios.');
      return;
    }

    // 2. Simular espera de 4 segundos con ActivityIndicator
    setCargando(true);

    setTimeout(() => {
      // 3. Agregar el libro a la FlatList
      const nuevoLibro = {
        id: String(Date.now()),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };
      setLibros((anteriores) => [...anteriores, nuevoLibro]);

      // 4. Limpiar los TextInput
      setTitulo('');
      setAutor('');
      setGenero('');

      setCargando(false);

      // 5. Notificar con un Alert
      mostrarAlerta('Libro agregado', 'Libro guardado correctamente.');
    }, 4000);
  }

  return (
    <ImageBackground source={bgMain} style={styles.fondo} resizeMode="cover">
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>

        <Text style={styles.tituloPrincipal}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          style={[styles.boton, cargando && styles.botonDeshabilitado]}
          onPress={agregarLibro}
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            {cargando ? 'Guardando...' : 'Agregar Libro'}
          </Text>
        </Pressable>

        {cargando && (
          <View style={styles.cargando}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.textoCargando}>Guardando libro...</Text>
          </View>
        )}

        <Text style={styles.total}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Text style={styles.libroTitulo}>{item.titulo}</Text>
              <Text style={styles.libroTexto}>Autor: {item.autor}</Text>
              <Text style={styles.libroTexto}>Género: {item.genero}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.vacio}>Aún no hay libros registrados.</Text>
          }
        />

      </SafeAreaView>
    </ImageBackground>
  );
}

/* 3.ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 15,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#382372',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'rgba(248, 247, 246, 0.85)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#1565c0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonDeshabilitado: {
    backgroundColor: '#888888',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cargando: {
    alignItems: 'center',
    marginTop: 15,
  },
  textoCargando: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  total: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: 12,
  },
  tarjeta: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  libroTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  libroTexto: {
    fontSize: 13,
  },
  vacio: {
    color: '#333a7c',
    textAlign: 'center',
    marginTop: 10,
  },
});