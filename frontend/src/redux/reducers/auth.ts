import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  enum_user: number;
  id: number;
  username: string;
  doctor?: any;
  student?: any;
  secretary?: any;
  teacher?: any;
}
interface AuthReducerState {
  accessToken: string | null;
  user: User | null;
}

const initialState: AuthReducerState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signInSuccess(
      state: AuthReducerState,
      { payload }: PayloadAction<AuthReducerState>
    ) {
      return { ...payload };
    },
  },
});

export const { signInSuccess } = authSlice.actions;

export default authSlice.reducer;
