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
import ItemProcessDetail from "./ItemProcessDetail";
import ModalShare from "./ModalShare";
import { paddingNavTop } from "../../utils/helper/UIHelper";
import { RootStackScreenProps } from "../../navigation/types";
export default function ProcessDetail({
  navigation,
}: RootStackScreenProps<"processDetail">) {
  const day = new Date();
  const dayback = new Date(day.getTime());
  dayback.setDate(day.getDate() - 1);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
      <ModalShare onDismiss={hideModal} visible={visible} />
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
          <TouchableOpacity onPress={showModal}>
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
            <TouchableOpacity
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: "#efefef",
                paddingLeft: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("settingProcess")}
            >
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={{ color: textLight }}>Cài đặt</Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontStyle: "italic",
                    color: textInfo,
                    marginTop: 10,
                  }}
                >
                  Điểm đo
                </Text>
              </View>
              <Ionicons
                name="settings"
                size={20}
                style={{ marginRight: 10 }}
                color={mainColor}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: "#efefef",
                paddingLeft: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={{ color: textLight }}>Biểu đồ</Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontStyle: "italic",
                    color: textInfo,
                    marginTop: 10,
                  }}
                >
                  Xem Biểu đồ
                </Text>
              </View>
              <Ionicons
                name="pie-chart-sharp"
                size={20}
                style={{ marginRight: 10 }}
                color={mainColor}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              backgroundColor: "#fff",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: "#efefef",
                paddingLeft: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={{ color: textLight }}>3,680 (V)</Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontStyle: "italic",
                    color: textInfo,
                    marginTop: 10,
                  }}
                >
                  Pin
                </Text>
              </View>
              <Ionicons
                name="battery-half-sharp"
                size={20}
                style={{ marginRight: 10 }}
                color={"#2aa048"}
              />
            </View>

            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: "#efefef",
                paddingLeft: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={{ color: textLight }}>11,987 (V)</Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontStyle: "italic",
                    color: textInfo,
                    marginTop: 10,
                  }}
                >
                  Ác quy
                </Text>
              </View>
              <Ionicons
                name="power"
                size={20}
                style={{ marginRight: 10 }}
                color={"#2aa048"}
              />
            </View>
          </View>

          <View>
            <ScrollView>
              <ItemProcessDetail />

              <ItemProcessDetail />
              <ItemProcessDetail />
              <ItemProcessDetail />
              <ItemProcessDetail />
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
