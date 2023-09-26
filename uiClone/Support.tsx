import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { mainColor, textInfo, textLight } from "../constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Switch } from "react-native-paper";
export default function Support() {
  const day = new Date();
  const dayback = new Date(day.getTime());
  dayback.setDate(day.getDate() - 1);
  const [visible, setVisible] = React.useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
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
        }}
      >
        <View>
          <Ionicons name="arrow-back" size={24} color={"#fff"} />
        </View>
        <View style={{ flex: 1, paddingLeft: 20 }}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
            Trợ giúp
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, padding: 20 }}>
        <View
          style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: textLight,
          }}
        >
          <View
            style={{
              backgroundColor: mainColor,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              padding: 10,
            }}
          >
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "700" }}
            >
              Hệ thống quản lý điều khiển giám sát
            </Text>
          </View>
          <View style={{ padding: 10 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
              }}
            >
              <Image
                source={require("../assets/Logo_512_512.png")}
                style={{ width: 80, height: 80 }}
              />
            </View>
            <Text
              style={{
                color: textLight,
                fontSize: 12,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Địa chỉ:</Text> Số 52 Nguyễn
              Chí Thanh - Đống Đa - Ba Đình - Hà nội
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
