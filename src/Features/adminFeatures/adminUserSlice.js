import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  success: false,
  error: null,
  users: [],
};

//Get All User --Admin
export const getAllUser = createAsyncThunk(
  'getAllUser',

  async (_, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/users`,
        config,
      );
      return response.data.users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const adminUserSlice = createSlice({
  name: 'adminUser',
  initialState,

  //Reducers
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
  },

  //Extra Reducers

  extraReducers: builder => {
    // Get All Project --Admin
    builder.addCase(getAllUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {clearErrors} = adminUserSlice.actions;

export default adminUserSlice.reducer;
