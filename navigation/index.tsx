import {
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRef,
  StackActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import { RootStackParamList } from "./types";
import { useAppSelector } from "../redux/store/hooks";
import { mainColor } from "../constants/Colors";

// screens
import LoginScreen from "../screens/Login";
import MainScreen from "../screens/Main";

import AddDevicesScreen from "../screens/AddDevices";

import NotificationScreen from "../screens/Notification";

import SettingsScreen from "../screens/Settings";

import SupportScreen from "../screens/Support";

import ProcessScreen from "../screens/Process";

import ProcessDetailScreen from "../screens/Process/ProcessDetail";

import SettingProcessScreen from "../screens/Process/SettingProcess";

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export default function Navigation({}: { colorScheme?: ColorSchemeName }) {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{ ...DefaultTheme, dark: false }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { token } = useAppSelector((state) => state.auth);
  const [isCheck, setIsCheck] = React.useState<boolean>(token !== undefined);
  React.useEffect(() => {
    if (navigationRef.current?.isReady()) {
      if (token === undefined) {
        navigationRef.current?.dispatch(StackActions.replace("Login"));
        return;
      }
      if (token !== undefined) {
        navigationRef.current?.dispatch(StackActions.replace("Main"));
        return;
      }
    }
  }, [token, isCheck]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: mainColor },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="addDevices"
        component={AddDevicesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="support"
        component={SupportScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="process"
        component={ProcessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="processDetail"
        component={ProcessDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="settingProcess"
        component={SettingProcessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
