import styled from "styled-components";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Slider from "react-slick";
import Reviewcard from "../Cards/Reviewcard";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 900000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
        },
      },
    ],
  };
  var data = [
    {
      name: "App Development",
      image: "/images/clintprofiles/appdevclint.webp",
      jobTitle: "CEO - Co Founder",
      reating: 5,
      comment:
        "DataPollex's app development service is exceptional. Their team demonstrated professionalism & expertise.The development process was efficient, resulting in a polished and seamless app.",
    },
    {
      name: "Web Development",
      image: "/images/clintprofiles/webdevclint.webp",
      jobTitle: "Chief Innovation Officer",
      reating: 5,
      comment:
        "DataPollex's web development service is truly impressive. They transformed my vision into a visually stunning and highly functional website, with exceptional attention to detail.",
    },
    {
      name: "Blockchain Development",
      image: "/images/clintprofiles/blockchainclint.webp",
      jobTitle: "Technical Lead",
      reating: 5,
      comment:
        "DataPollex's blockchain development service exceeded my expectations.Their team's commitment to delivering top-notch results make them a trusted partner in the blockchain space.",
    },
    {
      name: "E-commerce Development",
      image: "/images/clintprofiles/ecomclint.webp",
      jobTitle: "Founder & CEO ",
      reating: 5,
      comment:
        "I highly recommend for DataPollex's e-commerce development. Their team's expertise are exceptional, resulting in a seamless and user-friendly online shopping experience for our customers.",
    },
    {
      name: "Cyber Security",
      image: "/images/clintprofiles/cyberclint.webp",
      jobTitle: "CEO - Co Founder",
      reating: 4.5,
      comment:
        "Trust DataPollex for a secure digital environment.Their expertise in protecting sensitive data and proactive approach to identifying potential threats make them a reliable partner for safeguarding.",
    },
    {
      name: "Digital Marketing",
      image: "/images/clintprofiles/digital-marketingclint.webp",
      jobTitle: "Marketing Head",
      reating: 4.3,
      comment:
        "I highly recommend DataPollex's Digital Marketing service! Their expertise and strategic approach have significantly boosted our online presence and helped us reach a wider audience.",
    },
    {
      name: "Metaverse Development",
      image: "/images/clintprofiles/metaverse-development-clint.webp",
      jobTitle: "Chief Architect",
      reating: 4,
      comment:
        "DataPollex's Metaverse Development Service is simply exceptional! Their expertise in creating interactive virtual worlds is unparalleled, providing users with a seamless and captivating experience.",
    },
  ];
  return (
    <Container>
      <Shape1></Shape1>
      <Wraper>
        <TextBox>
          <AboutTitle>
            <p>
              <span>
                <CheckBoxOutlineBlankIcon />
              </span>
              Testimonials
            </p>
            <h1>
              What they’re talking <br /> about us
            </h1>
          </AboutTitle>
        </TextBox>
      </Wraper>
      <CardBox>
        <Slide {...settings}>
          {data &&
            data.map((data, index) => (
              <Reviewcard
                key={index}
                name={data.name}
                jobTitle={data.jobTitle}
                imgsrc={data.image}
                reating={data.reating}
                comment={data.comment}
              />
            ))}
        </Slide>
      </CardBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1c1b1f;
  position: relative;
  display: block;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 450px) {
    padding: 40px 0px 80px 0px;
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
const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AboutTitle = styled.div`
  margin-bottom: 31px;

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
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 10px;
        @media (max-width: 767px) {
          font-size: 14px;
        }
      }
    }
  }
  h1 {
    text-align: center;
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 20px;
    }
    @media (max-width: 450px) {
      margin-bottom: 40px;
    }
  }
`;
const CardBox = styled.div``;
const Slide = styled(Slider)`
  .slick-dots {
    display: none !important;
  }
  .slick-dots li {
    display: none !important;
  }
  ul li button {
    display: none !important;
  }
  li.slick-active button:before {
    display: none !important;
  }
  .slick-prev {
    display: none !important;
  }
  .slick-next {
    display: none !important;
  }
`;
export default Testimonials;
