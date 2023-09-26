import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  BarCodeEvent,
  BarCodeScanner,
  PermissionStatus,
} from "expo-barcode-scanner";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Layout from "../constants/Layout";
import { mainColor } from "../constants/Colors";

export default function ScanQrCode() {
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [scanned, setScanned] = useState(false);
  const [qrCode, setQrCode] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [viewCamera, setViewCamera] = useState<boolean>(true);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status === PermissionStatus.GRANTED) setHasPermission(true);
    })();
  };
  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);
  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }: BarCodeEvent) => {
    setScanned(true);
    setQrCode(data);
    console.log("Type: " + type + "\nData: " + data);
  };
  // Check permissions and return the screens

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }

  // Return the View
  return (
    <View style={styles.container}>
      <Spinner visible={loading} textStyle={{ color: "#FFF" }} />
      {viewCamera && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            width: Layout.window.width + 10,
            height: Layout.window.height,
          }}
        />
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          width: "100%",
          alignItems: "center",
          top: 10,
        }}
        onPress={() => {
          if (scanned) {
            setQrCode(undefined);
            setScanned(false);
            setViewCamera(true);
          }
        }}
      >
        <View
          style={{
            margin: 10,
            backgroundColor: "rgba(0,0,0,0.4)",
            width: 240,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "#fff" }}>
            {!qrCode ? "Vui lòng quét mã QR" : "Quét lại"}
          </Text>
          {!qrCode && <ActivityIndicator color={mainColor} />}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
