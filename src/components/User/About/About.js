import { Box } from "@mui/material";
import Slider from "react-slick";
import styled from "styled-components";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";
import ProcessWeFollow from "../layout/ProcessWeFollow";
import HeaderBanner from "../layout/HeaderBanner";
import Consumers from "./Consumers";
import GetAQuote from "../layout/GetAQuote";
import MetaData from "../layout/MetaData";

const About = () => {
  var aboutsettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };

  const featureData = [
    {
      image: "/images/icons/about_experience.png",
      plus: "13+",
      statement: "Years Of Experience In Delivering IT Solutions",
    },
    {
      image: "/images/icons/about-apps-developed.png",
      plus: "2500+",
      statement: "Mobile Apps Developed",
    },
    {
      image: "/images/icons/about-web-dev.png",
      plus: "1100+",
      statement: "Websites Developed",
    },
    {
      image: "/images/icons/about-happy-clients.png",
      plus: "2600+",
      statement: "Happy Clients",
    },
    {
      image: "/images/icons/about-ecommerce-developed.png",
      plus: "120+",
      statement: "Ecommerce Developed",
    },
    {
      image: "/images/icons/about-developers.png",
      plus: "1000+",
      statement: "Dedicated Developers & Designers",
    },
  ];

  const svgData = [
    "/images/icons/about-clint-logo1.svg",
    "/images/icons/about-clint-logo2.svg",
    "/images/icons/about-clint-logo3.svg",
    "/images/icons/about-clint-logo4.svg ",
  ];
  const bannerData = {
    backImg: "/images/header/aboutHeader.webp",
    title: "Innovating Tomorrow's Tech",
    subTitle: "We deliver the best & we are unbeatable.",
    opacity: 0.3,
  };
  return (
    <Container>
      <MetaData
        title="  About us | DataPollex Blockchain &amp; Software Development"
        keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
        desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
      />

      {/* First part */}
      <HeaderBanner bnrdata={bannerData} />

      {/* About DPX */}
      <AboutContainer>
        <AboutShape1
          as={motion.div}
          animate={{
            x: [-40, 5, -40],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
        >
          <img src="/images/services-shape-1.png" alt="" />
        </AboutShape1>
        <AboutShape2>
          <img src="/images/services-shape-2.png" alt="" />
        </AboutShape2>
        <AboutBox>
          <AboutTxt>
            <Logo>
              <Link to="/">
                <img src="/images/layouts/datapollex_logo.png" alt="logo" />
              </Link>
            </Logo>
            <Box color={"white"}>
              <Box sx={{ mb: 4 }}>
                <p>We deliver the best & we are unbeatable.</p>
              </Box>

              <Box sx={{ mb: 4 }}>
                <p>
                  {" "}
                  DataPollex is a renowned{" "}
                  <span>
                    web & mobile application development company & the best IT
                    Software Solutions provider based in New York, USA & India,
                    established in 2010. Apart from this, we also have sales
                    offices in Finland, Japan, Inda, UAE.
                  </span>
                </p>
              </Box>

              <Box sx={{ mb: 4 }}>
                <p>
                  DataPollex offers a comprehensive range of services designed
                  to empower businesses and drive growth. Our skilled team of
                  professionals excels in various domains, including software
                  development, blockchain development, mobile app development,
                  website development, AR-VR development, game development, and
                  more. We leverage our expertise and innovative approach to
                  create highly customized solutions that cater to your specific
                  requirements.At DataPollex, we prioritize quality and
                  timeliness in all our projects. We adhere to stringent quality
                  standards and maintain the highest level of data security.
                </p>
              </Box>

              <p>
                Partner with DataPollex to experience the power of innovation,
                reliability, and customer satisfaction. We are passionate about
                what we do and strive to deliver solutions that make a
                meaningful impact on your business.
              </p>

              <SvgBox>
                {svgData.map((svg, index) => (
                  <AboutImg key={index}>
                    <img src={svg} alt="icon" />
                  </AboutImg>
                ))}
              </SvgBox>
            </Box>
          </AboutTxt>

          <AboutCards>
            {window.screen.availWidth > 1119 ? (
              <CardBox>
                <CardWrap>
                  {featureData &&
                    featureData.map((feature, index) => (
                      <FeatureCard key={index} feature={feature} />
                    ))}
                </CardWrap>
              </CardBox>
            ) : null}
          </AboutCards>

          {window.screen.availWidth <= 1119 ? (
            <Slide {...aboutsettings}>
              {featureData &&
                featureData.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} />
                ))}
            </Slide>
          ) : null}
        </AboutBox>
      </AboutContainer>
      {/* About DPX End */}
      {/* Exprience */}
      <ExpContainer>
        <Exprience>
          {/* Second part */}
          <ExpData>
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <Box className="exp-data-img">
                <img src="/images/viewers/about-icon-1.webp" alt="" />
              </Box>
              <Box className="textbox" color={"white"}>
                <h1>12 Years in Market</h1>
                <p>
                  DataPollex is a trusted leader in the IT industry with over 10
                  years of experience, delivering top-notch solutions to
                  companies of all sizes globally.
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                gap: "10px",
                mt: 4,
              }}
            >
              <Box className="exp-data-img">
                <img src="/images/viewers/about-icon-2.webp" alt="" />
              </Box>
              <Box className="textbox" color={"white"}>
                <h1>75+ Certified Engineers</h1>
                <p>
                  As a leading provider of Blockchain and Software Development
                  services, we are dedicated to delivering high-quality
                  solutions for your applications.
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                gap: "10px",
                mt: 4,
                mb: 2,
              }}
            >
              <Box className="exp-data-img">
                <img src="/images/viewers/about-icon-3.webp" alt="" />
              </Box>
              <Box className="textbox" color={"white"}>
                <h1>650+ Successful Projects</h1>
                <p>
                  With over a decade of experience in the IT market, ClickIT is
                  a trusted provider of top-notch solutions to companies of all
                  sizes worldwide.
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                gap: "10px",
                mt: 4,
                mb: 2,
              }}
            >
              <Box className="exp-data-img">
                <img src="/images/viewers/about-icon-4.webp" alt="" />
              </Box>
              <Box className="textbox" color={"white"}>
                <h1> 100% Blockchain Solutions</h1>
                <p>
                  Our approach revolves around optimizing blockchain systems,
                  harnessing the power of decentralized technology and
                  leveraging blockchain frameworks.
                </p>
              </Box>
            </Box>
          </ExpData>
          <ExpImg>
            <img src="/images/viewers/about-badges.webp" alt="" srcSet="" />
          </ExpImg>
        </Exprience>
      </ExpContainer>
      {/* Exprience End */}

      {/* ProcessWeFollow */}
      <ProcessWeFollow />

      {/* ----Met Our Consumer----- */}
      <Consumers />
      {/* ----Met Our Consumer End----- */}

      <GetAQuote />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  .meet-consumer {
    padding: 80px 0px 80px 0px;
  }
