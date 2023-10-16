import styled from 'styled-components';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ProjectCard from '../Cards/ProjectCard';
import {
  displayProject,
  clearErrors,
} from '../../../Features/adminFeatures/projectSlice';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import Loader from '../layout/Loader';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
  const dispatch = useDispatch();

  const {loading, error, projects} = useSelector(state => state.project);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'bottom-right',
        theme: 'dark',
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
                Case Study
              </p>
              <h1>Recent Projects</h1>
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
          <ServicesBottom>
            <CardBox>
              {projects &&
                projects.map(project => (
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
  margin-bottom: 60px;
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
  background-image: url(/images/14336.jpg);
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

export default Projects;
