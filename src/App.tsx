import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Carga from './Paginas/Carga';
import Inicio from './Paginas/Inicio'
import Login from './Paginas/Login'
import Registro from './Paginas/Registro';
import ChatbotPrincipal from './Paginas/ChatbotPrincipal';
import ChatVoz from './Paginas/ChatbotVoz';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Carga" component={Carga} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Chatbot" component={ChatbotPrincipal} />
        <Stack.Screen name="ChatbotVoz" component={ChatVoz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
