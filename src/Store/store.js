import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import authReducer from '../Features/userFeatures/authSlice';
import profileReducer from '../Features/userFeatures/profileSlice';
import forgotPasswordReducer from '../Features/userFeatures/forgotPasswordSlice';
import scheduleMeetingReducer from '../Features/contactUsFeatures/scheduleMeetingSlice';
import newsLetterReducer from '../Features/contactUsFeatures/newsLetterSlice';
import userMeetingDetailsReducer from '../Features/contactUsFeatures/meetingDetailsSlice';
import projectReducer from '../Features/adminFeatures/projectSlice';
import projectDetailsReducer from '../Features/adminFeatures/projectDetailsSlice';
import adminUserReducer from '../Features/adminFeatures/adminUserSlice';
const store = configureStore({
  reducer: {
    user: authReducer,
    theme: themeReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    scheduleMeeting: scheduleMeetingReducer,
    newsLetter: newsLetterReducer,
    userMeetingDetails: userMeetingDetailsReducer,
    project: projectReducer,
    projectDetails: projectDetailsReducer,
    adminUser: adminUserReducer,
  },
});

export default store;
