import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { textInfo } from "../../constants/Colors";
export default function ItemProcess(props: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          padding: 10,
          marginVertical: 5,
          marginHorizontal: 2,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}
      >
        <View>
          <Ionicons name="water" size={24} color={"#81c784"} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: textInfo, fontWeight: "700" }}>VD0101D160</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward" size={24} color={textInfo} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
