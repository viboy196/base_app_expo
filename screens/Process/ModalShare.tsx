import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Modal, Portal, TextInput } from "react-native-paper";

import Ionicons from "@expo/vector-icons/Ionicons";
import { mainColor, textLight } from "../../constants/Colors";
export default function ModalShare(props: {
  visible: boolean;
  onDismiss: () => void;
}) {
  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.onDismiss}
        contentContainerStyle={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <View style={{ padding: 10, justifyContent: "center" }}>
          <TextInput
            label={"Tài khoản cần chia sẻ Thiết bị"}
            style={{ backgroundColor: "" }}
          />
          <TouchableOpacity
            style={{ padding: 10, position: "absolute", right: 10 }}
          >
            <Ionicons name="qr-code" size={24} color={mainColor} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 8,
              width: 100,
              marginLeft: 10,
              backgroundColor: mainColor,
            }}
            onPress={props.onDismiss}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Thực hiện
            </Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 8,
              width: 100,
              marginLeft: 10,
              backgroundColor: textLight,
            }}
            onPress={props.onDismiss}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Hủy bỏ</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
}
