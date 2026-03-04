import React from "react";
import { View,StyleSheet } from "react-native";
import { useForo } from "../context/ForoContext";
import Header from "../Componentes/Header";
import DetallesPublicacion from "../Componentes/DetallesPublicacion";

export default function DetallePublicacion({ route, navigation }: any) {

  return (
<View style={styles.container}>

  {/* en el header va el nombre del usuario */}

      <Header title="Publicación" onBack={() => navigation.goBack()}/>
      <DetallesPublicacion navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE4C7",
  },
})