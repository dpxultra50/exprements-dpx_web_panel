import styled from "styled-components";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Link, useNavigate } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PersonIcon from "@mui/icons-material/Person";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import GroupsIcon from "@mui/icons-material/Groups";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Loader from "../layout/Loader";
import moment from "moment";
import Dropdown from "./Dropdown";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MeetingHistory from "./MeetingHistory";
import {
  userProjectgHistory,
  clearErrors,
} from "../../../Features/adminFeatures/projectSlice";
import NothingToDisplay from "../layout/NothingToDisplay";
import MetaData from "../layout/MetaData";

const apiURL = process.env.REACT_APP_SERVER_URL;

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const { userMeetingsHistory } = useSelector((state) => state.scheduleMeeting);
  const { userProjectHistory, error } = useSelector((state) => state.project);

  const pendingProjectsCount = userProjectHistory.filter(
    (project) => project.status === "pending"
  ).length;

  const completedProjectsCount = userProjectHistory.filter(
    (project) => project.status === "completed"
  ).length;

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }

    if (error) {
      toast.error(error, {
        position: "bottom-right",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    dispatch(userProjectgHistory());
  }, [isAuthenticated, navigate, dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <MetaData
            title={`${user.name} | DataPollex | Top It company In Bangladesh | Top It Company In Japan`}
            keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
            desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
          />
          {/* Profile Dropdown */}
          <Dropdown />
          {/* Profile Dropdown */}
          <ToastContainer />
          <ProfileWrapper>
            <ProfileImg>
              <img
                src={
                  user.userImage
                    ? `${apiURL}/uploads/user/${user.userImage}`
                    : `/images/user.png`
                }
                alt=""
              />
            </ProfileImg>
            <DetailsInfo>
              <TopDetails>
                <Title>
                  <Name>
                    <h2>{user.name}</h2>
                  </Name>
                  <Location></Location>
                </Title>
                <CompanyRole>
                  <p>{`${user.companyrole}, ${user.companyname}`}</p>
                </CompanyRole>

                <VerifiedAcount>
                  {user.verified ? (
                    <Verified>
                      <VerifiedIcon />
                      <h4>Verified</h4>
                    </Verified>
                  ) : (
                    <Verify>
                      <GppMaybeIcon />
                      <Link to="/account/verifirequest">
                        <h4>Verify Your Account</h4>
                      </Link>
                    </Verify>
                  )}
                </VerifiedAcount>
                <TopShortLinks>
                  <TopBoard>
                    <ServiceTaken>
                      <h1>{completedProjectsCount}</h1>
                      <p>
                        <EngineeringIcon />
                        <span>service taken</span>
                      </p>
                    </ServiceTaken>
                    <ServiceTaken>
                      <h1>
                        {userMeetingsHistory ? userMeetingsHistory.length : 0}
                      </h1>
                      <p>
                        <GroupsIcon />
                        <span>Consultations</span>
                      </p>
                    </ServiceTaken>
                    <ServiceTaken>
                      <h1>{pendingProjectsCount}</h1>
                      <p>
                        <GroupsIcon />
                        <span>project pending</span>
                      </p>
                    </ServiceTaken>
                  </TopBoard>
                  <ShortLinks>
                    <Button>
                      <Link to="/account/update">
                        <ManageAccountsIcon />
                        <span>Edit Profile</span>
                      </Link>
                    </Button>
                    <Button>
                      <Link to="/password/update">
                        <ArrowCircleRightIcon />
                        <span>Change Password</span>
                      </Link>
                    </Button>
                  </ShortLinks>
                </TopShortLinks>
              </TopDetails>

              <BottomDetails>
                <AboutSection>
                  <Headline>
                    <PersonIcon />
                    <h2>About</h2>
                  </Headline>
                  <Line />
                  <InfoContainer>
                    <InfoLabel>Name :</InfoLabel>
                    <InfoValue>{user.name}</InfoValue>
                  </InfoContainer>
                  <InfoContainer>
                    <InfoLabel>Email :</InfoLabel>
                    <InfoValue>{user.email}</InfoValue>
                  </InfoContainer>
                  <InfoContainer>
                    <InfoLabel>Phone number :</InfoLabel>
                    <InfoValue>{user.phonenumber}</InfoValue>
                  </InfoContainer>
                  <InfoContainer>
                    <InfoLabel>Company name :</InfoLabel>
                    <InfoValue>{user.companyname}</InfoValue>
                  </InfoContainer>
                  <InfoContainer>
                    <InfoLabel>Company role :</InfoLabel>
                    <InfoValue>{user.companyrole}</InfoValue>
                  </InfoContainer>
                  <InfoContainer>
                    <InfoLabel>Joined At :</InfoLabel>
                    <InfoValue>
                      {moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </InfoValue>
                  </InfoContainer>
                </AboutSection>

                {/* //ServiceSection// */}
                <ServiceSection>
                  <Headline>
                    <PersonIcon />
                    <h2>Service's Taken</h2>
                  </Headline>
                  <Line />
                  <ServiceWrapper>
                    {userProjectHistory.length !== 0 ? (
                      userProjectHistory.map((projects) => (
                        <Projects key={projects._id}>
                          <Link to={`/project/details/${projects._id}`}>
                            <ProjectWrapper>
                              <ImageWrapper>
                                <img
                                  src={
                                    projects.projectImage
                                      ? `${apiURL}/uploads/project/${projects.projectImage}`
                                      : "/images/working.svg"
                                  }
                                  // src={}
                                  alt="Project"
                                />
                              </ImageWrapper>
                              <InfoWrapper>
                                <ProjectTitle>
                                  <h2>{projects.title}</h2>
                                  <Status className={`${projects.status}`}>
                                    {projects.status}
                                  </Status>
                                  <TecBox>
                                    {projects.technologies &&
                                      projects.technologies
                                        .slice(0, 4)
                                        .map((tec, i) => (
                                          <li key={i}>
                                            <span>{tec}</span>
                                          </li>
                                        ))}
                                  </TecBox>
                                </ProjectTitle>
                              </InfoWrapper>
                              <ProjecAmount>
                                <h1>
                                  {projects.costing.totalamount +
                                    projects.costing.additionalCharge -
                                    projects.costing.discount}{" "}
                                  {projects.costing.currency}
                                </h1>
                                <p>
                                  Paid Amount{" "}
                                  <span>
                                    {projects.costing.paid}{" "}
                                    {projects.costing.currency}
                                  </span>
                                </p>
                              </ProjecAmount>
                            </ProjectWrapper>
                          </Link>
                        </Projects>
                      ))
                    ) : (
                      <NothingToDisplay data={"Project"} />
                    )}
                  </ServiceWrapper>
                </ServiceSection>
              </BottomDetails>

              {/* Meeting Section */}
              <MeetingSection>
                <Headline>
                  <LaptopWindowsIcon />
                  <h2>Meeting History</h2>
                </Headline>
                <Line />
                <MeetingWrapper>
                  <MeetingHistory />
                </MeetingWrapper>
              </MeetingSection>
            </DetailsInfo>
          </ProfileWrapper>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  margin-top: 0px;
  padding: 40px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 450px) {
    padding: 40px 15px 80px 15px;
  }
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  position: relative;
  width: 100%;
  @media (max-width: 930px) {
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;
const ProfileImg = styled.div`
  width: 150px;
  height: auto;
  padding: 3px;
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
    overflow: hidden;
  }
`;

const DetailsInfo = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (max-width: 930px) {
    margin-left: 0px;
    width: 100%;
  }
`;
const TopDetails = styled.div``;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 930px) {
    margin-top: 24px;
  }
  @media (max-width: 465px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
const Name = styled.div`
  color: #fff;
  font-size: 18px;
`;
const Location = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 465px) {
    margin-left: 0px;
    margin-top: 8px;
  }
`;
const CompanyRole = styled.div`
  color: #ff4f47;
  margin-top: 5px;
  @media (max-width: 465px) {
    margin-top: 18px;
  }
`;
const VerifiedAcount = styled.div`
  margin-top: 3px;
`;
const Verified = styled.div`
  display: flex;
  align-items: center;
  color: #1e99e8;
  h4 {
    padding-left: 2px;
  }
`;
const Verify = styled.div`
  display: flex;
  align-items: center;
  color: #d01a0f;
  a {
    color: #d01a0f;
    padding-left: 2px;
    transition: all 500ms ease;
    &:hover {
      color: #86838c;
    }
  }
`;

const TopShortLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;
const TopBoard = styled.div`
  display: flex;
  @media (max-width: 930px) {
    flex-direction: column;
  }
  div {
    &:nth-child(2) {
      margin-left: 10px;
    }
    &:nth-child(3) {
      margin-left: 10px;
    }
    @media (max-width: 930px) {
      &:nth-child(2) {
        margin-left: 0px;
        margin-top: 14px;
      }
      &:nth-child(3) {
        margin-left: 0px;
        margin-top: 14px;
      }
    }
  }
`;
const ServiceTaken = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  background-color: #ffffff;
  color: #ff4f47;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 8px 20px 8px;
  border-radius: 5px;
  h1 {
    color: #151518;
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 5px;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 800;
    span {
      margin-left: 5px;
    }
  }
`;
const ShortLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 403px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 60px;
  }
`;
const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;

  @media (max-width: 403px) {
    margin-top: 0px;
  }
  &:nth-child(2) {
    margin-left: 15px;
    @media (max-width: 403px) {
      margin-left: 0px;
      margin-top: 14px;
    }
  }

  a {
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

const BottomDetails = styled.div`
  padding-top: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1199px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const AboutSection = styled.div`
  margin-top: 24px;
  flex: 1;
  @media (max-width: 1199px) {
    width: 100%;
  }
`;

const Headline = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 12px;
  color: #ffffff;
  svg {
    font-size: 30px;
  }
  h2 {
    font-weight: 600;
    margin-left: 5px;
  }
`;

const Line = styled.hr`
  border: none;
  border-top: 1px solid #86838c;
  margin-bottom: 24px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-left: 1px solid #ff4f47;
  border-right: 1px solid #ff4f47;
  margin: 10px 0px;
  padding: 8px 10px;
  background-color: #151518;
  border-radius: 5px;
  &:hover {
    border-left: 1px solid #86838c;
    border-right: 1px solid #86838c;
  }
`;

const InfoLabel = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-right: 4px;
  color: #ffffff;
  text-transform: uppercase;
`;

const InfoValue = styled.p`
  color: #ffffffff;
  font-size: 15px;
  font-weight: 600;
`;

const Section = styled.div`
  margin-top: 24px;
  flex: 2;
  @media (max-width: 1199px) {
    width: 100%;
    margin-left: 0px;
    padding-top: 60px;
  }
`;

const ServiceSection = styled(Section)`
  margin-left: 60px;
  @media (max-width: 1199px) {
    margin-left: 0px;
  }
`;

const MeetingSection = styled(Section)`
  width: 100%;
  margin-top: 60px;
`;

const SectionWrapper = styled.div`
  display: block;
  height: 62vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #ff4f47 #1c1b1f;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #1c1b1f;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff4f47;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ff4f47;
  }
`;

const ServiceWrapper = styled(SectionWrapper)`
  .pending {
    color: #e4e669;
  }
  .running {
    color: #0075ca;
  }
  .completed {
    color: #008672;
  }
  .canceled {
    color: #d73a4a;
  }
`;
const MeetingWrapper = styled(SectionWrapper)``;
const Projects = styled.div`
  margin-bottom: 30px;
  border-left: 5px solid transparent;
  border-radius: 4px;
  transition: all 200ms ease;
  &:hover {
    border-left: 5px solid #ff4f47;
    transform: translateX(2%);
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  background-color: #151518;
  box-shadow: 0 10px 15px 0 #121113;
  width: 100%;
`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    flex: 1.5;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const InfoWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  @media (max-width: 767px) {
    flex: 1.5;
    padding: 0px 10px 0px 20px;
  }
`;

const ProjectTitle = styled.div`
  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

const Status = styled.p`
  margin: 5px 0;
  font-size: 0.8rem;
  color: #ff4f47;
`;

const TecBox = styled.div`
  border-top: 3px solid rgba(108, 107, 111, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  text-decoration: none;
  @media (max-width: 767px) {
    display: none;
  }

  li {
    background-color: #1c1b1f;
    margin-top: 5px;
    font-size: 11px;
    padding: 0px 6px;
    border-radius: 5px;
    transition: all 500ms ease;
    color: #86838c;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      color: #ff4f47;
    }
  }
`;

const ProjecAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 20px;
  @media (max-width: 500px) {
    flex: 0.5;
  }
  h1 {
    font-size: 1.2rem;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  p {
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export default Profile;
