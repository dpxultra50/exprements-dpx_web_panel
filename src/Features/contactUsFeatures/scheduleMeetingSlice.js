import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  timenZone: {},
  loading: false,
  success: false,
  message: null,
  error: null,
  isUpdated: false,
  userMeetings: [],
  userMeetingsHistory: [],
  uerMeeting: {},
  meetingId: '',
  meetingsCount: null,
  resultPerPage: null,
  filteredMeetingsCount: null,
};

//Create New Meeting Request
export const meetingRequest = createAsyncThunk(
  'meetingRequest',

  async (meetingData, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/meeting/request`,
        meetingData,
        config,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//Edit, Verify And Schedule Meeting --Admin
export const editAndVerifyMeeting = createAsyncThunk(
  'editAndVerifyMeeting',

  async (meetingData, thunkAPI) => {
    const {data, id} = meetingData;
    // const id = '644267f5f4487f7cc71f4d94';
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/meeting/schedule/${id}`,
        data,
        config,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//Get All Meetings --Admin
export const getAllMeetings = createAsyncThunk(
  'getAllMeetings',

  async (filterData, thunkAPI) => {
    const {keyword, currentPage} = filterData;
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/meetings?page=${currentPage}&keyword=${keyword}`,
        config,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//User Meeting History--Admin
export const userMeetingHistory = createAsyncThunk(
  'userMeetingHistory',

  async (_, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/meeting/history`,
        config,
      );
      return response.data.meeting;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const scheduleMeetingSlice = createSlice({
  name: 'scheduleMeeting',
  initialState,

  //Reducers
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
    meetingReset: (state, action) => {
      state.success = false;
    },
    updateReset: (state, action) => {
      state.isUpdated = false;
    },
    updateStartTime(state, action) {
      const {formattedDateTime, userTimeZone} = action.payload;
      state.timenZone = {
        ...state.timenZone,
        startTime: formattedDateTime,
        timeZone: userTimeZone,
      };
    },
  },

  //Extra Reducers

  //Create New Meeting Request
  extraReducers: builder => {
    builder.addCase(meetingRequest.pending, state => {
      state.loading = true;
    });
    builder.addCase(meetingRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.meetingId = action.payload.meetingId;
    });
    builder.addCase(meetingRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Edit, Verify And Schedule Meeting --Admin
    builder.addCase(editAndVerifyMeeting.pending, state => {
      state.loading = true;
    });
    builder.addCase(editAndVerifyMeeting.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload.success;
      state.message = action.payload.message;
    });
    builder.addCase(editAndVerifyMeeting.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Get All Meetings --Admin
    builder.addCase(getAllMeetings.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllMeetings.fulfilled, (state, action) => {
      state.loading = false;
      state.userMeetings = action.payload.userMeetings;
      state.meetingsCount = action.payload.meetingsCount;
      state.resultPerPage = action.payload.resultPerPage;
      state.filteredMeetingsCount = action.payload.filteredMeetingsCount;
    });
    builder.addCase(getAllMeetings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //User Meeting History--Admin
    builder.addCase(userMeetingHistory.pending, state => {
      state.loading = true;
    });
    builder.addCase(userMeetingHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.userMeetingsHistory = action.payload;
    });
    builder.addCase(userMeetingHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {
  clearErrors,
  clearMessage,
  updateStartTime,
  meetingReset,
  updateReset,
} = scheduleMeetingSlice.actions;

export default scheduleMeetingSlice.reducer;
