import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { mainColor } from "../../constants/Colors";
import { RootLoginProps } from "../../navigation/types";
export default function Login({ navigation }: RootLoginProps<"login">) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, padding: 60 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../../assets/Logo_512_512.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 2,
            paddingTop: 100,
            borderBottomColor: mainColor,
            marginBottom: 10,
          }}
        >
          <Ionicons name="person-circle-outline" color={mainColor} size={24} />
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
          <Ionicons name="key" color={mainColor} size={24} />
          <TextInput
            placeholder="Số điện thoại"
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
            justifyContent: "flex-end",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("forgotPassword")}
          >
            <Text style={{ color: mainColor, textDecorationLine: "underline" }}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
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
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={{ color: mainColor, textDecorationLine: "underline" }}>
              Đăng ký tài khoản
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require("../../assets/img_login.jpg")}
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
              paddingBottom: 20,
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
