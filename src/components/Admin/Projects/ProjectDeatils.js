import styled from 'styled-components';
import ProjectHeader from './ProjectHeader';
import Overview from './Overview';
import OtherDetails from './OtherDetails';
import {useSelector} from 'react-redux';
import Dropdown from '../../User/Profile/Dropdown';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProjectDeatils = ({project}) => {
  const {user} = useSelector(state => state.user);

  const {
    _id,
    projectImage,
    title,
    description,
    costing,
    status,
    milestone,
    createdAt,
    technologies,
    requiredCredential,
    phonenumber,
    userId,
    remarks,
    emailaddress,
  } = project;

  return (
    <Container>
      <ToastContainer />
      {user.role === 'user' ? <Dropdown /> : null}
      <ProjectHeader headeData={{projectImage, title, description}} />
      <Overview
        viewData={{
          costing,
          status,
          createdAt,
          milestone,
          technologies,
          user,
          _id,
        }}
      />
      <OtherDetails
        otherData={{
          _id,
          requiredCredential,
          costing,
          phonenumber,
          userId,
          remarks,
          emailaddress,
          user,
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;
export default ProjectDeatils;
