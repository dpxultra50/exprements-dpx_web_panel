import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: true,
  error: null,
  project: {},
};

// Project Details --user --Admin
export const projectDetails = createAsyncThunk(
  'projectDetails',

  async (id, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/project/${id}`,
        config,
      );

      return response.data.project;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const projectDetailsSlice = createSlice({
  name: 'projectDetails',
  initialState,

  //Reducers
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
  },

  //Extra Reducers

  //Create New Meeting Request
  extraReducers: builder => {
    // User Meeting Details --user --Admin
    builder.addCase(projectDetails.pending, state => {
      state.loading = true;
    });
    builder.addCase(projectDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.project = action.payload;
    });
    builder.addCase(projectDetails.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export const {clearErrors} = projectDetailsSlice.actions;

export default projectDetailsSlice.reducer;
