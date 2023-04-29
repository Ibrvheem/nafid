import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Barcode({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("Profile");

    alert(`Scanned Successfully. please wait`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <View
        style={{
          width: 400,
          height: 400,
          borderRadius: 20,
          backgroundColor: "red",
          overflow: "hidden",
        }}
      >
        <BarCodeScanner
          height="100%"
          width="100%"
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </View>

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <Text style={styles.smallText}>
        PLACE QR-CODE IN THE CAMERA BOX TO CONTINUE
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  smallText: {
    fontFamily: "poppinsBold",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
});
