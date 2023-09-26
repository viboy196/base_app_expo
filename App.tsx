import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// react native paper
import { MD3LightTheme, Provider as PaperProvider } from "react-native-paper";
import { RootSiblingParent } from "react-native-root-siblings";
import { mainColor } from "./constants/Colors";
import Login from "./uiClone/Login";
import ForgotPassword from "./uiClone/ForgotPassword";
import Register from "./uiClone/Register";
import TabHome from "./uiClone/TabHome";
import TabInfo from "./uiClone/TabInfo";
import Process from "./uiClone/Process";
import ProcessDetail from "./uiClone/Process/ProcessDetail";
const queryClient = new QueryClient();

const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: mainColor,
    secondary: "#f1c40f",
    tertiary: "#a1b2c3",
  },
};
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={theme}>
        <RootSiblingParent>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <QueryClientProvider client={queryClient}>
                <SafeAreaProvider>
                  {/* <Navigation colorScheme={colorScheme} /> */}
                  <ProcessDetail />
                  <StatusBar />
                </SafeAreaProvider>
              </QueryClientProvider>
            </PersistGate>
          </Provider>
        </RootSiblingParent>
      </PaperProvider>
    );
  }
}
