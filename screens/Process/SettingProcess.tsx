import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { mainColor, textInfo, textLight } from "../../constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import ItemProcess from "./ItemProcess";
import ItemProcessDetail from "./ItemProcessDetail";
import { TextInput } from "react-native-paper";
import { paddingNavTop } from "../../utils/helper/UIHelper";
import { RootStackScreenProps } from "../../navigation/types";
export default function SettingProcess({
  navigation,
}: RootStackScreenProps<"settingProcess">) {
  const day = new Date();
  const dayback = new Date(day.getTime());
  dayback.setDate(day.getDate() - 1);
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
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
            VD0101D160
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 12,
              fontStyle: "italic",
            }}
          >
            kết nối
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={{ color: "#fff" }}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            textTransform: "uppercase",
            padding: 10,
            color: textLight,
          }}
        >
          Thông tin điểm đo
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="pencil" color={mainColor} size={24} />
          <TextInput
            placeholder="Tên điểm đo"
            label={"Tên điểm đo"}
            placeholderTextColor={mainColor}
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="location" color={mainColor} size={24} />
          <TextInput
            placeholder="Địa chỉ"
            label={"Địa chỉ"}
            placeholderTextColor={mainColor}
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="calendar" color={mainColor} size={24} />
          <TextInput
            placeholder="Ngày cài đặt"
            label={"Ngày cài đặt"}
            placeholderTextColor={mainColor}
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="calendar" color={mainColor} size={24} />
          <TextInput
            placeholder="Ngày xác minh"
            label={"Ngày xác minh"}
            placeholderTextColor={mainColor}
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="calendar" color={mainColor} size={24} />
          <TextInput
            placeholder="Ngày cài đặt logger"
            label={"Ngày cài đặt logger"}
            placeholderTextColor={mainColor}
            value="2023/08/08"
            cursorColor={mainColor}
            right={<TextInput.Icon icon="delete-forever" />}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            textTransform: "uppercase",
            padding: 10,
            color: textLight,
          }}
        >
          Cài đặt điểm đo
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="contract" color={mainColor} size={24} />
          <TextInput
            placeholder="Hệ số xung"
            label={"Hệ số xung"}
            placeholderTextColor={mainColor}
            value="1.0"
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="timer" color={mainColor} size={24} />
          <TextInput
            placeholder="chỉ số chốt"
            label={"chỉ số chốt"}
            placeholderTextColor={mainColor}
            value="1.0"
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="cloud-upload" color={mainColor} size={24} />
          <TextInput
            placeholder="Ngưỡng trên của lưu lượng"
            label={"Ngưỡng trên của lưu lượng"}
            placeholderTextColor={mainColor}
            value="1.0"
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="cloud-download" color={mainColor} size={24} />
          <TextInput
            placeholder="Ngưỡng dưới của lưu lượng"
            label={"Ngưỡng dưới của lưu lượng"}
            placeholderTextColor={mainColor}
            value="1.0"
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="battery-half-sharp" color={mainColor} size={24} />
          <TextInput
            placeholder="Ngưỡng Cảnh báo pin"
            label={"Ngưỡng Cảnh báo pin"}
            placeholderTextColor={mainColor}
            value="1.0"
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Ionicons name="power-sharp" color={mainColor} size={24} />
          <TextInput
            placeholder="Ngưỡng Cảnh ắc quy"
            label={"Ngưỡng Cảnh ắc quy"}
            placeholderTextColor={mainColor}
            value="1.0"
            cursorColor={mainColor}
            style={{ flex: 1, backgroundColor: "transparent" }}
          />
        </View>
      </View>
    </View>
  );
}
