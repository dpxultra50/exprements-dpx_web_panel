import styled from "styled-components";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailIcon from "@mui/icons-material/Email";
import {
  newsLetterSubscribe,
  clearErrors,
  newsLetterReset,
} from "../../../Features/contactUsFeatures/newsLetterSlice";
import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";

const Footer = () => {
  const dispatch = useDispatch();

  const { error, loading, success } = useSelector((state) => state.newsLetter);
  const [successControl, setSuccessControl] = useState(false);

  const [newsLetterData, setnewsLetterData] = useState({
    name: "",
    email: "",
  });
  const { name, email } = newsLetterData;

  const newsLetterSubmit = (e) => {
    e.preventDefault();

    const newsLetterForm = new FormData();
    newsLetterForm.set("name", name);
    newsLetterForm.set("email", email);

    dispatch(newsLetterSubscribe(newsLetterForm));
  };

  const newsLetterDataChange = (e) => {
    setnewsLetterData({ ...newsLetterData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (success) {
      setSuccessControl(success);
      dispatch(newsLetterReset());
      setTimeout(() => {
        setSuccessControl(false);
      }, 5000);
    }

    if (error) {
      toast.error(error, {
        position: "bottom-right",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }
  }, [error, dispatch, success]);
  return (
    <Container>
      <ToastContainer />
      <Shape
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <img src="/images/footer-shape-.png" alt="" />
      </Shape>
      <Warper>
        <Socile>
          <Logo>
            <Link to="/">
              <img src="/images/layouts/datapollex_logo.png" alt="logo" />
            </Link>
          </Logo>
          <Title>
            <p>
              DataPollex with more than two years of proven success in quality
              IT services.
            </p>
          </Title>
          <SubTitle>
            DataPollex is a leading Blockchain and Software Development company,
            providing premium solutions to companies of all sizes in various
            industries such as Ecommerce, Fintech, and MarTech. With our
            expertise in Blockchain technology and software development, we
            deliver superior tech solutions tailored to meet your specific
            needs.Our core focus areas include Blockchain development,mobile app
            & website development,Distributed Ledger Technology, and software
            development services.
          </SubTitle>
          <SocileIcon>
            <a href="https://www.facebook.com/datapollex/" target="blank">
              <FacebookIcon />
            </a>
            <a href="https://www.facebook.com/datapollex/" target="blank">
              <TwitterIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/datapollex/"
              target="blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://www.facebook.com/datapollex/" target="blank">
              <InstagramIcon />
            </a>
          </SocileIcon>
        </Socile>
        <Explore>
          <Title>
            <p>Explore</p>
          </Title>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contactus/meeting/timedate">Contact</Link>
            </li>
            <li>
              <Link to="/works">Recent Works</Link>
            </li>
            <li>
              <Link to="/industries">Industries</Link>
            </li>
            <li>
              <Link to="/service/web-development">Web Development</Link>
            </li>
          </ul>
        </Explore>

        <Newsletter>
          <Title>
            <p> Newsletter</p>
          </Title>
          <SubTitle>
            Subscribe to our newsletter and get update in your inbox.
          </SubTitle>
          <NewsLetterForm>
            <form onSubmit={newsLetterSubmit}>
              <input
                type="text"
                placeholder="Enter Full Name"
                required
                name="name"
                value={name}
                onChange={newsLetterDataChange}
              />
              <input
                style={{ marginTop: "15px" }}
                type="email"
                placeholder="Enter Email Address"
                required
                name="email"
                value={email}
                onChange={newsLetterDataChange}
              />
              <input
                disabled={loading ? true : false}
                type="submit"
                value="FooterNewsletter"
                id="footerNewslettersubmit"
                className="signUpBtn"
                style={{ display: "none" }}
              />
              <Button htmlFor="footerNewslettersubmit">
                <div>
                  <ArrowCircleRightIcon />
                  {loading ? <span>Sending.. </span> : <span>Subscribe </span>}
                </div>
              </Button>
            </form>
            <div
              style={{
                height: "30px",
                width: "auto",
                background: "transparent",
              }}
            >
              {successControl ? (
                <SuccessBox>
                  <DoneIcon /> subscription completed
                </SuccessBox>
              ) : null}
            </div>
          </NewsLetterForm>
        </Newsletter>
        <Contact>
          <Title>
            <p> Contact</p>
          </Title>
          <SubTitle>4057, Chittagong, Bangladesh</SubTitle>
          <Content>
            <ul>
              <li>
                <PhoneInTalkOutlinedIcon />
                <p>
                  +880 1963431045 <br /> +880 1778578738
                </p>
              </li>
              <li>
                <EmailIcon />
                <p>care@datapollex.com</p>
              </li>
            </ul>
          </Content>
        </Contact>
      </Warper>
      <FooterBottom>
        <BottomWraper>
          <p>
            © <Link to="http://www.datapollex.com/">DataPollex.com </Link>{" "}
            Blockchain & Software Development | 2015 – 2023 | All Rights
            Reserved
          </p>
        </BottomWraper>
      </FooterBottom>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: block;
  padding: 80px 35px 0px 35px;
  overflow: hidden;
  background-color: #1c1b1f;
  @media (max-width: 510px) {
    padding: 80px 15px 0px 15px;
  }
`;
const SuccessBox = styled.b`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #008672;
  svg {
    font-size: 20px;
    font-weight: 700;
  }
`;

const Shape = styled.div`
  position: absolute;
  top: 0;
  right: -30px;
  opacity: 0.05;

  img {
    width: auto;
    vertical-align: middle;
  }
`;
const Warper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 0.5fr 1fr 1fr;
  column-gap: 45px;
  align-items: flex-start;
  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: 2fr 1fr;
    column-gap: 45px;
    row-gap: 45px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    column-gap: 0px;
    row-gap: 50px;
  }
  div {
    max-width: 100%;
    padding-right: 15px;
  }
`;
const Socile = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  margin-top: -5px;
  div {
    &:nth-child(2) {
      margin: 20px 0px;
    }
  }
`;
const Title = styled.div`
  line-height: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;
const Logo = styled.div`
  max-width: 216px;
  img {
    width: 50%;
  }
`;
const SocileIcon = styled.div`
  margin-top: 32px;
  display: flex;
  a {
    position: relative;
    height: 40px;
    width: 40px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background-color: #151518;
    font-size: 15px;
    border-radius: 50%;
    overflow: hidden;
    transition: all 500ms ease;
    z-index: 1;
    @media (max-width: 767px) {
      color: #ff4f47;
      background-color: #ffffff;
    }

    ::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background-color: #ffffff;
      transition-delay: 0.1s;
      transition-timing-function: ease-in-out;
      transition-duration: 0.4s;
      transition-property: all;
      opacity: 0;
      transform-origin: top;
      transform-style: preserve-3d;
      transform: scaleY(0);
      z-index: -1;
      @media (max-width: 767px) {
        background-color: #151518;
      }
    }

    svg {
      font-size: 18px;
      font-weight: 400;
      position: relative;
    }
    :hover {
      color: #ff4f47;
      background-color: #ffffffd1;
      @media (max-width: 767px) {
        color: #ffffff;
        background-color: #151518;
      }
      ::after {
        opacity: 1;
        transform: scaleY(1);
      }
    }
  }
`;

const Explore = styled.div`
  font-size: 20px;
  color: #ffffff;
  font-weight: 800;
  line-height: 20px;
  /* margin-right: 45px; */

  div {
    margin-bottom: 30px;
  }

  ul {
    margin-top: -3px;
    z-index: 1000;
    li {
      margin-top: 3px;
      line-height: 30px;
      a {
        font-size: 15px;
        color: #86838c;
        font-weight: 400;
        transition: all 500ms ease;
      }
      :hover {
        a {
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
`;
const Newsletter = styled.div`
  div {
    &:nth-child(1) {
      margin-bottom: 30px;
    }
  }
`;
const SubTitle = styled.p`
  font-size: 15px;
  color: #86838c;
  font-weight: 400;
  line-height: 26px;
`;
const NewsLetterForm = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-top: 22px;
    input {
      z-index: 1;
      height: 45px;
      width: 100%;
      background-color: transparent;
      border: 1px solid #333236;
      outline: none;
      border-radius: var(--roofsie-bdr-radius);
      font-size: 12px;
      color: #86838c;
      padding-left: 30px;
      font-weight: 500;
    }
  }
`;
const Button = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  div {
    cursor: pointer;
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
const Contact = styled.div`
  div {
    &:nth-child(1) {
      margin-bottom: 30px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 22px;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;

    li {
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;

      svg {
        color: #ff4f47;
        font-size: 16px;
      }

      p {
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
`;
const BottomWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  padding: 32px 0;
  p {
    font-size: 15px;
    color: #86838c;
    font-weight: 400;

    a {
      color: #ff4f47;
      transition: all 500ms ease;
      &:hover {
        color: #ffffff;
      }
    }
  }
`;

export default Footer;
