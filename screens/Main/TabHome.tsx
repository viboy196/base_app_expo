import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { mainColor, textLight } from "../../constants/Colors";
import { RootTabScreenProps } from "../../navigation/types";
import { paddingNavTop } from "../../utils/helper/UIHelper";
export default function TabHome({ navigation }: RootTabScreenProps<"TabHome">) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          height: 250,
          backgroundColor: mainColor,
          borderEndEndRadius: 40,
          borderEndStartRadius: 40,
          paddingTop: paddingNavTop,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Ionicons name="person-circle-outline" size={20} color={"#fff"} />
          <Text style={{ paddingLeft: 5, color: "#fff" }}>Manh Quawaco</Text>
        </View>
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
        <View style={{ flex: 1 }} />
        <View
          style={{
            marginBottom: 20,
            padding: 10,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, marginLeft: 5 }}
            onPress={() => navigation.navigate("addDevices")}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="add-circle" color="#fff" size={24} />
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Thêm thiết bị
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginLeft: 5 }}
            onPress={() => navigation.navigate("notification")}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="notifications" color="#fff" size={24} />
              <Text style={{ color: "#fff" }}>Thông báo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginLeft: 5 }}
            onPress={() => navigation.navigate("settings")}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="settings" color="#fff" size={24} />
              <Text style={{ color: "#fff" }}>Cài đặt</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginLeft: 5 }}
            onPress={() => navigation.navigate("support")}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="book" color="#fff" size={24} />
              <Text style={{ color: "#fff" }}>Hướng dẫn</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              flex: 1,
              padding: 15,
              borderRadius: 10,
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 5,
              margin: 5,
            }}
            onPress={() => navigation.navigate("process")}
          >
            <View>
              <Ionicons name="flash" size={28} color={mainColor} />
              <Text
                style={{
                  paddingTop: 10,
                  textAlign: "center",
                  color: textLight,
                }}
              >
                Tủ điều khiển
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              flex: 1,
              padding: 15,
              borderRadius: 10,
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 5,
              margin: 5,
            }}
            onPress={() => navigation.navigate("process")}
          >
            <View>
              <Ionicons name="water" size={28} color={mainColor} />
              <Text
                style={{
                  paddingTop: 10,
                  textAlign: "center",
                  color: textLight,
                }}
              >
                Đồng hồ nước
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", backgroundColor: "#fff" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              flex: 1,
              padding: 15,
              borderRadius: 10,
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 5,
              margin: 5,
            }}
            onPress={() => navigation.navigate("process")}
          >
            <View>
              <Ionicons name="partly-sunny" size={28} color={mainColor} />
              <Text
                style={{
                  paddingTop: 10,
                  textAlign: "center",
                  color: textLight,
                }}
              >
                Cảm biến môi trường
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              flex: 1,
              padding: 15,
              borderRadius: 10,
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 5,
              margin: 5,
            }}
            onPress={() => navigation.navigate("process")}
          >
            <View>
              <Ionicons name="beaker" size={28} color={mainColor} />
              <Text
                style={{
                  paddingTop: 10,
                  textAlign: "center",
                  color: textLight,
                }}
              >
                Công tơ điện
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
