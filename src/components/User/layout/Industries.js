import styled, { keyframes } from "styled-components";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { motion } from "framer-motion";
import IndustrieCard from "../Cards/IndustrieCard";
import Slider from "react-slick";

const Industries = () => {
  const cardData = [
    {
      title: "Retail, Ecommerce",
      iconsrc: "/images/icons/e-commerce.png",
    },
    {
      title: "Education & e-learning",
      iconsrc: "/images/icons/e-learning.png",
    },
    {
      title: "On-Demand Solutions",
      iconsrc: "/images/icons/OnDemandSolutions.png",
    },
    {
      title: "Food & Restaurant",
      iconsrc: "/images/icons/Food_Restaurant.png",
    },
    {
      title: "Healthcare & Fitness",
      iconsrc: "/images/icons/Healthcare_Fitness.png",
    },
    {
      title: "News Portel & Media",
      iconsrc: "/images/icons/News_Portel_Media.png",
    },
    {
      title: "Social Networking",
      iconsrc: "/images/icons/Social_Networking.png",
    },
    {
      title: "Real Estate",
      iconsrc: "/images/icons/RealEstate.png",
    },
    {
      title: "Travel & Hospitality",
      iconsrc: "/images/icons/Travel.png",
    },
    {
      title: "Gaming",
      iconsrc: "/images/icons/Gaming.png",
    },
  ];

  var settings = {
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
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Container>
      <Shape1></Shape1>
      <Shape2></Shape2>
      <Shape3
        as={motion.div}
        animate={{
          x: [-30, 5, -30],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <img src="/images/Industries-sape-2.png" alt="" />
      </Shape3>

      <Content>
        <ServicesTop>
          <Title>
            <p>
              <CheckBoxOutlineBlankIcon />
              Services Coverage
            </p>
            <h1>Industries We Serve</h1>
          </Title>
          <Details>
            <DetailsBox>
              <p>
                Here, we make almost every genre of applications. You name it
                and we build it.
              </p>
            </DetailsBox>
          </Details>
        </ServicesTop>
        {window.screen.availWidth > 1069 ? (
          <ServicesBottom>
            {cardData &&
              cardData.map((data, index) => (
                <IndustrieCard
                  key={index}
                  title={data.title}
                  iconsrc={data.iconsrc}
                />
              ))}
          </ServicesBottom>
        ) : null}
      </Content>
      {window.screen.availWidth <= 1069 ? (
        <Slide {...settings}>
          {cardData &&
            cardData.map((data, index) => (
              <IndustrieCard
                key={index}
                title={data.title}
                iconsrc={data.iconsrc}
              />
            ))}
        </Slide>
      ) : null}
    </Container>
  );
};
const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  padding: 120px 0 90px;
  overflow: hidden;
  z-index: 1;
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
  background-image: url(/images/industries-bg.jpg);
  z-index: -1;
`;
const breatheAnimation = keyframes`
  from {translate: 0px;}
  50%  {translate: -35px;} 
  to   {translate:  0px}
`;
const Shape2 = styled.div`
  position: absolute;
  top: -335px;
  right: 309px;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  @media (max-width: 450px) {
    right: 120px;
  }
  background-image: -moz-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 79, 71) 100%
  );
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 79, 71) 100%
  );
  background-image: -ms-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 79, 71) 100%
  );
  opacity: 0.502;
  width: 98px;
  height: 765px;
  transform: rotate(-45deg);
  z-index: 1;
  @keyframes glowing {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Shape3 = styled.div`
  position: absolute;
  top: 0;
  right: -30px;
  img {
    width: auto;
    vertical-align: middle;
  }
  @media (max-width: 450px) {
    right: -190px;
  }
`;
const Content = styled.div`
  padding: 0px 35px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const ServicesTop = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.div`
  p {
    display: flex;
    align-items: center;
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
    }
    @media (max-width: 767px) {
      font-size: 16px;
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
const Details = styled.div``;
const DetailsBox = styled.div`
  margin-top: 26px;
`;
const ServicesBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Slide = styled(Slider)`
  padding: 0px 15px;
  .slick-dots {
    padding-right: 30px;
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
    top: 0px;
    left: 87%;
    z-index: 1;
    margin-left: 5px;
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
    top: 0px;
    right: 13%;
    z-index: 1;
    margin-right: 5px;
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

export default Industries;
