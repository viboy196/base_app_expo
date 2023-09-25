import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
export type UsersState = {
  token?: string;
  loading: "idle" | "pending" | "succeeded" | "failed";
  errorMessage?: string;
  userName?: string;
  password?: string;
  checkedAuth?: boolean;
  waterFactoryId?: string;
  waterUserId?: string;
  waterUserName?: string;
  UserId?: string;
};
const initialState = {
  loading: "idle",
  token: undefined,
} as UsersState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state = {
        ...state,
        token: undefined,
        errorMessage: undefined,
        waterFactoryId: undefined,
        waterUserId: undefined,
        waterUserName: undefined,
        loading: "idle",
      };
      return state;
    },
    addUserName(state, action: PayloadAction<{ userName: string }>) {
      state = {
        ...state,
        userName: action.payload.userName,
      };
      return state;
    },
    setStateAuthRemember(state, action: PayloadAction<{ input: UsersState }>) {
      const { userName, password, checkedAuth } = action.payload.input;
      if (checkedAuth) {
        state = {
          ...state,
          userName: action.payload.input.userName,
          password: action.payload.input.password,
          checkedAuth: action.payload.input.checkedAuth,
        };
      } else {
        state = {
          ...state,
          userName: undefined,
          password: undefined,
          checkedAuth: checkedAuth,
        };
      }

      return state;
    },
    setState(state, action: PayloadAction<{ input: UsersState }>) {
      state = { ...state, ...action.payload.input };

      return state;
    },
  },
});
export const { logOut, addUserName, setStateAuthRemember, setState } =
  authSlice.actions;

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

export default persistReducer(persistConfig, authSlice.reducer);
