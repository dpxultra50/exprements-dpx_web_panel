import styled from "styled-components";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import PublicIcon from "@mui/icons-material/Public";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "moment-timezone";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateStartTime } from "../../../Features/contactUsFeatures/scheduleMeetingSlice";
import { useDispatch } from "react-redux";

const MeetingDateTime = () => {
  const dispatch = useDispatch();
  const userTimeZone = moment.tz.guess();
  const currentTime = moment().format("LT");

  const [dateTime, setDateTime] = useState(moment());

  const handleDateTimeChange = (dateTime) => {
    setDateTime(dateTime);
  };

  const formattedDateTime = dateTime.format("dddd, MMMM D, YYYY h:mm A");

  const updateData = () => {
    dispatch(updateStartTime({ formattedDateTime, userTimeZone }));
  };
  return (
    <Container>
      <p>Select a Date & Time</p>
      <DatenTime>
        <MeetDate>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <BoxContainer components={["StaticDatePicker"]}>
              <ItemBox>
                <DatePicker
                  value={dateTime}
                  onChange={handleDateTimeChange}
                  classNme="StaticDatePickerStaticDatePickerStaticDatePicker"
                />
              </ItemBox>
            </BoxContainer>
          </LocalizationProvider>
        </MeetDate>
        <MeetTime>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <BoxContainer components={["StaticTimePicker"]}>
              <ItemBox>
                <TimePicker value={dateTime} onChange={handleDateTimeChange} />
              </ItemBox>
            </BoxContainer>
          </LocalizationProvider>
          <Timezone>
            <PublicIcon />
            <span>TIME ZONE :</span>
            <p>{`${userTimeZone} (${currentTime})`}</p>
          </Timezone>
          <Button onClick={updateData}>
            <Link to="/contactus/meeting/details">
              <ArrowCircleRightIcon />
              <span>NEXT</span>
            </Link>
          </Button>
        </MeetTime>
      </DatenTime>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-width: 585px;
  padding-top: 28px;

  @media (max-width: 1135px) {
    align-items: center;
  }
  @media (max-width: 754px) {
    min-width: unset;
  }
  p {
    padding-left: 32px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    @media only screen and (min-width: 1075px) and (max-width: 1135px) {
      padding-left: 10px;
    }
    @media (max-width: 1135px) {
      padding-left: 0px;
    }
  }
`;

const BoxContainer = styled(DemoContainer)``;
const ItemBox = styled(DemoItem)``;
const DatePicker = styled(StaticDatePicker)`
  margin-top: 25px;
  border: 3px solid rgba(108, 107, 111, 0.1) !important;
  border-radius: 5px;
  background-color: #151518 !important;
  transition: all 500ms ease;

  button {
    transition: all 500ms ease;
    color: #ffffff;
    background-color: transparent;
    &:hover {
      background-color: rgba(108, 107, 111, 0.5) !important;
    }
  }

  div {
    &:nth-child(1) {
      span {
        color: #ffffff;
        padding: 5px 0px;
      }
    }
    &:nth-child(2) {
    }
    &:nth-child(3) {
      display: none;
    }
  }
`;

const TimePicker = styled(StaticTimePicker)`
  margin-top: 25px;
  border: 3px solid rgba(108, 107, 111, 0.1) !important;
  border-radius: 5px;
  background-color: #151518 !important;
  transition: all 500ms ease;

  button {
    transition: all 500ms ease;
    color: #ffffff;
    background-color: transparent;
    &:hover {
      background-color: rgba(108, 107, 111, 0.5) !important;
    }
  }

  div {
    &:nth-child(1) {
      span {
        color: #ffffff;
        padding: 5px;
      }
      button {
        border-radius: 5px;
      }
    }
    &:nth-child(2) {
    }
    &:nth-child(3) {
      button {
        display: none;
      }
    }
  }
`;
const DatenTime = styled.div`
  width: 100%;
  margin-top: 10px;
  padding-left: 32px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media (max-width: 1135px) {
    padding-left: 0px;
  }
  @media (max-width: 754px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const MeetDate = styled.div`
  @media (max-width: 754px) {
    margin-bottom: 20px;
  }
`;
const Timezone = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
  svg {
    font-size: 16px;
    margin-right: 4px;
  }
  span {
    color: #6c6b6f;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 2.66;
    letter-spacing: 0.08333em;
    text-transform: uppercase;
  }
  P {
    color: #ff4f47;
    font-weight: 700;
    line-height: 30px;
    font-size: 0.75rem;
    line-height: 2.66;
    text-transform: uppercase;
    padding: 0;
    padding-left: 5px;
  }
`;

const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0px 20px 0px;
  cursor: pointer;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 8px 20px 8px;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s linear;
    position: relative;
    overflow: hidden;
    z-index: 1;

    span {
      z-index: 2;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180%;
      transition: all 0.5s linear;
      background: #ff4f47;
      z-index: 2;
      transition: 0.8s;
    }
    &:hover {
      color: #1c1b1f;
      &::before {
        border-radius: 0% 0% 50% 50%;
        height: 0%;
      }
    }

    svg {
      margin-right: 4px;
      padding-left: 2px;
      font-size: 20px;
      z-index: 2;
    }
  }
`;

const MeetTime = styled.div``;
export default MeetingDateTime;
