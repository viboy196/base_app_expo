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
export default function Register() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 40 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              color: mainColor,
              fontSize: 18,
            }}
          >
            Đăng ký tài khoản
          </Text>
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
            borderBottomWidth: 2,
            borderBottomColor: mainColor,
            marginBottom: 20,
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
          <Ionicons name="key" color={mainColor} size={24} />
          <TextInput
            placeholder="Mật khẩu"
            secureTextEntry
            placeholderTextColor={mainColor}
            cursorColor={mainColor}
            style={{ flex: 1, padding: 10 }}
          />
          <View
            style={{
              height: "100%",
              position: "absolute",
              right: 0,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Ionicons name="eye" color={mainColor} size={24} />
          </View>
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
          <Ionicons name="key" color={mainColor} size={24} />
          <TextInput
            placeholder="Nhập lại mật khẩu"
            secureTextEntry
            placeholderTextColor={mainColor}
            cursorColor={mainColor}
            style={{ flex: 1, padding: 10 }}
          />
          <View
            style={{
              height: "100%",
              position: "absolute",
              right: 0,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Ionicons name="eye" color={mainColor} size={24} />
          </View>
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
          <Ionicons name="people" color={mainColor} size={24} />
          <TextInput
            placeholder="Họ và tên"
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>
              Đăng ký tài khoản
            </Text>
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
        <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 40 }}>
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
