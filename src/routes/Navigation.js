import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from "../routes/Router"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"


const Stack = createNativeStackNavigator();

function Navigation() {
    const [user, setUser] = useState(null)
    return (
        <NavigationContainer>
            {user ? (
                <Stack.Navigator>
                    <Stack.Screen name="Router" component={Router} options={{ headerShown: false }} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
}

export default Navigation