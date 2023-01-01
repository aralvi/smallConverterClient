import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "@constants/ApiUrls";
import Toast from "@components/allToasts/AllToasts";

const Auth = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    success: false,
    error: false,
    message: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(LoginSignup.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(LoginSignup.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      }),
});

export const { setUser, setToken } = Auth.actions;

export default Auth.reducer;

/*
------------
Login/Signup
------------
*/
export const LoginSignup = createAsyncThunk(
  "auth/loginsignup",
  async (args, thunkApi) => {
    const successMsg = {
      login: "Logged in Successfully",
      oauth: "Logged in Successfully",
      signup: "Signed up Successfully",
    };
    try {
      const response = await axios.post(Api[args.method], args.data);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        Toast.success(successMsg[args.method]);
        return thunkApi.fulfillWithValue({
          user: response.data.user,
          token: response.data.token,
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      const message =
        error?.response?.data?.detail?.message ??
        error.message ??
        error.toString();
      console.log("error message:", message);
      console.log("error", error);
      Toast.error(message);
      return thunkApi.rejectWithValue(message);
    }
  }
);
/*
------
logout
------
*/
export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
});
