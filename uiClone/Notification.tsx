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
export default function Notification() {
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
            Danh sách cảnh báo
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 12,
              fontStyle: "italic",
            }}
          >
            Tất cả
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={showModal}>
            <Ionicons name="share-social" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              paddingVertical: 10,
              backgroundColor: "#fff",
            }}
          >
            <View
              style={{
                flex: 1,

                paddingLeft: 5,
              }}
            >
              <Text style={{ color: textLight }}>Thời gian từ</Text>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#eee",
                  borderRadius: 8,
                }}
              >
                <Ionicons name="calendar" color={"#ed9517"} size={20} />
                <Text style={{ padding: 10 }}>
                  {dayback.toLocaleDateString()}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,

                paddingLeft: 5,
              }}
            >
              <Text style={{ color: textLight }}>Thời gian đến</Text>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#eee",
                  borderRadius: 8,
                }}
              >
                <Ionicons name="calendar" color={"#71d7d9"} size={20} />
                <Text style={{ padding: 10 }}>{day.toLocaleDateString()}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
