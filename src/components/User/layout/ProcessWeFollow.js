import styled from "styled-components";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ProcessCard from "../Cards/ProcessCard";
import Slider from "react-slick";

const ProcessWeFollow = () => {
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
  const cardData = [
    {
      title: "1. Requirement Gathering",
      iconsrc: "/images/icons/RequirementGathering.png",
      details:
        "We make gathering project requirements, resources, and information a top priority to ensure a successful start to every project.",
    },
    {
      title: "2. UI/UX Design",
      iconsrc: "/images/icons/ui_ux_design.png",
      details:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
    },
    {
      title: "3. Prototype",
      iconsrc: "/images/icons/Prototype.png",
      details:
        "We deliver a prototype after designing, which our development team uses to bring your product to life.",
    },
    {
      title: "4. Development",
      iconsrc: "/images/icons/development.png",
      details:
        "Development of mobile application, web platform & blockchain started using latest tools and technologies with transparency.",
    },
    {
      title: "5. Deployment",
      iconsrc: "/images/icons/deployment.png",
      details:
        "Smoothly launch your product with our efficient deployment process using the latest tools and technologies.",
    },
    {
      title: "6. Support & Maintenance",
      iconsrc: "/images/icons/support_maintenance.png",
      details:
        "Our company offers you all support and the team is always ready to answer every query after deployment.",
    },
  ];

  return (
    <Container>
      <Wraper>
        <TextBox>
          <AboutTitle>
            <p>
              <span>
                <CheckBoxOutlineBlankIcon />
              </span>
              Workflow
            </p>
            <h1>Process We Follow</h1>
          </AboutTitle>
        </TextBox>
        {window.screen.availWidth > 1119 ? (
          <CardBox>
            <CardWrap>
              {cardData &&
                cardData.map((data, index) => (
                  <ProcessCard
                    key={index}
                    title={data.title}
                    iconsrc={data.iconsrc}
                    details={data.details}
                  />
                ))}
            </CardWrap>
          </CardBox>
        ) : null}
      </Wraper>
      {window.screen.availWidth <= 1119 ? (
        <Slide {...settings}>
          {cardData &&
            cardData.map((data, index) => (
              <ProcessCard
                key={index}
                title={data.title}
                iconsrc={data.iconsrc}
                details={data.details}
              />
            ))}
        </Slide>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  background: #ff4f47;
  padding: 80px 35px 80px 35px;

  @media (max-width: 510px) {
    padding: 80px 15px 80px 15px;
  }
`;
const Wraper = styled.div`
  display: flex;
  align-items: center;
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
    color: #ffffffff;
    font-weight: 700;
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
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 26px;
      line-height: 34px;
      margin-bottom: 20px;
    }
    @media (max-width: 450px) {
      margin-bottom: 40px;
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
const Slide = styled(Slider)`
  padding: 0px 15px;
  .slick-dots {
    padding-right: 40px;
    bottom: -60px;
  }
  .slick-dots li {
    margin: 0 1px;
    color: #1c1b1f;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: #1c1b1f;
    }
  }
  li.slick-active button:before {
    color: #151518;
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
      border: solid #151518;
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
      border: solid #151518;
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
export default ProcessWeFollow;
