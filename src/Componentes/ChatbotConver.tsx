import React, { useEffect, useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native"
import { useRoute } from "@react-navigation/native";

interface Mensaje {
    id: number,
    texto: string,
    tipo: "usuario" | "bot"
}

export default function ChatBotConver() {
    const route = useRoute<any>()
    const { mensajeInicial } = route.params

    const [mensajes,setMensajes] = useState<Mensaje[]>([])
    const [nuevoMensaje, setNuevoMensaje] = useState("")

    useEffect(() => {
        if (mensajeInicial) {
            agregarMensaje(mensajeInicial)
        }
    }, [])

    const agregarMensaje = (texto: string) => {
        const mensajeUsuario: Mensaje = {
            id: Date.now(),
            texto,
            tipo: "usuario",
        }

    const mensajeBot: Mensaje = {
        id: Date.now() + 1,
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus vitae.",
        tipo: "bot"
    }

    setMensajes((prev) => [...prev, mensajeUsuario, mensajeBot])
    }

    const enviarNuevoMensaje = () => {
        if (nuevoMensaje.trim() === "") return

        agregarMensaje(nuevoMensaje)
        setNuevoMensaje("")
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.chatContainer}>
                {mensajes.map((msg) => (
                    <View
                    key={msg.id}
                    style={[
                        styles.burbuja,
                        msg.tipo === "usuario"
                        ? styles.usuario
                        : styles.bot,
                    ]}
                    >
                        <Text>{msg.texto}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputConteiner}>
                <TextInput 
                  style={styles.input}
                  placeholder="Escribe otro mensaje..."
                  value={nuevoMensaje}
                  onChangeText={setNuevoMensaje}
                />
                <TouchableOpacity style={styles.botonn} onPress={enviarNuevoMensaje}>
                    <Text>➤</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDE4C7",
    },
    chatContainer: {
        flex: 1,
        padding: 20,
    },
    burbuja: {
        padding: 12,
        borderRadius: 15,
        marginBottom: 10,
        maxWidth: "75%",
    },
    usuario: {
        alignSelf: "flex-end",
        backgroundColor: "#FFD600",
    },
    bot: {
        alignSelf: "flex-start",
        backgroundColor: "#FFF3B0",
    },
    inputConteiner: {
        flexDirection: "row",
        padding: 15,
        borderTopWidth: 1,
        backgroundColor: "#EDE4C7",
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
    },
    botonn: {
        marginLeft: 10,
        backgroundColor: "#FFD600",
        padding: 10,
        borderRadius: 10,
    },
})