import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImageSourcePropType, Image, Platform } from "react-native";
import Colors, { mainColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { RootTabParamList, RootTabScreenProps } from "../../navigation/types";
import TabHomeScreen from "./TabHome";
import TabInfo from "./TabInfo";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

export default function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator<RootTabParamList>();

  
  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        tabBarActiveTintColor: mainColor,
      }}
    >
      <BottomTab.Screen
        name="TabHome"
        component={TabHomeScreen}
        options={({ navigation }: RootTabScreenProps<"TabHome">) => ({
          title: "Trang chủ",

          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />

      <BottomTab.Screen
        name="TabInfo"
        component={TabInfo}
        options={{
          title: "Cá Nhân",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  imageSource?: ImageSourcePropType;
}) {
  if (props.imageSource) {
    return (
      <Image
        source={props.imageSource}
        resizeMode="cover"
        style={{ width: 30, height: 30, tintColor: props.color }}
      />
    );
  }
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
