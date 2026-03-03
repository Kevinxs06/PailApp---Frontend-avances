import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useForo } from "../context/ForoContext";

export default function FormSubirReceta({ navigation }: any) {
  const { agregarPublicacion } = useForo();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [dificultad, setDificultad] = useState("");

    const subir = () => {
      if (!titulo || !descripcion) return;
    
      agregarPublicacion({
        titulo,
        descripcion,
        imagen: "",
        ingredientes,
        tiempo,
        dificultad,
      });
  
      setTitulo("");
      setDescripcion("");
      setIngredientes("");
      setTiempo("");
      setDificultad("");
  
      navigation.navigate("Foro", {
        notificacion: "Receta publicada",
      });
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>

        <TextInput
          placeholder="Título"
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          placeholder="Descripción"
          style={[styles.input, styles.textArea]}
          multiline
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <TextInput
          placeholder="Ingredientes (uno por línea)"
          style={[styles.input, styles.textArea]}
          multiline
          value={ingredientes}
          onChangeText={setIngredientes}
        />

        <TextInput
          placeholder="Tiempo aproximado (min)"
          style={styles.input}
          keyboardType="numeric"
          value={tiempo}
          onChangeText={setTiempo}
        />

        <TextInput
          placeholder="Dificultad (Fácil, Media, Difícil)"
          style={styles.input}
          value={dificultad}
          onChangeText={setDificultad}
        />

        <TouchableOpacity style={styles.boton} onPress={subir}>
          <Text style={styles.botonTexto}>Publicar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  card: {
    backgroundColor: "#F6E27A",
    padding: 20,
    borderRadius: 20,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },

  textArea: {
    height: 90,
    textAlignVertical: "top",
  },

  boton: {
    backgroundColor: "#FFD600",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },

  botonTexto: {
    fontWeight: "bold",
    fontSize: 16,
  },
});