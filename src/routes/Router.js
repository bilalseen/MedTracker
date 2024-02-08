import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "../routes/TabNavigation";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PasswordReset from "../pages/PasswordReset";
import ProfileInformation from "../pages/ProfileInformation";
import EditProfile from "../pages/EditProfile";
import EditMedicine from "../pages/EditMedicine";
import PasswordChange from "../pages/PasswordChange";
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
          <Stack.Screen
            name="ProfileInformation"
            component={ProfileInformation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PasswordChange"
            component={PasswordChange}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditMedicine"
            component={EditMedicine}
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
          <Stack.Screen
            name="PasswordReset"
            component={PasswordReset}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Router;
