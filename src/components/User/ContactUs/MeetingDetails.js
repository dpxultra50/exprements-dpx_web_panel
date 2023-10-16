import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import * as StyleComponent from "../LoginSignup/StyleComponent";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  meetingRequest,
  clearErrors,
  meetingReset,
} from "../../../Features/contactUsFeatures/scheduleMeetingSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../layout/Loader";

const MeetingDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { timenZone, error, success, loading, meetingId } = useSelector(
    (state) => state.scheduleMeeting
  );

  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);

  const [meetingData, setMeetingData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    inquiryType: "",
    message: "",
    preferredPlatform: {
      platformName: "",
    },
  });

  const { name, email, phonenumber, inquiryType, message, preferredPlatform } =
    meetingData;

  const meetingRequestSubmit = (e) => {
    e.preventDefault();

    const meetingRequestForm = new FormData();
    meetingRequestForm.set("name", name);
    meetingRequestForm.set("email", email);
    meetingRequestForm.set("guestEmails", JSON.stringify(keywords));
    meetingRequestForm.set("phonenumber", phonenumber);
    meetingRequestForm.set("inquiryType", inquiryType);
    meetingRequestForm.set("message", message);
    meetingRequestForm.set("startTime", timenZone.startTime);
    meetingRequestForm.set("timeZone", timenZone.timeZone);
    meetingRequestForm.set(
      "preferredPlatform",
      JSON.stringify(preferredPlatform)
    );

    dispatch(meetingRequest(meetingRequestForm));
  };

  //GETTING THE GUEST EMAIL'S
  function handleInputChange(event) {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);

    // Check if the input value ends with a space or comma
    const lastChar = newInputValue.slice(-1);

    if (lastChar === " " || lastChar === ",") {
      // Add the last word as a new keyword
      const words = newInputValue.split(/[ ,]+/);
      const newKeyword = words[words.length - 2];

      if (newKeyword !== "") {
        setKeywords((prevKeywords) => [...prevKeywords, newKeyword]);
        setInputValue("");
      }
    }
  }

  function handleDeleteKeyword(index) {
    setKeywords((prevKeywords) => prevKeywords.filter((_, i) => i !== index));
  }

  const meetingDataChange = (e) => {
    if (e.target.name === "preferredPlatform") {
      setMeetingData({
        ...meetingData,
        preferredPlatform: {
          platformName: e.target.value,
        },
      });
    } else {
      setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (
      timenZone.startTime === undefined &&
      timenZone.startTime === undefined
    ) {
      navigate("/contactus/meeting/timedate");
    }

    if (success) {
      toast.success("Your meeting request is submited successfully", {
        position: "bottom-left",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(meetingReset());
      navigate(`/meeting/details/${meetingId}`);
    }

    if (error) {
      toast.error(error, {
        position: "bottom-left",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }
  }, [navigate, dispatch, meetingId, timenZone.startTime, error, success]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <p>Enter Details</p>
          <DetailsForm>
            <ToastContainer />
            <StyleComponent.SignUpContainer>
              <StyleComponent.Wrapper>
                <StyleComponent.Form
                  onSubmit={meetingRequestSubmit}
                  encType="multipart/form-data"
                >
                  <StyleComponent.FormWraper>
                    <StyleComponent.Name
                      type="text"
                      placeholder="Name *"
                      required
                      name="name"
                      value={name}
                      onChange={meetingDataChange}
                    />
                    <StyleComponent.Email
                      type="email"
                      placeholder="Email *"
                      required
                      name="email"
                      value={email}
                      onChange={meetingDataChange}
                    />
                  </StyleComponent.FormWraper>

                  {/* ADD Guests */}
                  <StyleComponent.Guests>
                    <StyleComponent.AddGuests
                      onClick={() => setShow((prev) => !prev)}
                    >
                      Add Guest's <AddIcon />
                    </StyleComponent.AddGuests>
                    {show && (
                      <StyleComponent.GuestEmailBox>
                        {keywords.map((keyword, index) => (
                          <StyleComponent.Emails key={index}>
                            <StyleComponent.EmailWrrap>
                              <span>{keyword}</span>
                              <button
                                type="button"
                                onClick={() => handleDeleteKeyword(index)}
                              >
                                &times;
                              </button>
                            </StyleComponent.EmailWrrap>
                          </StyleComponent.Emails>
                        ))}
                        <input
                          style={{
                            display: "flex",
                            flexGrow: 1,
                            overflowX: "hidden",
                            width: "auto",
                            minWidth: "30px",
                            height: "auto",
                            minHeight: "22px",
                            margin: 0,
                            padding: "5px 0",
                            border: "none",
                            backgroundColor: "inherit",
                            outline: "none",
                            resize: "none",
                            appearance: "none",
                            boxShadow: "unset",
                            fontSize: "14px",
                            fontWeight: 200,
                          }}
                          type="text"
                          id="keyword-input"
                          placeholder="Guest Email(s)"
                          value={inputValue}
                          onChange={handleInputChange}
                        />
                      </StyleComponent.GuestEmailBox>
                    )}
                  </StyleComponent.Guests>

                  {/* Inquiry Type */}
                  <StyleComponent.Inquiry>
                    <FormControl variant="outlined" style={{ minWidth: 200 }}>
                      <InputLabel id="selector-label">Inquiry Type</InputLabel>
                      <SelectBox
                        sx={{
                          "&:focus": {
                            outline: "none",
                          },
                        }}
                        labelId="selector-label"
                        label="Select Option"
                        name="inquiryType"
                        value={inquiryType}
                        onChange={meetingDataChange}
                        inputProps={{ "aria-label": "Select Option" }}
                      >
                        <MenuItemBox value="business-meeting">
                          Business Meeting
                        </MenuItemBox>
                        <MenuItemBox value="it-consultancy">
                          IT Consultancy
                        </MenuItemBox>
                      </SelectBox>
                    </FormControl>
                  </StyleComponent.Inquiry>

                  <StyleComponent.PhoneNumber
                    type="text"
                    placeholder="Phone Number *"
                    required
                    name="phonenumber"
                    value={phonenumber}
                    onChange={meetingDataChange}
                  />

                  <StyleComponent.Message
                    id="message"
                    placeholder="Type your message here"
                    name="message"
                    value={message}
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
                        name="preferredPlatform"
                        value={preferredPlatform.platformName}
                        onChange={meetingDataChange}
                        inputProps={{ "aria-label": "Select Option" }}
                      >
                        <MenuItemBox value="zoom">
                          Zoom Conference Call
                        </MenuItemBox>
                        <MenuItemBox value="whatsapp">
                          WhatsApp Call
                        </MenuItemBox>
                        <MenuItemBox value="googlemeet">
                          Google Meet Conference
                        </MenuItemBox>
                      </SelectBox>
                    </FormControl>
                  </StyleComponent.Inquiry>
                  <input
                    type="submit"
                    value="MeetingRequest"
                    id="MeetingRequestsubmit"
                    className="signUpBtn"
                    style={{ display: "none" }}
                  />
                  <StyleComponent.Button>
                    <label htmlFor="MeetingRequestsubmit">
                      <ArrowCircleRightIcon />
                      <span>Schedule</span>
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
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-width: 585px;
  padding-top: 28px;

  @media (max-width: 754px) {
    min-width: unset;
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
`;
const DetailsForm = styled.div`
  margin: 30px 0px;
  width: 80%;
  @media (max-width: 552px) {
    width: 90%;
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

export default MeetingDetails;
