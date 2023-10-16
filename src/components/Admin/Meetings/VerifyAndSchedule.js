import styled from 'styled-components';
import Header from '../Components/Header';
import Loader from '../../User/layout/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MeetingDetails from './MeetingDetails';
import MeetingVerify from './MeetingVerify';
import {useParams} from 'react-router-dom';
import {
  clearErrors,
  userMeetingDetails,
} from '../../../Features/contactUsFeatures/meetingDetailsSlice';
import {useEffect} from 'react';

const VerifyAndSchedule = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {uerMeeting, loading, error} = useSelector(
    state => state.userMeetingDetails,
  );

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'bottom-left',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    dispatch(userMeetingDetails(id));
  }, [dispatch, id, error, toast]);
  return (
    <>
      {uerMeeting && loading ? (
        <Loader />
      ) : (
        <Container>
          <ToastContainer />
          <Header
            title="Verify And Schedule"
            subtitle="Introduction Meeting With DataPollex"
          />

          <Wrapper>
            <MeetingDetails meeting={uerMeeting} />
            <MeetingVerify meetingData={uerMeeting} />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  min-height: 90vh;
  background-color: #1c1b1f;
  position: relative;
  display: block;
  padding: 20px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  text-decoration: none;

  @media (max-width: 480px) {
    padding: 20px 15px 80px 15px;
  }
  @media (max-width: 368px) {
    padding: 20px 10px 80px 10px;
  }
`;

const Wrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 831px) {
    flex-direction: column;
  }
`;
export default VerifyAndSchedule;
