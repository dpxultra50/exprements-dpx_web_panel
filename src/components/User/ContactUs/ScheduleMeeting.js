import styled from 'styled-components';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';
import MetaData from '../layout/MetaData';

const ScheduleMeeting = () => {
  const {timenZone} = useSelector(state => state.scheduleMeeting);

  return (
    <Container>
      <MetaData
        title="Meeting Deatils | DataPollex | Top It company In Bangladesh | Top It Company In Japan"
        keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
        desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
      />
      <Shape1></Shape1>
      <ScheduleTop>
        <Title>
          <h1>Schedule Meeting</h1>
        </Title>
        <Details>
          <DetailsBox>
            <p>
              We would be happy to hear from you, please fill in the form below.
            </p>
          </DetailsBox>
        </Details>
      </ScheduleTop>

      {/* Schedule */}
      <ScheduleBox>
        <Showcase>
          <LogoBox>
            <img src="/images/layouts/datapollex_logo.png" alt="logo" />
          </LogoBox>
          <TitleBox>
            <p>Innovative solutions for a connected world</p>
            <h2>Introduction Meeting With DataPollex</h2>
          </TitleBox>
          <MeetingInfo>
            <Duration>
              <AccessTimeFilledIcon />
              <p>30 min</p>
            </Duration>
            {timenZone &&
            timenZone.startTime != null &&
            timenZone.timeZone != null ? (
              <TimeAndZone>
                <div>
                  <CalendarTodayIcon />
                  <p>{timenZone.startTime}</p>
                </div>
                <div>
                  <PublicIcon />
                  <p>{timenZone.timeZone}</p>
                </div>
              </TimeAndZone>
            ) : null}
          </MeetingInfo>
          <AgendaBox>
            <span>Agenda:</span>
            <p>1. Introduction of DataPollex</p>
            <p>2. Requirement understanding</p>
            <p>3. Similar work showcase</p>
            <p>4. Next actions</p>
          </AgendaBox>
        </Showcase>
        <OutletBox>
          <Outlet />
        </OutletBox>
      </ScheduleBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  padding: 20px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 480px) {
    padding: 20px 15px 80px 15px;
  }
  @media (max-width: 368px) {
    padding: 20px 10px 80px 10px;
  }
`;

const Shape1 = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  mix-blend-mode: luminosity;
  opacity: 0.01;
  background-image: url(/images/service-back-01.png);
  z-index: -1;
`;
const ScheduleTop = styled.div`
  padding-top: 35px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
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

// Schedule
const ScheduleBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #151518;
  border-radius: 5px;
  box-shadow: 0 1px 8px 0 #121113;
  @media (max-width: 1075px) {
    flex-direction: column;
  }
`;

const Showcase = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1075px) {
    width: 100%;
  }
`;

const LogoBox = styled.div`
  border-right: 3px solid rgba(108, 107, 111, 0.1);
  border-bottom: 3px solid rgba(108, 107, 111, 0.1);
  width: 100%;
  height: auto;
  padding: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1075px) {
    border-right: unset;
  }
  @media (max-width: 480px) {
    padding: 40px 70px;
  }
  img {
    width: 100%;
    height: 100%;
    @media (max-width: 1075px) {
      max-width: 200px;
    }
  }
`;
const TitleBox = styled.div`
  width: 100%;
  text-align: start;
  padding-left: 30px;
  border-right: 3px solid rgba(108, 107, 111, 0.1);
  @media (max-width: 1075px) {
    text-align: center;
    padding-left: 0px;
    border-right: unset;
  }
  p {
    margin-top: 20px;
  }
  h2 {
    margin-top: 8px;
    color: #fff;
    font-weight: 800;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      font-size: 22px;
    }
  }
`;
const MeetingInfo = styled.div`
  width: 100%;
  padding-left: 30px;
  border-right: 3px solid rgba(108, 107, 111, 0.1);

  @media (max-width: 1075px) {
    border-right: unset;
  }
`;
const Duration = styled.div`
  display: block;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1075px) {
    justify-content: center;
  }
  p {
    margin-left: 5px;
    font-weight: 700;
  }
`;
const TimeAndZone = styled.div`
  display: block;
  margin-top: 10px;
  div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 1075px) {
      justify-content: center;
    }
    p {
      margin-left: 5px;
      font-weight: 700;
    }
  }
`;

const AgendaBox = styled.div`
  width: 100%;
  text-align: start;
  padding-left: 30px;
  border-right: 3px solid rgba(108, 107, 111, 0.1);
  padding: 20px 0px 20px 30px;

  @media (max-width: 1075px) {
    text-align: center;
    border-right: unset;
    border-bottom: 3px solid rgba(108, 107, 111, 0.1);
  }
  @media (max-width: 439px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 0px 20px 18px;
  }
  span {
    margin-top: 20px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
  }
`;

const OutletBox = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
//  const Details = styled.div``;
//  const Details = styled.div``;
export default ScheduleMeeting;
