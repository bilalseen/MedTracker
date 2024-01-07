import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Add from "../pages/Add";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

function App() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Add") {
                        iconName = focused ? "add-circle" : "add-circle-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    // İkonu döndür
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#505050",
                tabBarInactiveTintColor: "#BDBDC7",
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Add"
                component={Add}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>

    );
}

export default App;