import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChatbotPrincipal() {
  
  const navigation = useNavigation<any>()
  const [mensaje, setMensaje] = useState("");

  const enviarMensaje = () => {
    if (mensaje.trim() === "") return;

    navigation.navigate("Chatbot_Conversacion", {
      mensajeInicial: mensaje,
    })

    setMensaje("");
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.question}>
          ¿Qué quieres cocinar hoy?
        </Text>

        <Image
          source={require("../Img/robotito1.png")} 
          style={styles.robot}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Escribe tu mensaje..." value={mensaje} onChangeText={setMensaje}/>
        <TouchableOpacity>
          <Image
          source={require("../Img/icono-micro.png")}
          style={{ width: 36, height: 36, marginLeft: 5, marginRight: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={enviarMensaje}>
          <Image
          source={require("../Img/icono-enviado.png")}
          style={{ width: 36, height: 36 }}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE4C7",
  },

  header: {
    backgroundColor: "#FFD600",
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 22,
    fontWeight: "bold",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  question: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },

  robot: {
    width: 260,
    height: 270,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 35,
    marginBottom: 50,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 45,
  },

});