import styled from 'styled-components';
import SquareIcon from '@mui/icons-material/Square';
import moment from 'moment';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CommentIcon from '@mui/icons-material/Comment';
import LaptopIcon from '@mui/icons-material/Laptop';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PublicIcon from '@mui/icons-material/Public';
import SendIcon from '@mui/icons-material/Send';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {
  clearErrors,
  userMeetingDetails,
} from '../../../Features/contactUsFeatures/meetingDetailsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useParams} from 'react-router-dom';
import Loader from '../layout/Loader';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useState} from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Dropdown from '../Profile/Dropdown';
import MetaData from '../layout/MetaData';

const ClintMeetingDeatils = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {uerMeeting, loading, error} = useSelector(
    state => state.userMeetingDetails,
  );

  const {user} = useSelector(state => state.user);

  const [copied, setCopied] = useState(false);
  const link = window.location.href;

  function handleCopyClick() {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'bottom-left',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    dispatch(userMeetingDetails(id));
  }, [dispatch, id, error]);

  return (
    <>
      {uerMeeting && loading ? (
        <Loader />
      ) : (
        <Container>
          <MetaData
            title="Meeting Deatils | DataPollex | Top It company In Bangladesh | Top It Company In Japan"
            keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
            desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
          />
          {user._id ? <Dropdown /> : null}
          <MeetingDetailsTop>
            <Title>
              <p>
                <CheckBoxOutlineBlankIcon />
                MEETING DEATILS
              </p>
              <h1>Introduction Meeting With DataPollex</h1>
            </Title>
            <Details>
              <DetailsBox>
                <p>
                  NB: A confirmation email will be sent to your email address as
                  well as the guests' email addresses , after scheduling your
                  meeting request.
                </p>
              </DetailsBox>
            </Details>
          </MeetingDetailsTop>
          <ToastContainer />

          <Wrapper>
            <Box>
              <Filed>
                <span>
                  <AttachFileIcon />
                  MEETING TRAC LINK
                </span>
              </Filed>
              <LinkBox>
                <DtlsLink>
                  <p>{link}</p>
                </DtlsLink>
                <IcoBox onClick={handleCopyClick}>
                  {copied ? 'Copied' : <ContentCopyIcon />}
                </IcoBox>
              </LinkBox>
            </Box>
            <Box>
              <Filed>
                <span>
                  <Grid3x3Icon /> ID
                </span>
                <b>{uerMeeting._id}</b>
              </Filed>
              <hr />
              <Filed>
                <span>
                  <DateRangeIcon /> Date & Time{' '}
                </span>
                <b>
                  {moment(uerMeeting.startTime).format(
                    'dddd, MMMM D, YYYY h:mm A',
                  )}
                </b>
              </Filed>
              <Filed>
                <span>
                  <AccessTimeIcon />
                  duration
                </span>
                <b>{uerMeeting.duration} Minutes</b>
              </Filed>

              <Status className={`${uerMeeting.status}`}>
                <SquareIcon />
                <b> {uerMeeting.status}</b>
              </Status>
              <hr />
              <Filed>
                <span>
                  <PersonIcon />
                  Name
                </span>
                <b>{uerMeeting.name}</b>
              </Filed>
              <Filed>
                <span>
                  <EmailIcon />
                  Email
                </span>
                <b>{uerMeeting.email}</b>
              </Filed>
              <Filed>
                <span>
                  <PhoneAndroidIcon /> Phonenumber{' '}
                </span>
                <b>{uerMeeting.phonenumber}</b>
              </Filed>
            </Box>
            <Box>
              <Filed>
                <span>
                  <QuestionMarkIcon /> inquiryType{' '}
                </span>
                <b>{uerMeeting.inquiryType}</b>
              </Filed>
              <hr />
              <Filed>
                <span>
                  <CommentIcon /> message
                </span>
              </Filed>

              <div className="message">
                <p>{uerMeeting.message}</p>
              </div>
            </Box>
            <Box>
              <Filed>
                <span style={{color: ' rgb(129, 126, 135)'}}>
                  <LaptopIcon /> preferred Platform
                </span>
              </Filed>
              <hr />
              <Filed>
                <span>platform Name </span>
                <b>{uerMeeting.preferredPlatform.platformName}</b>
              </Filed>

              <Filed>
                <span>platform Address </span>
                <b>
                  {uerMeeting.preferredPlatform.platformAddress ===
                  'Not Required'
                    ? 'Addres Will Update Soon'
                    : uerMeeting.preferredPlatform.platformAddress}
                </b>
              </Filed>
              <Filed>
                <span>Credential </span>
                <b>
                  {uerMeeting.preferredPlatform.requiredCredential ===
                  'Not Required'
                    ? 'Credential Will Update Soon'
                    : uerMeeting.preferredPlatform.requiredCredential}
                </b>
              </Filed>
              <hr />
              <Filed>
                <span>
                  <AttachEmailIcon />
                  guestEmails
                </span>
              </Filed>
              <div className="message">
                {uerMeeting.guestEmails.map((emails, i) => (
                  <p key={i}>{emails}</p>
                ))}
              </div>
            </Box>
            <Box>
              <Filed>
                <span>
                  <PublicIcon /> timeZone
                </span>
                <b>{uerMeeting.timeZone}</b>
              </Filed>

              <Filed>
                <span>
                  <SendIcon /> Requested
                </span>
                <b>
                  {moment(uerMeeting.createdAt).format(
                    'dddd, MMMM D, YYYY h:mm A',
                  )}
                </b>
              </Filed>
            </Box>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  width: 100%;
  padding: 20px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 0px 15px 80px 15px;
  }
  @media (max-width: 368px) {
    padding: 0px 10px 80px 10px;
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

const LinkBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  background-color: #1c1b1f;
  padding: 6px 12px;
  border-radius: 4px;
`;
const DtlsLink = styled.div`
  color: #fff;
  overflow-x: hidden;
`;
const IcoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 500ms ease;
  svg {
    color: #fff;
    font-size: 18px;
    transition: all 100ms ease-in;
  }
  &:hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const MeetingDetailsTop = styled.div`
  padding-top: 35px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 759px) {
    margin-bottom: 0px;
  }
`;
const Title = styled.div`
  text-align: center;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    svg {
      margin-right: 10px;
    }
  }
  h1 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 26px;
      line-height: 34px;
    }
  }
`;
const Details = styled.div``;
const DetailsBox = styled.div`
  margin-top: 26px;

  @media (max-width: 767px) {
    padding: 0px 15px;
    text-align: center;
    margin-bottom: 26px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  @media (max-width: 611px) {
    width: 90%;
  }
  @media (max-width: 437px) {
    width: 100%;
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
  b {
    color: #ffffff;
  }
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
export default ClintMeetingDeatils;
