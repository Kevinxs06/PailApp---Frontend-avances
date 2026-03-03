import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BotonAgregar({ onPress }: any) {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.texto}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFD600",
    alignItems: "center",
    padding: 10,
  },
  texto: {
    fontSize: 40,
  },
});