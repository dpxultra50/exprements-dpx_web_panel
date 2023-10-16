import styled from "styled-components";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  displayProject,
  clearErrors,
} from "../../../Features/adminFeatures/projectSlice";
import Loader from "../layout/Loader";

const RecentProjects = () => {
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

  const dispatch = useDispatch();

  const { loading, error, projects } = useSelector((state) => state.project);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-right",
        theme: "dark",
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    dispatch(displayProject());
  }, [error, dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <ToastContainer />
          <Shape1></Shape1>
          <ServicesTop>
            <Title>
              <p>
                <CheckBoxOutlineBlankIcon />
                Project Highlights
              </p>
              <h1>Our Recent Projects</h1>
            </Title>
            <Details>
              <DetailsBox>
                <p>
                  We build applications across all genres with our skilled team.
                  Let us bring your project to life.
                </p>
              </DetailsBox>
            </Details>
          </ServicesTop>
          {window.screen.availWidth > 1119 ? (
            <ServicesBottom>
              <CardBox>
                {projects &&
                  projects
                    .slice(0, 6)
                    .map((project) => (
                      <ProjectCard
                        key={project._id}
                        link={project.requiredCredential.sitelink}
                        title={project.title}
                        imgsrc={project.projectImage}
                        technologies={project.technologies}
                      />
                    ))}
              </CardBox>
            </ServicesBottom>
          ) : null}
          {window.screen.availWidth <= 1119 ? (
            <Slide {...settings}>
              {projects &&
                projects
                  .slice(0, 6)
                  .map((project) => (
                    <ProjectCard
                      key={project._id}
                      link={project.requiredCredential.sitelink}
                      title={project.title}
                      imgsrc={project.projectImage}
                      technologies={project.technologies}
                    />
                  ))}
            </Slide>
          ) : null}
          <BtnCont>
            <Button>
              <Link to="/works">
                <span> Discover more</span>
                <ArrowCircleRightIcon />
              </Link>
            </Button>
          </BtnCont>
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
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 450px) {
    padding: 120px 0 90px;
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
  opacity: 0.03;
  background-image: url(/images/service-back-01.png);
  z-index: -1;
`;
const ServicesTop = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: #ff4f47;
    font-weight: 800;
    line-height: 26px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    svg {
      margin-right: 10px;
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
    }
  }
`;
const Details = styled.div``;
const DetailsBox = styled.div`
  margin-top: 26px;

  @media (max-width: 767px) {
    padding: 0px 15px;
    text-align: center;
    margin-bottom: 26px;
  }
`;
const ServicesBottom = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  height: 100%;
`;
const Slide = styled(Slider)`
  padding: 0px 15px;
  .slick-dots {
    padding-right: 40px;
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
const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1119px) {
    margin-top: 20px;
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
    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 15px 40px 15px;
    border-radius: 5px;
    transition: all 0.5s ease;
    span {
      transition: all 0.5s ease-in-out;
      border-bottom: 1px solid transparent;
    }
    &:hover {
      color: #ff4f47;
      svg {
        transform: translateX(8px);
      }
      span {
        border-bottom: 1px solid #ffffff;
      }
    }
    svg {
      margin-right: 4px;
      padding-left: 2px;
      font-size: 20px;
      z-index: 2;
      transition: all 0.5s ease;
    }
  }
`;
export default RecentProjects;
