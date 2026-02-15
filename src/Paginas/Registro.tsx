import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../Componentes/Input";
import Boton from "../Componentes/Boton";

export default function Registro({ navigation }: any) {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.botonAtras}
                >
                    <Text style={styles.atras}>←</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Crear cuenta</Text>
            </View>

            {/* Contenido */}
            <View style={styles.content}>
                <View style={styles.card}>
                    <Input label="Nombre de usuario"/>
                    <Input label="Correo electrónico"/>
                    <Input label="Contraseña"/>

                    <Boton title="Registrarse" />
            </View>

            <TouchableOpacity style={styles.gugulBoton}>
                <Text style={styles.gugulTexto}>Continuar con Google</Text>
            </TouchableOpacity>
            
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDE4C7"
    },
    header: {
        backgroundColor: "#FFD600",
        paddingTop: 50,
        paddingBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    botonAtras: {
        position: "absolute",
        left: 20,
        top: 50,
    },
    atras: {
        fontSize: 22,
        fontWeight: "bold",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
    },
    card: {
        backgroundColor: "#FFD600",
        width: "80%",
        padding: 20,
        borderRadius: 12,
    },
    gugulBoton: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: "center",
        marginTop: 25,
    },
    gugulTexto: {
        fontSize: 15,
    },
})