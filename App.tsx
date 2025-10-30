import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign in</Text>

        {/* Campo de correo */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#555" />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={styles.errorText}>Correo inválido</Text>

        {/* Campo de contraseña */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#555" />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={22} color="#555" />
          </TouchableOpacity>
        </View>
        <Text style={styles.errorText}>Este campo es obligatorio</Text>

        {/* Botón Login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Botón Registrarse */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Fondo gris
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Cuadro blanco centrado
  card: {
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,
    color: '#222',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 8,
  },

  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },

  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },

  loginButton: {
    backgroundColor: '#1e1e2d',
    borderRadius: 8,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },

  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  registerButton: {
    backgroundColor: '#dcd8ff',
    borderRadius: 8,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },

  registerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
