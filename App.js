import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Barcode from "./screens/Barcode";
import { useEffect } from "react";
import * as Font from "expo-font";
import Profile from "./screens/Profile";
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
    <View style={styles.container}>
      {/* <Barcode /> */}
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
