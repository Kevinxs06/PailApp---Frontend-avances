import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import Input from "./Input";
import Boton from "./Boton";
import { styles } from "../Estilos/Formu_Inicio";

interface Props {
  onRegisterPress: () => void;
  onChatBot: () => void;
}

export default function Formu_Inicio({ onRegisterPress, onChatBot }: Props) {
  return (
    <View style={styles.content}>

      <View style={styles.card}>
        <Input label="Correo electrónico" />
        <Input label="Contraseña" secureTextEntry />
        <Boton onPress={onChatBot} title="Entrar" />
      </View>

      <TouchableOpacity style={styles.googleBtn}>
        <Text>Continuar con Google</Text>
      </TouchableOpacity>

      <Text style={styles.register}>
        ¿No tienes cuenta?{" "}
        <Text style={{ fontWeight: "bold" }} onPress={onRegisterPress}>
          Crear cuenta
        </Text>
      </Text>
    </View>
  );
}

