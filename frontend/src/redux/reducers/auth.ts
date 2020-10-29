import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  enum_user: number;
  id: number;
  username: string;
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
    signInSucess(
      state: AuthReducerState,
      { payload }: PayloadAction<AuthReducerState>
    ) {
      state = payload;
    },
  },
});

export const { signInSucess } = authSlice.actions;

export default authSlice.reducer;
