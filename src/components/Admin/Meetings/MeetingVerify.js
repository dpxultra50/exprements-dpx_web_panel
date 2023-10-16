import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import * as StyleComponent from "../../User/LoginSignup/StyleComponent";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import {
  editAndVerifyMeeting,
  clearErrors,
  clearMessage,
  updateReset,
} from "../../../Features/contactUsFeatures/scheduleMeetingSlice";
import Loader from "../../User/layout/Loader";
import { useParams } from "react-router-dom";

const MeetingVerify = ({ meetingData }) => {
  const dispatch = useDispatch();

  const { error, message, isUpdated, loading } = useSelector(
    (state) => state.scheduleMeeting
  );

  const { id } = useParams();
  const [updateMeeting, setUpdateMeeting] = useState({
    startTime: "",
    status: "",
    duration: 30,
    preferredPlatform: {
      platformName: "",
      platformAddress: "",
      requiredCredential: "",
    },
  });
  const { startTime, status, duration, preferredPlatform } = updateMeeting;

  const updateMeetingSubmit = (e) => {
    e.preventDefault();

    const updateMeetingForm = new FormData();
    updateMeetingForm.set("startTime", startTime);
    updateMeetingForm.set("status", status);
    updateMeetingForm.set("duration", duration);
    updateMeetingForm.set(
      "preferredPlatform",
      JSON.stringify(preferredPlatform)
    );

    const meetingData = {
      data: updateMeetingForm,
      id: id,
    };

    dispatch(editAndVerifyMeeting(meetingData));
  };

  const meetingDataChange = (e) => {
    if (e.target.name === "platformAddress") {
      setUpdateMeeting((prevState) => ({
        ...prevState,
        preferredPlatform: {
          ...prevState.preferredPlatform,
          platformAddress: e.target.value,
        },
      }));
    } else if (e.target.name === "requiredCredential") {
      setUpdateMeeting((prevState) => ({
        ...prevState,
        preferredPlatform: {
          ...prevState.preferredPlatform,
          requiredCredential: e.target.value,
        },
      }));
    } else {
      setUpdateMeeting({ ...updateMeeting, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (meetingData) {
      setUpdateMeeting((prevState) => ({
        ...prevState,
        startTime: moment(meetingData.startTime).format(
          "dddd, MMMM D, YYYY h:mm A"
        ),
        duration: meetingData.duration,
        preferredPlatform: {
          ...prevState.preferredPlatform,
          platformName: meetingData.preferredPlatform.platformName,
        },
      }));
    }

    if (error) {
      toast.error(error, {
        position: "bottom-right",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success(message, {
        position: "bottom-right",
        theme: "dark",
        pauseOnHover: true,
      });

      dispatch(updateReset());
      dispatch(clearMessage());
    }
  }, [meetingData, setUpdateMeeting, error, isUpdated, message, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <p>Update Meeting</p>
          <DetailsForm>
            <ToastContainer />
            <StyleComponent.SignUpContainer>
              <StyleComponent.Wrapper>
                <StyleComponent.Form
                  onSubmit={updateMeetingSubmit}
                  encType="multipart/form-data"
                >
                  {/* Inquiry Type */}

                  <StyleComponent.PhoneNumber
                    type="text"
                    placeholder="Start Time & Date *"
                    required
                    name="startTime"
                    value={startTime}
                    onChange={meetingDataChange}
                  />

                  <StyleComponent.Inquiry>
                    <FormControl variant="outlined" style={{ minWidth: 200 }}>
                      <InputLabel id="selector-label">Status</InputLabel>
                      <SelectBox
                        sx={{
                          "&:focus": {
                            outline: "none",
                          },
                        }}
                        labelId="selector-label"
                        label="Select Option"
                        name="status"
                        value={status}
                        onChange={meetingDataChange}
                        inputProps={{ "aria-label": "Select Option" }}
                      >
                        {meetingData.status !== "pending" ? (
                          <MenuItemBox value="pending">Pending</MenuItemBox>
                        ) : null}
                        {meetingData.status !== "scheduled" ? (
                          <MenuItemBox value="scheduled">Scheduled</MenuItemBox>
                        ) : null}
                        {meetingData.status !== "completed" ? (
                          <MenuItemBox value="completed">Completed</MenuItemBox>
                        ) : null}
                        {meetingData.status !== "Canceled" ? (
                          <MenuItemBox value="Canceled">Canceled</MenuItemBox>
                        ) : null}
                      </SelectBox>
                    </FormControl>
                  </StyleComponent.Inquiry>

                  <StyleComponent.PhoneNumber
                    type="text"
                    placeholder="duration"
                    required
                    name="duration"
                    value={duration}
                    onChange={meetingDataChange}
                  />
                  <StyleComponent.Inquiry>
                    <FormControl variant="outlined" style={{ minWidth: 200 }}>
                      <InputLabel id="selector-labe2">
                        Preferred Platform
                      </InputLabel>
                      <SelectBox
                        labelId="selector-labe2"
                        label="Select Option"
                        readOnly
                        value={preferredPlatform.platformName}
                        inputProps={{ "aria-label": "Select Option" }}
                      >
                        <MenuItemBox value="zoom">
                          Zoom Conference Call
                        </MenuItemBox>
                        <MenuItemBox value="whatsapp">
                          WhatsApp Call
                        </MenuItemBox>
                        <MenuItemBox value="googlemeet">
                          Google Meet Confernece
                        </MenuItemBox>
                      </SelectBox>
                    </FormControl>
                  </StyleComponent.Inquiry>

                  <StyleComponent.PhoneNumber
                    type="text"
                    placeholder="Platform ddress *"
                    required
                    name="platformAddress"
                    value={preferredPlatform.platformAddress}
                    onChange={meetingDataChange}
                  />
                  <StyleComponent.PhoneNumber
                    type="text"
                    placeholder="Required Credential"
                    name="requiredCredential"
                    value={preferredPlatform.requiredCredential}
                    onChange={meetingDataChange}
                  />
                  <input
                    type="submit"
                    value="UpdateMeeting"
                    id="UpdateMeetingsubmit"
                    className="signUpBtn"
                    style={{ display: "none" }}
                  />

                  <StyleComponent.Button>
                    <label htmlFor="UpdateMeetingsubmit">
                      <ArrowCircleRightIcon />
                      <span>Update</span>
                    </label>
                  </StyleComponent.Button>
                </StyleComponent.Form>
              </StyleComponent.Wrapper>
            </StyleComponent.SignUpContainer>
          </DetailsForm>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: 754px) {
    min-width: unset;
  }
  @media (max-width: 831px) {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .css-ku0b1u-MuiFormLabel-root-MuiInputLabel-root {
    color: #ff4f47 !important;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 3px;
    background-color: #151518;
  }
  .css-y5180i-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
    background-color: rgba(155, 155, 155, 0.16);
  }
  p {
    line-height: 30px;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
  }
  input {
    box-shadow: none;
    border: 1px solid transparent;
    &:focus {
      border-color: #ff4f47;
      outline: none;
    }
  }
  .pending {
    color: #e4e669;
  }
  .scheduled {
    color: #0075ca;
  }
  .completed {
    color: #008672;
  }
  .Canceled {
    color: #d73a4a;
  }
`;
const DetailsForm = styled.div`
  margin: 30px 0px;
  width: 90%;
  @media (max-width: 552px) {
    width: 95%;
  }
  @media (max-width: 400px) {
    width: 95%;
  }
`;
const SelectBox = styled(Select)`
  svg {
    color: rgb(142, 142, 142, 0.5);
    font-size: 2rem;
    font-weight: 600;
  }
`;
const MenuItemBox = styled(MenuItem)`
  color: #ffffff;
`;

export default MeetingVerify;
