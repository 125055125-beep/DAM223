import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  const [cargando, setCargando] = useState(false);

  return (
    // 1. Evita que el teclado tape el input
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1, justifyContent: 'center', padding: 20 }}
    >
      <TextInput placeholder="Escribe algo..." style={{ borderBottomWidth: 1, marginBottom: 20 }} />

      {/* 2. Muestra la ruedita giratoria si cargando es true, o el boton si es false */}
      {cargando ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Enviar" onPress={() => setCargando(true)} />
      )}
    </KeyboardAvoidingView>
  );
}