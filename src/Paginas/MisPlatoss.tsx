import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useForo } from "../context/ForoContext";

import ModalConfirmacion from "../Componentes/ModalConfirmacion";
import PlatoGuardadoCard from "../Componentes/PlatoGuardadoCard";
import ToastMensaje from "../Componentes/ToastMensaje";
import Header from "../Componentes/Header";

export default function MisPlatoss({ navigation }: any) {

  const { publicaciones, toggleGuardar } = useForo();

  const guardados = publicaciones.filter(p => p.guardado);

  const [modalVisible, setModalVisible] = useState(false);
  const [platoSeleccionado, setPlatoSeleccionado] = useState<any>(null);
  const [mensaje, setMensaje] = useState("");

  const confirmarEliminar = () => {
    if (!platoSeleccionado) return;

    toggleGuardar(platoSeleccionado.id);
    setModalVisible(false);

    setMensaje("Plato eliminado");
    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#EDE4C7" }}>

      <Header 
        title="Mis platos" 
        onBack={() => navigation.goBack()}
      />

      <ScrollView>
        {guardados.map((plato) => (
          <PlatoGuardadoCard
            key={plato.id}
            plato={plato}
            onEliminar={(p: any) => {
              setPlatoSeleccionado(p);
              setModalVisible(true);
            }}
          />
        ))}
      </ScrollView>

      <ModalConfirmacion
        visible={modalVisible}
        onConfirm={confirmarEliminar}
        onCancel={() => setModalVisible(false)}
      />

      <ToastMensaje mensaje={mensaje} />

    </View>
  );
}