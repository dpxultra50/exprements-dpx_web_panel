import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  isDeleted: false,
  isUpdated: false,
  message: null,
  error: null,
};

// Update Profile
export const updateProfile = createAsyncThunk(
  'updateProfile',

  async (userData, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'multipart/form-data'},
      withCredentials: true,
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/me/update`,
        userData,
        config,
      );

      return response.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

// Update Password
export const updatePassword = createAsyncThunk(
  'updatePassword',

  async (passwords, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/password/update`,
        passwords,
        config,
      );

      return response.data.success;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,

  //Reducers
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },

    clearMessage: (state, action) => {
      state.message = null;
    },

    updateReset: (state, action) => {
      state.isUpdated = false;
    },
  },

  //Extra Reducers
  extraReducers: builder => {
    //Update Profile
    builder.addCase(updateProfile.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Update Password
    builder.addCase(updatePassword.pending, state => {
      state.loading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {clearErrors, updateReset, clearMessage} = profileSlice.actions;
export default profileSlice.reducer;
