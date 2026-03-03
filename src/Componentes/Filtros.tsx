import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Filtros({ filtro, setFiltro }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setFiltro("recientes")}>
        <Text style={filtro === "recientes" && styles.activo}>
          Recientes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFiltro("antiguas")}>
        <Text style={filtro === "antiguas" && styles.activo} >
          Antiguas
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#ffe646"
    
  },
  activo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
});