import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate, useParams} from 'react-router-dom';
import {
  clearErrors,
  projectDetails,
} from '../../../Features/adminFeatures/projectDetailsSlice';
import {useEffect} from 'react';
import ProjectDeatils from '../../Admin/Projects/ProjectDeatils';
import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';

const UserProjectDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const {project, loading, error} = useSelector(state => state.projectDetails);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'bottom-left',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
      navigate('*');
    }

    dispatch(projectDetails(id));
  }, [dispatch, id, error, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <MetaData
            title={`${project.title} | DataPollex | Top It company In Bangladesh | Top It Company In Japan`}
            keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
            desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
          />
          <ToastContainer />
          <ProjectDeatils project={project} />
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  width: 100%;
`;
export default UserProjectDetails;
