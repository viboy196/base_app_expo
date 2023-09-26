import { View, Text, Image } from "react-native";
import React from "react";
import { mainColor, textLight } from "../../constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";
export default function ItemProcessDetail() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginVertical: 5,
        padding: 10,
        borderRadius: 8,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/water-meter.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text
          style={{
            padding: 10,
            color: textLight,
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          {new Date().toLocaleString()}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#e9e9e9",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ padding: 10 }}>
          <Ionicons name="speedometer" size={20} color={mainColor} />
        </View>
        <View style={{ flex: 1, padding: 10, paddingHorizontal: 20 }}>
          <Text style={{ color: textLight }}>Chỉ số hiện tại</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ color: textLight }}>901290.0</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#e9e9e9",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ padding: 10 }}>
          <Ionicons name="speedometer" size={20} color={mainColor} />
        </View>
        <View style={{ flex: 1, padding: 10, paddingHorizontal: 20 }}>
          <Text style={{ color: textLight }}>Áp xuất (bar)</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ color: textLight }}>2.401</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderBottomColor: "#e9e9e9",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ padding: 10 }}>
          <Ionicons name="speedometer" size={20} color={mainColor} />
        </View>
        <View style={{ flex: 1, padding: 10, paddingHorizontal: 20 }}>
          <Text style={{ color: textLight }}>Sản lượng (m³)</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ color: textLight }}>5.0</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ padding: 10 }}>
          <Ionicons name="speedometer" size={20} color={mainColor} />
        </View>
        <View style={{ flex: 1, padding: 10, paddingHorizontal: 20 }}>
          <Text style={{ color: textLight }}>Lưu lượng (m³/h)</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ color: textLight }}>30.0</Text>
        </View>
      </View>
    </View>
  );
}
