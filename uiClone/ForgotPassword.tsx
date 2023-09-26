import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import { mainColor, textLight } from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
export default function ForgotPassword() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../assets/Logo_512_512.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 2,
            borderBottomColor: mainColor,
            marginBottom: 10,
          }}
        >
          <Ionicons name="mail" color={mainColor} size={24} />
          <TextInput
            placeholder="Email"
            placeholderTextColor={mainColor}
            cursorColor={mainColor}
            style={{ flex: 1, padding: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 2,
            borderBottomColor: mainColor,
            marginBottom: 20,
          }}
        >
          <Ionicons name="call" color={mainColor} size={24} />
          <TextInput
            placeholder="Số điện thoại"
            placeholderTextColor={mainColor}
            cursorColor={mainColor}
            style={{ flex: 1, padding: 10 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: mainColor,
              padding: 15,
              borderRadius: 8,
              width: 120,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require("../assets/img_login.jpg")}
        style={{ height: 200, justifyContent: "center", alignItems: "center" }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(255, 255, 255, 1)", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
          }}
        />
        <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 40 }}>
          <Text
            style={{ color: mainColor, textAlign: "center", marginBottom: 10 }}
          >
            <Text style={{ fontWeight: "bold" }}>Địa chỉ:</Text> Số 52 Nguyễn
            Chí Thanh - Đống Đa - Ba Đình - Hà nội
          </Text>
          <Text style={{ color: mainColor, textAlign: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Liên hệ:</Text> 0981 325 335
          </Text>
          <View style={{ flex: 1 }} />
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              textAlign: "center",
              paddingBottom: 10,
              fontWeight: "700",
            }}
          >
            Bản quyền © 2023 Dịch vụ nước, đã đăng ký bản quyền
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
