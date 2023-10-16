import styled from "styled-components";
import SquareIcon from "@mui/icons-material/Square";
import moment from "moment";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CommentIcon from "@mui/icons-material/Comment";
import LaptopIcon from "@mui/icons-material/Laptop";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PublicIcon from "@mui/icons-material/Public";
import SendIcon from "@mui/icons-material/Send";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const MeetingDetails = ({ meeting }) => {
  //LocalTime
  const date = moment(meeting.startTime);
  const dhakaTime = date.tz("Asia/Dhaka");
  const dhakaformattedTime = dhakaTime.format("dddd, MMMM D, YYYY h:mm A");

  return (
    <Container>
      <Box>
        <Filed>
          <span>
            <Grid3x3Icon /> ID
          </span>
          <b>{meeting._id}</b>
        </Filed>
        <hr />
        <Filed>
          <span>
            <DateRangeIcon /> Date & Time{" "}
          </span>
          <b>{moment(meeting.startTime).format("dddd, MMMM D, YYYY h:mm A")}</b>
        </Filed>
        <Filed>
          <span>
            <AccessTimeIcon />
            duration
          </span>
          <b>{meeting.duration} Minutes</b>
        </Filed>

        <Status className={`${meeting.status}`}>
          <SquareIcon />
          <b> {meeting.status}</b>
        </Status>
        <hr />
        <Filed>
          <span>
            <PersonIcon />
            Name
          </span>
          <b>{meeting.name}</b>
        </Filed>
        <Filed>
          <span>
            <EmailIcon />
            Email
          </span>
          <b>{meeting.email}</b>
        </Filed>
        <Filed>
          <span>
            <PhoneAndroidIcon /> Phonenumber{" "}
          </span>
          <b>{meeting.phonenumber}</b>
        </Filed>
      </Box>
      <Box>
        <Filed>
          <span>
            <QuestionMarkIcon /> inquiryType{" "}
          </span>
          <b>{meeting.inquiryType}</b>
        </Filed>
        <hr />
        <Filed>
          <span>
            <CommentIcon /> message
          </span>
        </Filed>

        <div className="message">
          <p>{meeting.message}</p>
        </div>
      </Box>
      <Box>
        <Filed>
          <span style={{ color: " rgb(129, 126, 135)" }}>
            <LaptopIcon /> preferred Platform
          </span>
        </Filed>
        <hr />
        <Filed>
          <span>platform Name </span>
          <b>{meeting.preferredPlatform.platformName}</b>
        </Filed>

        <Filed>
          <span>platform Address </span>
          <b>{meeting.preferredPlatform.platformAddress}</b>
        </Filed>
        <Filed>
          <span>Credential </span>
          <b>{meeting.preferredPlatform.requiredCredential}</b>
        </Filed>
        <hr />
        <Filed>
          <span>
            <AttachEmailIcon />
            guestEmails
          </span>
        </Filed>
        <div className="message">
          {meeting.guestEmails.map((emails, i) => (
            <p key={i}>{emails}</p>
          ))}
        </div>
      </Box>
      <Box>
        <Filed>
          <span>
            <PublicIcon /> timeZone
          </span>
          <b>{meeting.timeZone}</b>
        </Filed>
        <Filed>
          <span>
            <AccessTimeFilledIcon /> Local Time
          </span>
          <b>{dhakaformattedTime}</b>
        </Filed>
        <Filed>
          <span>
            <SendIcon /> Requested
          </span>
          <b>{moment(meeting.createdAt).format("dddd, MMMM D, YYYY h:mm A")}</b>
        </Filed>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  margin-right: 40px;
  @media (max-width: 831px) {
    margin-right: 0px;
  }

  hr {
    border: none;
    width: 100%;
    border-top: 1px solid rgb(128, 128, 128, 0.3);
    margin: 16px 0px;
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

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-left: 1px solid #ff4f47;
  border-right: 1px solid #ff4f47;
  padding: 8px 15px;
  background-color: #151518;
  box-shadow: 0 10px 15px 0 #121113;
  width: 90%;
  margin: 10px 0px;
  @media (max-width: 929px) {
    width: 100%;
  }
  .message {
    margin-top: 6px;
    color: rgb(129, 126, 135);
    P {
      margin-bottom: 6px;
    }
  }
`;
const Filed = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: 15px;
    color: #86838c;
    font-weight: 600;
    line-height: 26px;
    svg {
      margin-right: 4px;
      font-size: 18px;
    }
  }
  p {
    font-size: 15px;
    color: #86838c;
    font-weight: 400;
    line-height: 26px;
  }
`;

const Status = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-transform: uppercase;
    font-size: 16px;
    margin-left: 4px;
    font-weight: 700;
  }
`;
export default MeetingDetails;
