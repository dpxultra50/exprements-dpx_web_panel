import styled from 'styled-components';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const FourOFour = () => {
  return (
    <Container>
      <Shape
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img src="/images/shapes/line_shape.png" alt="" />
      </Shape>
      <Shape1
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img src="/images/shapes/line_shape.png" alt="" />
      </Shape1>
      <ShapeDown
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img src="/images/shapes/line_shape.png" alt="" />
      </ShapeDown>
      <ShapeDown2
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}>
        <img src="/images/shapes/line_shape.png" alt="" />
      </ShapeDown2>
      <BannerWrapper>
        {/* </Box> */}

        <ScheduleBox>
          <Showcase>
            <LogoBox>
              <img src="/images/layouts/datapollex_logo.png" alt="logo" />
            </LogoBox>
            <TitleBox>
              <p>Innovative solutions for a connected world</p>
              <h2>The Page You Were Looking For Does Not Exist.</h2>
            </TitleBox>

            <AgendaBox>
              <span>Important:</span>
              <p>1. Always Double Check You Spelling</p>
              <p>2. Try Similar Keywords</p>
              <p>3. Try Using More Than One Keyword</p>
              <p>4. Hit Go To Home Page</p>
            </AgendaBox>
            <ButtonBox>
              <Button>
                <Link to="/">
                  <ArrowCircleRightIcon />
                  <span>Go To Home </span>
                </Link>
              </Button>
            </ButtonBox>
          </Showcase>
        </ScheduleBox>

        <BackImg>
          <img src="/images/layouts/fourOfour.png" alt="" />
        </BackImg>
      </BannerWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 35px 20px 35px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1c1b1f;

  @media (max-width: 510px) {
    padding: 20px 15px 20px 15px;
  }
`;
const Shape = styled.div`
  position: absolute;
  top: 0;
  right: -30px;
  opacity: 0.09;

  img {
    width: auto;
    vertical-align: middle;
  }
`;
const Shape1 = styled.div`
  position: absolute;
  top: 0px;
  left: -30px;
  opacity: 0.09;

  img {
    width: auto;
    vertical-align: middle;
  }
`;
const ShapeDown = styled.div`
  position: absolute;
  bottom: 0;
  left: -30px;
  opacity: 0.09;

  img {
    width: auto;
    vertical-align: middle;
  }
`;
const ShapeDown2 = styled.div`
  position: absolute;
  bottom: 50px;
  right: -30px;
  opacity: 0.09;

  img {
    width: auto;
    vertical-align: middle;
  }
`;
const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`;
const BackImg = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  display: block;

  img {
    max-width: 650px;
    padding: 0px 40px;
    height: auto;
    @media (max-width: 528px) {
      max-width: 450px;
    }
  }
`;
const ButtonBox = styled.div`
  width: 100%;
  padding: 0px 30px;
  border-right: 3px solid rgba(108, 107, 111, 0.1);
  @media (max-width: 1100px) {
    border-right: 0px;
    padding: 0px 0px;
  }
`;
const Button = styled.div`
  margin-top: 20px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

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
    padding: 15px 40px 15px;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s linear;
    position: relative;
    overflow: hidden;
    z-index: 1;
    @media (max-width: 427px) {
      padding: 12px 25px 12px;
    }
    span {
      z-index: 2;
    }

    &::before {
      content: '';
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
      color: #ff4f47;
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

const ScheduleBox = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: #1c1b1f;
  border-radius: 5px;
  @media (max-width: 1075px) {
    flex-direction: column;
  }
`;

const Showcase = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const LogoBox = styled.div`
  border-right: 3px solid rgba(108, 107, 111, 0.1);
  border-bottom: 3px solid rgba(108, 107, 111, 0.1);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  @media (max-width: 1100px) {
    border-right: 0px;
    display: none;
  }
  img {
    max-width: 330px;
    min-width: 200px;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 0px 30px;
  border-right: 3px solid rgba(108, 107, 111, 0.1);
  @media (max-width: 1100px) {
    border-top: 3px solid rgba(108, 107, 111, 0.1);
    border-right: 0px;
    margin-top: 20px;
    p {
      display: none;
    }
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
      font-size: 18px;
    }
  }
`;

const AgendaBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: start;
  padding: 0px 30px;
  border-right: 3px solid rgba(108, 107, 111, 0.1);
  @media (max-width: 1100px) {
    border-right: 0px;
    padding: 0px 0px;
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

export default FourOFour;
