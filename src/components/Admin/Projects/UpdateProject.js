import styled from 'styled-components';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {
  projectDetails,
  clearErrors,
} from '../../../Features/adminFeatures/projectDetailsSlice';
import Loader from '../../User/layout/Loader';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProject from './EditProject';

const UpdateProject = () => {
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
          <ToastContainer />
          <EditProject project={project} />
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
`;
export default UpdateProject;
