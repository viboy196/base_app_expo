import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { mainColor, textLight } from "../constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput } from "react-native-paper";
import { paddingNavTop } from "../utils/helper/UIHelper";
import { RootStackScreenProps } from "../navigation/types";
export default function AddDevices({
  navigation,
}: RootStackScreenProps<"addDevices">) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: mainColor,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
          paddingTop: paddingNavTop + 10,
        }}
      >
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
        >
          <Ionicons name="arrow-back" size={24} color={"#fff"} />
        </TouchableOpacity>
        <View style={{ flex: 1, paddingLeft: 20 }}>
          <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
            Thêm thiết bị
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              paddingHorizontal: 40,
              textAlign: "center",
              color: textLight,
              fontWeight: "700",
            }}
          >
            Quét mã và nhập mật khẩu đã được cung cấp để thêm thiết bị mới!
          </Text>
          <Image
            source={require("../assets/scan-qr-code.png")}
            style={{ height: 150, marginTop: 20 }}
            resizeMode="contain"
          />

          <View
            style={{ padding: 20, justifyContent: "center", width: "100%" }}
          >
            <TextInput label={"Mã thiết bị"} style={{ backgroundColor: "" }} />
            <TouchableOpacity
              style={{ padding: 10, position: "absolute", right: 10 }}
            >
              <Ionicons name="qr-code" size={24} color={mainColor} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 8,
                width: 100,
                marginLeft: 10,
                backgroundColor: mainColor,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>Gửi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
