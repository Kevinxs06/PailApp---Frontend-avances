import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../Componentes/Input";
import Boton from "../Componentes/Boton";

export default function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      
      {/* // Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Inicia sesión</Text>
      </View>

      {/* Contenido */}
      <View style={styles.content}>

        <View style={styles.card}>
          <Input label="Correo electrónico" />
          <Input label="Contraseña" secureTextEntry />


          <Boton title="Entrar" />
        </View>

        <TouchableOpacity style={styles.googleBtn}>
          <Text style={styles.googleText}>Continuar con Google</Text>
        </TouchableOpacity>

        <Text style={styles.register}>
          ¿No tienes cuenta? <Text style={{ fontWeight: "bold" }}>Crear cuenta</Text>
        </Text>

      </View>

    </View>
  );
}

// Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE4C7",
  },

  header: {
    backgroundColor: "#FFD600",
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  backButton: {
    position: "absolute",
    left: 20,
    top: 50,
  },

  back: {
    fontSize: 22,
    fontWeight: "bold",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },

  card: {
    backgroundColor: "#FFD600",
    width: "80%",
    padding: 15,
    borderRadius: 12,
  },

  googleBtn: {
    width: "60%",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 25,
  },

  googleText: {
    fontSize: 15,
  },

  register: {
    marginTop: 20,
    textAlign: "center",
  },
});
