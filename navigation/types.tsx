/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Main: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: NavigatorScreenParams<RootLoginParamList> | undefined;
  addDevices: undefined;
  notification: undefined;
  settings: undefined;
  support: undefined;
  process: undefined;
  processDetail: undefined;
  settingProcess: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootLoginParamList = {
  login: undefined;
  register: undefined;
  forgotPassword: undefined;
};
export type RootLoginProps<Screen extends keyof RootLoginParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootLoginParamList>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type RootRegisterParamList = {
  Register1: undefined;
  Register2: { userName: string; fullName: string };
};
export type RootRegisterProps<Screen extends keyof RootRegisterParamList> =
  NativeStackScreenProps<RootRegisterParamList, Screen>;

export type RootTabParamList = {
  TabHome: undefined;
  TabInfo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
