import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

export default function Notificacion({ mensaje, onFinish }: any) {
  const progreso = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(progreso, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => onFinish());
  }, []);

  const width = progreso.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Text>✅ {mensaje}</Text>
      <Animated.View style={[styles.barra, { width }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#f5e662",
    padding: 10,
    borderRadius: 10,
    zIndex: 999,
  },
  barra: {
    height: 4,
    backgroundColor: "#FFD600",
    marginTop: 5,
  },
});