import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "../routes/TabNavigation";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import FIREBASE_AUTH from "../services/config";
import { onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

function Router() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
    setUser(authUser);
  });
  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Router;
