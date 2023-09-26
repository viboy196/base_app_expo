import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Switch } from "react-native-paper";
import { textInfo, textLight } from "../../constants/Colors";
import { RootTabScreenProps } from "../../navigation/types";
export default function TabInfo({ navigation }: RootTabScreenProps<"TabInfo">) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 250,
          backgroundColor: "#2aa048",
          borderEndEndRadius: 40,
          borderEndStartRadius: 40,
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 10,
            margin: 10,
          }}
          onPress={() => navigation.replace("Login", { screen: "login" })}
        >
          <Ionicons name="log-out-outline" size={24} color={"#fff"} />
          <Text style={{ paddingLeft: 5, color: "#fff" }}>Đăng xuất</Text>
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                width: 90,
                height: 90,
                borderRadius: 90,
              }}
            >
              <Image
                source={require("../../assets/Logo_512_512.png")}
                style={{ width: 80, height: 80 }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <View style={{ flexDirection: "row", padding: 10, marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: textLight, fontWeight: "bold" }}>
              Thông tin cá nhân
            </Text>

            <Text style={{ color: textInfo, fontStyle: "italic" }}>
              Cập nhật thông tin cá nhân
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderRadius: 35,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "orange",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}
            >
              <Ionicons name="pencil" size={20} color={"#fff"} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10, marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: textLight, fontWeight: "bold" }}>
              Nhận thông báo từ tủ điện
            </Text>

            <Text style={{ color: "#7b7a7b", fontStyle: "italic" }}>
              Các thông tin , cảnh báo của tủ điện
            </Text>
          </View>
          <View>
            <Switch value={true} onValueChange={() => {}} />
          </View>
        </View>
        <View style={{ flexDirection: "row", padding: 10, marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: textLight, fontWeight: "bold" }}>
              Nhận thông báo sensor, môi trường
            </Text>

            <Text style={{ color: "#7b7a7b", fontStyle: "italic" }}>
              Các thông tin , cảnh báo của cảm biến
            </Text>
          </View>
          <View>
            <Switch value={true} onValueChange={() => {}} />
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10, marginBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: textLight, fontWeight: "bold" }}>
              Nhận thông báo từ đồng hồ nước
            </Text>

            <Text style={{ color: "#7b7a7b", fontStyle: "italic" }}>
              Các thông tin , cảnh báo của đồng hồ nước
            </Text>
          </View>
          <View>
            <Switch value={true} onValueChange={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
}
