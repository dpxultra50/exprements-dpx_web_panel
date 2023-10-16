import styled from 'styled-components';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {motion} from 'framer-motion';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ProjectHeader = ({headeData}) => {
  const apiURL = process.env.REACT_APP_SERVER_URL;
  return (
    <Container>
      <Shape1
        as={motion.div}
        animate={{
          x: [-40, 5, -40],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img src="/images/services-shape-1.png" alt="" />
      </Shape1>
      <Shape2>
        <img src="/images/services-shape-2.png" alt="" />
      </Shape2>
      <TeamFeature>
        {headeData.projectImage ? (
          <TeamImg>
            <img
              src={`${apiURL}/uploads/project/${headeData.projectImage}`}
              alt=""
            />
          </TeamImg>
        ) : null}

        <ServicesTop>
          <Title>
            <b>
              <CheckBoxOutlineBlankIcon />
              {headeData.title}
            </b>
          </Title>
          {headeData.description ? (
            <Details>
              <DetailsBox>
                <Box>
                  <Filed>
                    <span>
                      <AttachFileIcon />
                      Description
                    </span>
                  </Filed>
                  <TextBox>
                    <p>{headeData.description}</p>
                  </TextBox>
                </Box>
              </DetailsBox>
            </Details>
          ) : null}
        </ServicesTop>
      </TeamFeature>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: block;
  padding: 60px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    background-color: #1c1b1f;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: '';
    height: 600px;
    z-index: -1;
  }
  @media (max-width: 480px) {
    padding: 40px 15px 20px 15px;
  }
`;
const Shape1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  z-index: -1;
  img {
    opacity: 0.06;
  }
`;
const Shape2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  z-index: -1;

  img {
    width: auto;
    opacity: 0.02;
  }
`;
const TeamImg = styled.div`
  flex: 1.5;

  @media (max-width: 1124px) {
    padding: 0px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ServicesTop = styled.div`
  flex: 1.5;
  margin-bottom: 30px;
  margin-left: 30px;
  @media (max-width: 924px) {
    margin-left: 6px;
  }
`;
const Title = styled.div`
  @media (max-width: 924px) {
    margin-top: 20px;
  }

  b {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 24px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    svg {
      margin-right: 10px;
      margin-top: 2px;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      svg {
        font-size: 18px;
        margin-top: 4px;
      }
    }
  }
  h1 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 34px;
    }
  }
`;
const Details = styled.div`
  margin-top: 26px;

  @media (max-width: 767px) {
    padding-right: 0px;
  }
`;
const DetailsBox = styled.div`
  width: 100%;
`;
const Box = styled.div`
  width: 100% !important;
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
  color: #ffffff;
  span {
    color: #ffffff !important;
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
const TextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 4px;
  background-color: #1c1b1f;
  padding: 6px 12px;
  border-radius: 4px;
  max-height: 350px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #ff4f47 #1c1b1f;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 2px !important;
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

const TeamFeature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 924px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default ProjectHeader;
