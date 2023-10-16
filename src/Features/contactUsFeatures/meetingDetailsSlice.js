import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: true,
  message: null,
  error: null,
  uerMeeting: {},
};

// User Meeting Details --user --Admin
export const userMeetingDetails = createAsyncThunk(
  'userMeetingDetails',

  async (id, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/meeting/${id}`,
        config,
      );

      return response.data.uerMeeting;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const meetingDetailsSlice = createSlice({
  name: 'meetingDetails',
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

  //Create New Meeting Request
  extraReducers: builder => {
    // User Meeting Details --user --Admin
    builder.addCase(userMeetingDetails.pending, state => {
      state.loading = true;
    });
    builder.addCase(userMeetingDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.uerMeeting = action.payload;
    });
    builder.addCase(userMeetingDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {clearErrors, clearMessage} = meetingDetailsSlice.actions;

export default meetingDetailsSlice.reducer;
