import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Image, View, Dimensions } from "react-native";
import Home from "./screens/principal";
import { Quiz } from "./screens";


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');


const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="inicio" options={{headerShown: false}} component={Home} />
      <Stack.Screen name="pagina" options={{headerShown: false}} component={Quiz} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}