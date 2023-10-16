import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  success: false,
  message: null,
  error: null,
};

//Forgot Password
export const forgotpassword = createAsyncThunk(
  'forgotpassword',
  async (email, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/password/forgot`,
        email,
        config,
      );
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//Reset Password
export const resetPassword = createAsyncThunk(
  'resetPassword',
  async (credentials, thunkAPI) => {
    const {resetPassForm, token} = credentials;
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/password/reset/${token}`,
        resetPassForm,
        config,
      );
      return response.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//Request To Verifi
export const verifirequest = createAsyncThunk(
  'verifirequest',
  async (email, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/account/verifirequest/`,
        email,
        config,
      );
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

// Verify Account
export const verifyAccount = createAsyncThunk(
  'verifyAccount',
  async (token, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/account/verify/${token}`,
        config,
      );
      return response.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,

  //Reducers
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
  },

  //Extra Reducers
  extraReducers: builder => {
    //Forgot Password
    builder.addCase(forgotpassword.pending, state => {
      state.loading = true;
    });
    builder.addCase(forgotpassword.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(forgotpassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Reset Password
    builder.addCase(resetPassword.pending, state => {
      state.loading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Request To Verifi
    builder.addCase(verifirequest.pending, state => {
      state.loading = true;
    });
    builder.addCase(verifirequest.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    });
    builder.addCase(verifirequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Verify Account
    builder.addCase(verifyAccount.pending, state => {
      state.loading = true;
    });
    builder.addCase(verifyAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
    });
    builder.addCase(verifyAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {clearErrors, clearMessage} = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
