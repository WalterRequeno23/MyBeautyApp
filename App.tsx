import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>

      {/* Input de correo */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#555" />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
        />
      </View>


      {/* Input de contraseña */}
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
     

      {/* Botón Login */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Botón Registrarse */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6', // gris claro
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
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