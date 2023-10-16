import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AppsIcon from "@mui/icons-material/Apps";
import { motion } from "framer-motion";

const ImgSlider = () => {
  //SLIDER SETTINGS
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const slideData = [
    {
      topTitle: "Mobile App",
      title: "Reliable Mobile App Design & Development Services",
      subTitle:
        "Top Mobile App Development Company, Trustworthy Solutions For Your Business",
      imgsrc: "/images/slides/mobile-app-development-slide.webp",
      mblImgSrc: "/images/slides/mobile-app-development-mobile-slide.webp",
      link: "/service/mobile-app-development",
    },
    {
      topTitle: "Web Development",
      title: "High Quality Web Design & Development Services",
      subTitle:
        "Crafting Seamless User Experiences with Custom Web Development Solutions",
      imgsrc: "/images/slides/web-development-slide.webp",
      mblImgSrc: "/images/slides/web-development-mobile-slide.webp",
      link: "/service/web-development",
    },
    {
      topTitle: "Ecommerce Development",
      title: "Leading Ecommerce Design & Development Company",
      subTitle:
        "Boost Your Online Business with Tailored E-commerce Development Solutions",
      imgsrc: "/images/slides/ecommerce_slide.webp",
      mblImgSrc: "/images/slides/ecommerce_modile_slide.webp",
      link: "/service/ecommerce-development",
    },
    {
      topTitle: "Blockchain",
      title: "Revolutionary Blockchain Development Services",
      subTitle:
        "Experience A Decentralized Future with Our Expert Blockchain & Web3 Services.",
      imgsrc: "/images/slides/blockchain_slide.webp",
      mblImgSrc: "/images/slides/blockchain_mobile_slide.webp",
      link: "/service/blockchain-development",
    },
    {
      topTitle: "Cyber Security",
      title: "The Top-Rated Cyber Security Solutions Provider Company",
      subTitle:
        "Protecting Your Business from Cyber Threats with Robust Cyber Security Solutions",
      imgsrc: "/images/slides/cyber_security_slide.webp",
      mblImgSrc: "/images/slides/cyber_security_mobile_slide.webp",
      link: "/service/cyber-security",
    },
    {
      topTitle: "Digital Marketing",
      title: "Complete Digital Marketing Solutions Under One Roof",
      subTitle:
        "Unleashing Dynamic Digital Marketing Services for Enhanced Visibility and Growth",
      imgsrc: "/images/slides/digital_marketing_slide.webp",
      mblImgSrc: "/images/slides/digital_marketing_mobile_slide.webp",
      link: "/service/digital-marketing",
    },
  ];
  return (
    <Carousel {...settings}>
      {slideData &&
        slideData.map((slide, i) => (
          <Wrap key={i}>
            <ImageContainer>
              {window.screen.availWidth >= 991 ? (
                <img src={slide.imgsrc} alt="" />
              ) : (
                <img src={slide.mblImgSrc} alt="" />
              )}
            </ImageContainer>
            <DetailsContainer>
              <Subject as={motion.div} initial={{ x: -200 }} animate={{ x: 0 }}>
                <AppsIcon />
                <p>{slide.topTitle}</p>
              </Subject>
              <Title as={motion.div} initial={{ x: -200 }} animate={{ x: 0 }}>
                {slide.title}
              </Title>
              <Subtitle
                as={motion.div}
                initial={{ x: -200 }}
                animate={{ x: 0 }}
              >
                {slide.subTitle}
              </Subtitle>
              <SlideLink
                as={motion.div}
                initial={{ x: -200 }}
                animate={{ x: 0 }}
              >
                <Button>
                  <Link to={slide.link}>
                    <ArrowCircleRightIcon />
                    <span>Explore More</span>
                  </Link>
                </Button>
                <Appointment>
                  <Link to="/contactus/meeting/timedate">
                    Book an appointment
                  </Link>
                  <KeyboardArrowRightIcon />
                </Appointment>
              </SlideLink>
            </DetailsContainer>
          </Wrap>
        ))}
    </Carousel>
  );
};
const Carousel = styled(Slider)`
  .slick-prev {
    position: absolute;
    top: 50%;
    left: 95%;
    z-index: 1;
    width: 5vw;
    height: 100%;
    opacity: 0;
    @media (max-width: 767px) {
      display: none !important;
    }

    &::before {
      content: "";
      border: solid #ff4f47;
      border-width: 0 5px 5px 0;
      display: inline-block;
      padding: 10px;
      transform: rotate(-45deg);
    }
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  .slick-next {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    width: 5vw;
    height: 100%;
    opacity: 0;
    @media (max-width: 767px) {
      display: none !important;
    }
    &::before {
      content: "";
      border: solid #ff4f47;
      border-width: 0 5px 5px 0;
      display: inline-block;
      padding: 10px;
      transform: rotate(135deg);
    }
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
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
`;
const Wrap = styled.div`
  position: relative;
`;
const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  position: absolute;
  top: 20%;
  left: 3%;
  transition: transform 2000ms ease, opacity 2000ms ease,
    -webkit-transform 2000ms ease;
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    top: 18%;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    position: relative;
    top: unset;
    left: unset;
    width: 100%;
    background-color: #121113;
    background-image: url("/images/slideback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    box-shadow: 0px 10px 39.2px 0.8px rgba(0, 0, 0, 0.1);
    padding: 30px;
  }
  @media (max-width: 767px) {
    position: relative;
    top: unset;
    left: unset;
    width: 100%;
    background-color: #121113;
    background-image: url("/images/slideback.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    box-shadow: 0px 10px 39.2px 0.8px rgba(0, 0, 0, 0.1);
    padding: 30px 15px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
  padding-bottom: 20px;
  visibility: visible;
  opacity: 0.6;
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding-bottom: 8px;
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 8px;
    font-size: 16px;
  }
  @media (max-width: 767px) {
    padding-bottom: 4px;
    font-size: 14px;
  }
`;
const Title = styled.h1`
  position: relative;
  font-size: 50px;
  color: #ffffff;
  font-weight: 800;
  line-height: 65px;
  margin-bottom: 28px;
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 34px;
    line-height: 50px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 34px;
    line-height: 50px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 20px;
  }
`;

const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  svg {
    color: #ff4f47;
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 22px;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 22px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  p {
    font-size: 24px;
    color: #ff4f47;
    font-weight: 800;

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 22px;
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 22px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    margin-bottom: 8px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin-bottom: 8px;
  }
  @media (max-width: 767px) {
    margin-bottom: 4px;
  }
`;

const SlideLink = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 767px) {
    margin-top: 4px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    margin-top: 10px;
  }
  @media (max-width: 427px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

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
    @media (max-width: 427px) {
      padding: 12px 25px 12px;
    }
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
const Appointment = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  @media (max-width: 427px) {
    margin-left: 0px;
  }
  a {
    font-size: 16px;
    color: #ffff;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  svg {
    font-size: 18px;
    color: #ffff;
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    a {
      text-decoration: underline;
    }
    svg {
      transform: translate(5px, 0px);
    }
  }
`;

export default ImgSlider;
