import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForoProvider } from './context/ForoContext';

import Carga from './Paginas/Carga';
import Inicio from './Paginas/Inicio'
import Login from './Paginas/Login'
import Registro from './Paginas/Registro';
import ChatbotPrincipal from './Paginas/Chatbot';
import ChatVoz from './Paginas/Chatbot_Voz';
import Chatbot_Conversacion from './Paginas/Chatbot_Conversacion';
import Foro from './Paginas/Foro';
import SubirReceta from './Paginas/SubirReceta';
import DetallePublicacion from './Paginas/DetallesPublicacion';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ForoProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Carga" component={Carga} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Chatbot" component={ChatbotPrincipal} />
        <Stack.Screen name="ChatbotVoz" component={ChatVoz} />
        <Stack.Screen name="Chatbot_Conversacion" component={Chatbot_Conversacion} />
        <Stack.Screen name="Foro" component={Foro} />
        <Stack.Screen name="SubirReceta" component={SubirReceta} />
        <Stack.Screen name="DetallePublicacion" component={DetallePublicacion} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
</ForoProvider>
  );
}
