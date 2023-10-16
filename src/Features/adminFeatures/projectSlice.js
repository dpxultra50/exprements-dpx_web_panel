import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  success: false,
  message: null,
  error: null,
  isUpdated: false,
  projects: [],
  userProjectHistory: [],
  projectId: '',
};

//Create New Meeting Request
export const createProject = createAsyncThunk(
  'createProject',

  async (projectData, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'multipart/form-data'},
      withCredentials: true,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/project/create`,
        projectData,
        config,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//// update Project --Admin
export const updateProject = createAsyncThunk(
  'updateProject',

  async (updateData, thunkAPI) => {
    const {data, id} = updateData;

    const config = {
      headers: {'Content-Type': 'multipart/form-data'},
      withCredentials: true,
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/project/update/${id}`,
        data,
        config,
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//Get All Project --Admin
export const getAllProject = createAsyncThunk(
  'getAllProject',

  async (_, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/projects`,
        config,
      );
      return response.data.projects;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//Display project
export const displayProject = createAsyncThunk(
  'displayProject',

  async (_, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/display/projects`,
        config,
      );
      return response.data.projects;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

//User Project History
export const userProjectgHistory = createAsyncThunk(
  'userProjectgHistory',

  async (_, thunkAPI) => {
    const config = {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/projects/history`,
        config,
      );
      return response.data.projects;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const projectSlice = createSlice({
  name: 'project',
  initialState,

  //Reducers
  reducers: {
    clearErrors: (state, action) => {
      state.error = null;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
    projectReset: (state, action) => {
      state.success = false;
    },
    updateReset: (state, action) => {
      state.isUpdated = false;
    },
  },

  //Extra Reducers

  extraReducers: builder => {
    //Create New Project
    builder.addCase(createProject.pending, state => {
      state.loading = true;
    });

    builder.addCase(createProject.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
      state.projectId = action.payload.projectId;
    });
    builder.addCase(createProject.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // update Project --Admin
    builder.addCase(updateProject.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateProject.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload.success;
      state.projectId = action.payload.projectId;
    });
    builder.addCase(updateProject.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //User Project History --User
    builder.addCase(userProjectgHistory.pending, state => {
      state.loading = true;
    });
    builder.addCase(userProjectgHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.userProjectHistory = action.payload;
    });
    builder.addCase(userProjectgHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Get All Project --Admin
    builder.addCase(getAllProject.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllProject.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    });
    builder.addCase(getAllProject.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Display Project
    builder.addCase(displayProject.pending, state => {
      state.loading = true;
    });
    builder.addCase(displayProject.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    });
    builder.addCase(displayProject.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {clearErrors, clearMessage, projectReset, updateReset} =
  projectSlice.actions;

export default projectSlice.reducer;
