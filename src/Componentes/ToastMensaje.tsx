import React from "react";
import { View, Text, } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../Estilos/ToastMensaje";

export default function ToastMensaje({ mensaje }: any) {
  if (!mensaje) return null;

  return (
    <View style={styles.container}>
      <Icon name="checkmark-circle" size={20} color="black" />
      <Text style={styles.text}>{mensaje}</Text>
    </View>
  );
}

