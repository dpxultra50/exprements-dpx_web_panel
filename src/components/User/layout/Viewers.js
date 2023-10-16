import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useRef } from "react";
import { useEffect } from "react";
import CountUp from "react-countup";
import Industries from "./Industries";

const Viewers = () => {
  const ref = useRef(null);
  const boxref = useRef(null);

  const boxIsInView = useInView(boxref);
  const isInView = useInView(ref);

  const aboutAnim = useAnimation();

  useEffect(() => {
    if (isInView) {
      aboutAnim.start({
        x: 0,
        transition: { type: "spring", duration: 3.5, bounce: 0.5 },
      });
    }
    if (!isInView) {
      aboutAnim.start({
        x: -300,
      });
    }
  }, [boxIsInView, isInView, aboutAnim]);

  return (
    <>
      <Container>
        {/* About Starts */}
        <About ref={ref}>
          <AboutWrap>
            <AboutImg as={motion.div} animate={aboutAnim}>
              <FrontImg>
                <img src="/images/viewers/home_about.webp" alt="" />
              </FrontImg>
              <BackImg>
                <img src="/images/backimg.png" alt="" />
              </BackImg>
              <Statistics>
                <CountUp
                  start={0}
                  end={98}
                  redraw={true}
                  suffix=" %"
                  duration={2}
                >
                  {({ countUpRef, start }) => (
                    <div>
                      <h1 ref={countUpRef}>.</h1>
                    </div>
                  )}
                </CountUp>
                <p>Satisfied customers</p>
              </Statistics>
            </AboutImg>
            <AboutText>
              <AboutTitle>
                <p>
                  <span>
                    <CheckBoxOutlineBlankIcon />
                  </span>
                  ABOUT DataPollex
                </p>
                <h1>Experienced & Quality IT Services Providers</h1>
              </AboutTitle>

              <AboutSubTxt>
                <p>
                  We are a highly experienced IT services company dedicated to
                  providing top-quality solutions to businesses.From software
                  development to cybersecurity, we offer effective solutions
                  tailored to your unique needs. Let us help your business
                  thrive in the digital age
                </p>
                <AboutSec>
                  <AboutSecWrap>
                    <IconBox>
                      <CheckCircleOutlineIcon />
                      <h2>Innovative work</h2>
                    </IconBox>
                    <TextBox>
                      <p> Creative services for your unique needs</p>
                    </TextBox>
                  </AboutSecWrap>
                  <AboutSecWrap>
                    <IconBox>
                      <CheckCircleOutlineIcon />
                      <h2>Customized Services</h2>
                    </IconBox>
                    <TextBox>
                      <p>Tailored solutions for efficiency and profitability</p>
                    </TextBox>
                  </AboutSecWrap>
                </AboutSec>
              </AboutSubTxt>
              <AboutBtn>
                <Button>
                  <Link to="/about">
                    <ArrowCircleRightIcon />
                    <span> Discover more</span>
                  </Link>
                </Button>
              </AboutBtn>
            </AboutText>
          </AboutWrap>
        </About>
        {/* About Ends */}
      </Container>
      {window.screen.availWidth >= 991 ? <Industries /> : null}
    </>
  );
};

const Container = styled.div`
  margin-top: 50px;
  padding: 0px 35px 120px 35px;
`;

//About Start
const About = styled.div``;
const AboutWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1098px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;
const AboutImg = styled.div`
  width: 50%;
  position: relative;
  display: block;
  margin-right: 70px;
  @media (max-width: 1098px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0px;
  }
`;
const FrontImg = styled.div`
  img {
    width: 100%;
    max-height: 575px;
    border-radius: 10px;
    object-fit: cover;
  }
`;
const BackImg = styled.div`
  img {
    position: absolute;
    top: 5%;
    right: -40px;
    opacity: 0.2;
    z-index: -1;
    opacity: 0.05;
    width: 100%;
    object-fit: cover;
    height: 100%;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
const Statistics = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 30%;
  left: -25px;
  z-index: 1;
  background-color: #ff4f47;
  padding: 21px 40px 20px;
  border: 5px dashed #121113;
  border-radius: 10px;
  @media (max-width: 1098px) {
    left: -25%;
  }
  @media (max-width: 767px) {
    position: unset;
    flex-direction: column;
  }
  h1 {
    font-size: 55px;
    color: #fff;
    font-weight: 800;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 20px;
    color: #fff;
    font-weight: 400;
    line-height: 20px;
  }
`;

const AboutText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 50px;
  @media only screen and (min-width: 768px) and (max-width: 1098px) {
    margin-top: 80px;
    margin-left: 0px;
    width: 60%;
  }
  @media (max-width: 767px) {
    margin-top: 80px;
    margin-left: 0px;
    width: 100%;
  }
`;
const AboutTitle = styled.div`
  margin-bottom: 31px;
  p {
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    @media (max-width: 919px) {
      font-size: 16px;
    }
    span {
      margin-right: 10px;
    }
  }
  h1 {
    font-size: 48px;
    line-height: 58px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 919px) {
      font-size: 38px;
    }
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 34px;
    }
  }
`;
const AboutSubTxt = styled.div``;
const AboutSec = styled.div`
  display: flex;
  align-items: center;
  margin-top: 41px;
  margin-bottom: 41px;
  @media (max-width: 767px) {
    align-items: flex-start;
  }
`;
const AboutSecWrap = styled.div`
  @media (max-width: 767px) {
    :nth-child(2) {
      margin-left: 20px;
    }
  }
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 21px;
  svg {
    color: #ff4f47;
    font-size: 30px;
    @media (max-width: 767px) {
      font-size: 25px;
    }
    @media (max-width: 383px) {
      font-size: 20px;
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin-left: 10px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 383px) {
      font-size: 14px;
      margin-left: 5px;
    }
  }
`;
const TextBox = styled.div`
  p {
    @media (max-width: 383px) {
      font-size: 13px;
    }
  }
`;
const AboutBtn = styled.div``;

const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

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
//About Ends

export default Viewers;
