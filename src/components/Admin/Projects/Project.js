import Header from '../Components/Header';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Loader from '../../User/layout/Loader';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getAllProject,
  clearErrors,
} from '../../../Features/adminFeatures/projectSlice';
import NothingToDisplay from '../../User/layout/NothingToDisplay';

const Project = () => {
  const dispatch = useDispatch();
  const apiURL = process.env.REACT_APP_SERVER_URL;

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

    dispatch(getAllProject());
  }, [error, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <ToastContainer />
          <Header title="ALL PROJECTS" subtitle="DataPollex All Project's" />

          {/* All Projects */}
          <ProjectsBox>
            <CreateProject>
              <b>CREATE PROJECT</b>
              <Button>
                <Link to="/admin/project/create">
                  <AddIcon />
                  <span>Create </span>
                </Link>
              </Button>
            </CreateProject>

            <ProjectCard>
              {projects.length !== 0 ? (
                projects.map(project => (
                  <Projects key={project._id}>
                    <Link to={`/project/details/${project._id}`}>
                      <ProjectWrapper>
                        <ImageWrapper>
                          <img
                            src={
                              project.projectImage
                                ? `${apiURL}/uploads/project/${project.projectImage}`
                                : '/images/working.svg'
                            }
                            // src={}
                            alt="Project"
                          />
                        </ImageWrapper>
                        <InfoWrapper>
                          <ProjectTitle>
                            <h2>{project.title}</h2>
                            <Status className={`${project.status}`}>
                              {project.status}
                            </Status>
                            <TecBox>
                              {project.technologies &&
                                project.technologies.map((tec, i) => (
                                  <li key={i}>
                                    <span>{tec}</span>
                                  </li>
                                ))}
                            </TecBox>
                          </ProjectTitle>
                        </InfoWrapper>
                        <ProjecAmount>
                          <h1>
                            {project.costing.totalamount +
                              project.costing.additionalCharge -
                              project.costing.discount}{' '}
                            {project.costing.currency}
                          </h1>
                          <p>
                            Paid Amount{' '}
                            <span>
                              {project.costing.paid} {project.costing.currency}
                            </span>
                          </p>
                        </ProjecAmount>
                      </ProjectWrapper>
                    </Link>
                  </Projects>
                ))
              ) : (
                <NothingToDisplay data={'Project'} />
              )}
            </ProjectCard>
          </ProjectsBox>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: #1c1b1f;
  position: relative;
  display: block;
  padding: 20px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  text-decoration: none;

  span {
    color: #ffff;
  }

  @media (max-width: 480px) {
    padding: 20px 15px 80px 15px;
  }
  @media (max-width: 368px) {
    padding: 20px 10px 80px 10px;
  }
`;

const ProjectsBox = styled.div`
  margin-top: 60px;
`;
const CreateProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  background-color: #151518;
  box-shadow: 0 10px 15px 0 #121113;
  border-left: 1px solid #ff4f47;
  border-right: 1px solid #ff4f47;
  padding: 15px 15px;
  @media (max-width: 389px) {
    flex-direction: column;
  }
  b {
    font-size: 16px;
    @media (max-width: 389px) {
      margin-bottom: 14px;
    }
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
      transition: all 0.5s linear;
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
      color: #ff4f47 !important;
      span {
        color: #ff4f47;
      }
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

const ProjectCard = styled.div`
  margin-top: 60px;
`;

const Projects = styled.div`
  margin-bottom: 30px;
  /* border-left: 5px solid transparent; */
  border-radius: 4px;
  transition: all 200ms ease;
  &:hover {
    border-left: 5px solid #ff4f47;
    transform: translateX(2%);
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  background-color: #151518;
  box-shadow: 0 10px 15px 0 #121113;
  width: 100%;
`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    flex: 1.5;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  @media (max-width: 767px) {
    flex: 1.5;
    padding: 0px 10px 0px 20px;
  }
`;

const ProjectTitle = styled.div`
  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

const Status = styled.p`
  margin: 5px 0;
  font-size: 0.8rem;
  color: #ff4f47;
`;

const TecBox = styled.div`
  border-top: 3px solid rgba(108, 107, 111, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  text-decoration: none;
  @media (max-width: 767px) {
    display: none;
  }

  li {
    background-color: #1c1b1f;
    margin-top: 5px;
    font-size: 11px;
    padding: 0px 6px;
    border-radius: 5px;
    transition: all 500ms ease;
    color: #86838c;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      color: #ff4f47;
    }
  }
`;

const ProjecAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 20px;
  @media (max-width: 500px) {
    flex: 0.5;
  }
  h1 {
    font-size: 1.2rem;
    color: #ffffff;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  p {
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
export default Project;
