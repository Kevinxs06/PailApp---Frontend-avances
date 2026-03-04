import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import { useForo } from "../context/ForoContext";
import Icon from "react-native-vector-icons/Ionicons";

export default function PublicacionCard({ publicacion, onGuardar, navigation }: any) {
  const { toggleGuardar } = useForo();

const handleGuardar = () => {
  const estabaGuardada = publicacion.guardado;

  toggleGuardar(publicacion.id);

  if (estabaGuardada) {
    onGuardar("Receta eliminada");
  } else {
    onGuardar("Receta guardada");
  }
};

const { toggleLikePublicacion } = useForo();

  return (
    <TouchableOpacity
    activeOpacity={0.9}
    onPress={() =>
      navigation.navigate("DetallePublicacion", {
        publicacion,
      })
    }
  >
    <View style={styles.card}>
      <Text style={styles.titulo}>{publicacion.titulo}</Text>

      <Text style={styles.descripcion}>
        {publicacion.descripcion}
      </Text>

      {publicacion.imagen ? (
        <Image source={publicacion.imagen} style={styles.img} />
      ) : null}

      <View style={styles.infoExtra}>
        {publicacion.tiempo ? (
          <Text style={styles.extraText}>⏱ {publicacion.tiempo} min</Text>
        ) : null}

        {publicacion.dificultad ? (
          <Text style={styles.extraText}>🔥 {publicacion.dificultad}</Text>
        ) : null}
      </View>

      <Text style={styles.fecha}>
        {publicacion.fecha.toLocaleString()}
      </Text>

      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity
  onPress={() => toggleLikePublicacion(publicacion.id)}
>
  <Icon
    name={publicacion.likedByUser ? "heart" : "heart-outline"}
    size={22}
    color={publicacion.likedByUser ? "red" : "black"}
  />
</TouchableOpacity>

<Text>{publicacion.likes}</Text>
          <Text style={[styles.iconText, { marginLeft: 15 }]}>
            💬 {publicacion.comentarios}
          </Text>
        </View>

        <TouchableOpacity onPress={handleGuardar}>
          <Text style={styles.iconText}>
            {publicacion.guardado ? "🔖" : "📑"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 12,
    backgroundColor: "#F6E27A",
    borderRadius: 20,
    elevation: 4,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },

  descripcion: {
    fontSize: 14,
    marginBottom: 10,
  },

  img: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginVertical: 10,
  },

  infoExtra: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 8,
  },

  extraText: {
    fontSize: 13,
    fontWeight: "500",
  },

  fecha: {
    fontSize: 12,
    color: "#444",
    marginBottom: 10,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  guardar: {
    fontWeight: "bold",
  },

  leftActions: {
  flexDirection: "row",
  alignItems: "center",
  },

  iconText: {
  fontSize: 15,
  },
});