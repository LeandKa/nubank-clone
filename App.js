import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import Options from "./src/pages/Options";

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Options" component={Options} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