`;

const ExpContainer = styled.div`
  position: relative;
  display: block;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 480px) {
    padding: 40px 15px 80px 15px;
  }
`;
const Exprience = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1180px) {
    flex-wrap: wrap;
  }
`;
const ExpData = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  .exp-data-img {
    img {
      max-width: 150px;
    }
  }
  @media (max-width: 457px) {
    .exp-data-img {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
  }
  .textbox {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    font-weight: 800px;
    h1 {
      font-size: 26px;
      line-height: 48px;
      @media (max-width: 767px) {
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 10px;
      }
    }
  }
`;
const ExpImg = styled.div`
  max-width: 50%;
  @media (max-width: 1180px) {
    max-width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;
const AboutContainer = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 480px) {
    padding: 40px 15px 80px 15px;
  }
`;

const AboutBox = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1119px) {
    flex-direction: column;
  }
`;
const AboutShape1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  img {
    opacity: 0.06;
  }
`;
const AboutShape2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  mix-blend-mode: luminosity;
  img {
    width: auto;
    opacity: 0.02;
  }
`;
const AboutTxt = styled.div``;

const AboutImg = styled.div``;

const Logo = styled.div`
  margin-top: 8px;
  max-width: 216px;
  img {
    width: 100%;
  }
`;

const SvgBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 5px;
  }
`;
const AboutCards = styled.div`
  margin-left: 40px;
`;
const Slide = styled(Slider)`
  padding: 0px 15px;
  .slick-dots {
    padding-right: 40px;
    bottom: -60px;
  }
  .slick-dots li {
    margin: 0 1px;
    color: rgb(150, 158, 171);
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: #ff4f47;
    font-size: 15px;
    transition: all 500ms ease;
  }
  .slick-prev {
    position: absolute;
    top: -20px;
    left: 87%;
    z-index: 1;
    margin-left: 5px;
    @media (max-width: 510px) {
      top: -30px;
    }
    &::before {
      content: "";
      border: solid #ff4f47;
      border-width: 0 4px 4px 0;
      display: inline-block;
      padding: 4px;
      transform: rotate(-45deg);
    }
    @media (max-width: 600px) {
      left: 83%;
    }
  }
  .slick-next {
    position: absolute;
    top: -20px;
    right: 13%;
    z-index: 1;
    margin-right: 5px;
    @media (max-width: 510px) {
      top: -30px;
    }
    &::before {
      content: "";
      border: solid #ff4f47;
      border-width: 0 4px 4px 0;
      display: inline-block;
      padding: 4px;
      transform: rotate(135deg);
    }
    @media (max-width: 600px) {
      right: 17%;
    }
  }
`;
const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
    margin-top: 30px;
  }
`;
const CardWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 1119px) {
    display: flex;
  }
`;

export default About;
