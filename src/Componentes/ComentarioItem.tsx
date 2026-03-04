import React, { useState } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,TextInput, } from "react-native";
import { Comentario } from "../context/ForoContext";
import { useForo } from "../context/ForoContext";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  comentario: Comentario;
  publicacionId: number;
}

export default function ComentarioItem({
  comentario,
  publicacionId,
}: Props) {
  const { agregarComentario, toggleLikeComentario } = useForo();
  const [mostrarInput, setMostrarInput] = useState(false);
  const [respuesta, setRespuesta] = useState("");

  const enviarRespuesta = () => {
    if (!respuesta.trim()) return;

    agregarComentario(publicacionId, respuesta, comentario.id);
    setRespuesta("");
    setMostrarInput(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={{ uri: comentario.usuario.foto }}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.nombre}>
              {comentario.usuario.nombre}
            </Text>
            <Text style={styles.fecha}>
              {new Date(comentario.fecha).toLocaleString()}
            </Text>
          </View>

          <Text style={styles.texto}>{comentario.texto}</Text>

          <View style={styles.actions}>
            <TouchableOpacity
            onPress={() =>
              toggleLikeComentario(publicacionId, comentario.id)
            }
            >
              <Icon
                name={comentario.likedByUser ? "heart" : "heart-outline"}
                size={18}
                color={comentario.likedByUser ? "red" : "black"}
                />
            </TouchableOpacity>
            
            <Text>{comentario.likes}</Text>

            <TouchableOpacity
              onPress={() => setMostrarInput(!mostrarInput)}
            >
              <Text style={styles.responder}>Responder</Text>
            </TouchableOpacity>
          </View>

          {mostrarInput && (
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Escribe una respuesta..."
                value={respuesta}
                onChangeText={setRespuesta}
                style={styles.input}
              />
              <TouchableOpacity onPress={enviarRespuesta}>
                <Text style={styles.botoncitop}>
                  Enviar
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {comentario.respuestas.map((resp) => (
            <View key={resp.id} style={styles.respuesta}>
              <ComentarioItem
                comentario={resp}
                publicacionId={publicacionId}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  row: { flexDirection: "row" },
  avatar: { width: 35, height: 35, borderRadius: 20, marginRight: 10 },
  header: { flexDirection: "row", justifyContent: "space-between" },
  nombre: { fontWeight: "bold" },
  fecha: { fontSize: 11, color: "#777" },
  texto: { marginVertical: 5 },
  actions: { flexDirection: "row", gap: 15 },
  responder: { fontSize: 12, color: "#444" },
  respuesta: { marginLeft: 30, marginTop: 10 },
  inputContainer: { flexDirection: "row", marginTop: 8 },
  input: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  botoncitop: {
    fontWeight: "bold",
    margin: 6,
    backgroundColor: "#FFD600",
    padding: 6,
    borderRadius: 12,

  }
});