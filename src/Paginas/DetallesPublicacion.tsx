import React, { useState } from "react";
import { View,Text,StyleSheet,ScrollView,TextInput,TouchableOpacity,KeyboardAvoidingView,Platform, } from "react-native";
import Header from "../Componentes/Header";
import { useForo } from "../context/ForoContext";

export default function DetallePublicacion({ route, navigation }: any) {
  const { publicacion } = route.params;
  const { publicaciones, agregarComentario } = useForo();

  const publicacionActual = publicaciones.find(
    (p) => p.id === publicacion.id
  );

  const comentarios = publicacionActual?.listaComentarios || [];

  const [nuevoComentario, setNuevoComentario] = useState("");

  const enviarComentario = () => {
    if (!nuevoComentario.trim()) return;

    agregarComentario(publicacion.id, nuevoComentario);
    setNuevoComentario("");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Header
          title="Detalle"
          onBack={() => navigation.goBack()}
        />

        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <Text style={styles.titulo}>
            {publicacionActual?.titulo}
          </Text>

          <Text style={styles.descripcion}>
            {publicacionActual?.descripcion}
          </Text>

          <Text style={styles.fecha}>
            {publicacionActual?.fecha.toLocaleString()}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.subtitulo}>
            Comentarios ({publicacionActual?.comentarios})
          </Text>

          {comentarios.length === 0 ? (
            <Text style={styles.sinComentarios}>
              Aún no hay comentarios.
            </Text>
          ) : (
            comentarios.map((c, index) => (
              <View key={index} style={styles.comentario}>
                <Text>{c}</Text>
              </View>
            ))
          )}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Escribe un comentario..."
            value={nuevoComentario}
            onChangeText={setNuevoComentario}
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.boton}
            onPress={enviarComentario}
          >
            <Text style={{ color: "white" }}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE4C7",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  descripcion: {
    fontSize: 16,
    marginBottom: 10,
  },

  fecha: {
    fontSize: 12,
    color: "#777",
  },

  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  comentario: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  sinComentarios: {
    color: "#777",
    fontStyle: "italic",
  },

  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },

  input: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingHorizontal: 15,
  },

  boton: {
    backgroundColor: "#FFD600",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 20,
    marginLeft: 10,
  },
});