import { View, Text, StyleSheet } from 'react-native';

export function Perfil() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Nombre: Schoenstatt</Text>
      <Text style={styles.texto}>Carrera: Ingeniería en Tecnologias de la Informacion e Innovacion digital</Text>
      <Text style={styles.texto}>Materia: Desarrollo de aplicaciones moviles</Text>
      <Text style={styles.texto}>Cuatrimestre: 4°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    backgroundColor: '#b3bac0',
    borderRadius: 10,
  },
  texto: {
    fontSize: 18,
    marginBottom: 8,
    color: '#324963',
  },
});