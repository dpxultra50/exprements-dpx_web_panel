import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  success: false,
  error: null,
  newsletters: [],
  allQuotes: [],
};

//News Letter Subscribe --user
export const newsLetterSubscribe = createAsyncThunk(
  'newsLetterSubscribe',

  async (newsLetterData, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/newsletter/subscribe`,
        newsLetterData,
        config,
      );

      return response.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//Get A Quote
export const getAQuote = createAsyncThunk(
  'getAQuote',

  async (getAQuoteData, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/newsletter/subscribe`,
        getAQuoteData,
        config,
      );

      return response.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

// Get All Quote (Newsletter's Which Have Message)
export const getAllQuote = createAsyncThunk(
  'getAllQuote',

  async (_, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/newsletter/allquotes`,
        config,
      );
      return response.data.allQuotes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const newsLetterSlice = createSlice({
  name: 'newsLetter',
  initialState,

  //Reducers
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },

    newsLetterReset: (state, action) => {
      state.success = false;
    },
  },

  //Extra Reducers

  //Create New Meeting Request
  extraReducers: builder => {
    builder.addCase(newsLetterSubscribe.pending, state => {
      state.loading = true;
    });
    builder.addCase(newsLetterSubscribe.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
    });
    builder.addCase(newsLetterSubscribe.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Get A Quote

    builder.addCase(getAQuote.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAQuote.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
    });
    builder.addCase(getAQuote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Get All Quote (Newsletter's Which Have Message)

    builder.addCase(getAllQuote.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllQuote.fulfilled, (state, action) => {
      state.loading = false;
      state.allQuotes = action.payload;
    });
    builder.addCase(getAllQuote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {clearErrors, newsLetterReset} = newsLetterSlice.actions;

export default newsLetterSlice.reducer;
