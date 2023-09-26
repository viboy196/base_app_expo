import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { mainColor, textInfo, textLight } from "../../constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import ItemProcess from "./ItemProcess";
export default function ProcessDetail() {
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
        }}
      >
        <View>
          <Ionicons name="arrow-back" size={24} color={"#fff"} />
        </View>
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
            <Ionicons name="share-social" size={24} color={"#fff"} />
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
              <Text style={{ color: mainColor, textAlign: "center" }}>Giờ</Text>
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
                Ngày
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
                Tháng
              </Text>
            </TouchableOpacity>
          </View>
        </View>

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
                borderRightWidth: 1,
                borderRightColor: textInfo,
                paddingLeft: 5,
              }}
            >
              <Text style={{ color: textLight }}>Từ</Text>

              <Text
                style={{
                  fontSize: 10,
                  fontStyle: "italic",
                  color: textInfo,
                  marginTop: 10,
                }}
              >
                {dayback.toLocaleString()}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: textInfo,
                paddingLeft: 5,
              }}
            >
              <Text style={{ color: textLight }}>Đến</Text>

              <Text
                style={{
                  fontSize: 10,
                  fontStyle: "italic",
                  color: textInfo,
                  marginTop: 10,
                }}
              >
                {day.toLocaleString()}
              </Text>
            </View>
            <View style={{ width: 80 }}>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Ionicons name="search" size={20} color={mainColor} />
              </TouchableOpacity>
            </View>
          </View>

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
                borderRightWidth: 1,
                borderRightColor: textInfo,
                paddingLeft: 5,
              }}
            >
              <Text style={{ color: textLight }}>Từ</Text>

              <Text
                style={{
                  fontSize: 10,
                  fontStyle: "italic",
                  color: textInfo,
                  marginTop: 10,
                }}
              >
                {dayback.toLocaleString()}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: textInfo,
                paddingLeft: 5,
              }}
            >
              <Text style={{ color: textLight }}>Đến</Text>

              <Text
                style={{
                  fontSize: 10,
                  fontStyle: "italic",
                  color: textInfo,
                  marginTop: 10,
                }}
              >
                {day.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
