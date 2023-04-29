import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Barcode from "./screens/Barcode";
import { useEffect } from "react";
import * as Font from "expo-font";
import Profile from "./screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        poppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
        poppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
        poppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
      });
      setLoaded(true);
    }
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Scan Barcode"
          component={Barcode}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
