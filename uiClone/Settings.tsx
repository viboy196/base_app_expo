import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { mainColor, textInfo, textLight } from "../constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Switch } from "react-native-paper";
export default function Settings() {
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
            Cài đặt
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            paddingVertical: 20,
            marginBottom: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#ddd",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: textLight, fontWeight: "bold" }}>
              Nhận thông báo từ tủ điện
            </Text>
          </View>
          <View>
            <Switch value={true} onValueChange={() => {}} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            paddingVertical: 20,
            marginBottom: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#ddd",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: textLight, fontWeight: "bold" }}>
              Nhận thông báo từ công tơ nước
            </Text>
          </View>
          <View>
            <Switch value={true} onValueChange={() => {}} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            paddingVertical: 20,
            marginBottom: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#ddd",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{ color: textLight, fontWeight: "bold", marginRight: 40 }}
            >
              Nhận thông báo từ tham số môi trường
            </Text>
          </View>
          <View>
            <Switch value={true} onValueChange={() => {}} />
          </View>
        </View>
        <View>
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
                padding: 10,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Ionicons name="save" size={16} color={"#fff"} />
              <Text style={{ color: "#fff", fontWeight: "600", margin: 5 }}>
                Lưu cài đặt
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
