import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { mainColor, textLight } from "../../constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import ItemProcess from "./ItemProcess";
export default function Process() {
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
          <TextInput
            placeholder="Nhập thông tin cần tìm kiếm"
            placeholderTextColor={"#fff"}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginRight: 40 }}>
            <Ionicons name="search" size={24} color={"#fff"} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="add-circle" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                borderBottomWidth: 2,
                padding: 10,
                borderBottomColor: mainColor,
              }}
            >
              <Text style={{ color: mainColor, textAlign: "center" }}>
                Tất cả
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                borderBottomWidth: 0,
                padding: 10,
                borderBottomColor: mainColor,
              }}
            >
              <Text style={{ color: textLight, textAlign: "center" }}>
                Kết nối
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                borderBottomWidth: 0,
                padding: 10,
                borderBottomColor: mainColor,
              }}
            >
              <Text style={{ color: textLight, textAlign: "center" }}>
                Mất kết nối
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Text>Manh Quawaco</Text>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
            <ItemProcess />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
