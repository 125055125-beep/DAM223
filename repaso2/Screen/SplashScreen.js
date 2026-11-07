/* 1.ZONA DE IMPORTACIONES */
import { StyleSheet, View, Text, Image } from 'react-native';

/* 2.ZONA DEL MAIN(COMPONENTES, SCREENS) / EJECUCION*/
export default function SplashScreen() {

  const logoApp = require('../assets/logo.jpeg');

  return (
    <View style={styles.container}>
      <Image source={logoApp} style={styles.logo} />
      <Text style={styles.titulo}>repaso2</Text>
      <Text style={styles.subtitulo}>Catálogo de Libros</Text>
    </View>
  );
}

/* 3.ZONA DE LA ESTETICA */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: '#666666',
  },
});