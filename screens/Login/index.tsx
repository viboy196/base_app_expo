import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootLoginParamList } from "../../navigation/types";

import LoginScreen from "./Login";
import RegisterScreen from "./Register";
import ForgotPasswordScreen from "./ForgotPassword";

export default function Login() {
  const Stack = createNativeStackNavigator<RootLoginParamList>();
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ title: "Đăng ký tài khoản" }}
      />

      <Stack.Screen
        name="forgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: "Quên mật khẩu" }}
      />

      {/* <Stack.Screen
        name="two"
        component={LoginAfterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="InstallWaterScreen"
        component={InstallWaterScreen}
        options={{
          headerShown: true,
          title: "Đăng ký lắp nước",
          headerStyle: { backgroundColor: blueColorApp },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="InstallWaterFamilyScreen"
        component={InstallWaterFamilyScreen}
        options={{
          headerShown: true,
          title: "Đăng ký lắp nước hộ gia đình",
          headerStyle: { backgroundColor: blueColorApp },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="InstallWaterCompanyScreen"
        component={InstallWaterCompanyScreen}
        options={{
          headerShown: true,
          title: "Đăng ký lắp nước cơ quan , tổ chức",
          headerStyle: { backgroundColor: blueColorApp },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="ViewProcessScreen"
        component={ViewProcessScreen}
        options={{
          title: "Thủ tục cấp nước",
          headerStyle: { backgroundColor: blueColorApp },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="MyWebView"
        component={WebViewScreen}
        options={({ route }) => ({
          title: `${route.params.title}`,
          headerStyle: { backgroundColor: blueColorApp },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      /> */}
    </Stack.Navigator>
  );
}
