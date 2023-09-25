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
import LinkingConfiguration from "./LinkingConfiguration";
import { useAppSelector } from "../redux/store/hooks";
import { mainColor } from "../constants/Colors";

// screens
import LoginScreen from "../screens/Login";
import MainScreen from "../screens/Main";

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export default function Navigation({}: { colorScheme?: ColorSchemeName }) {
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
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
    </Stack.Navigator>
  );
}
