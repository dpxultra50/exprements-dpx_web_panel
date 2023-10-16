import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  isAuthenticated: false,
  user: {},
  error: null,
};

// Register
export const registerUser = createAsyncThunk(
  "registeruser",
  async (userData, thunkAPI) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/register`,
        userData,
        config
      );
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Login
export const login = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        credentials,
        config
      );
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Load User
export const loadUser = createAsyncThunk("loaduser", async (_, thunkAPI) => {
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/me`,
      config
    );
    return response.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

//Logout
export const logout = createAsyncThunk("logout", async (_, thunkAPI) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  };

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/logout`,
      config
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const authSlice = createSlice({
  name: "user",
  initialState,

  //Reducers
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
  },

  //Extra Reducers

  extraReducers: (builder) => {
    //Register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    });

    //Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = {};
    });

    // Load User
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
    });

    //Logout
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export const { clearErrors } = authSlice.actions;
export default authSlice.reducer;
