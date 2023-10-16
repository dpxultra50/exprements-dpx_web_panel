import styled from 'styled-components';
import {Typography, useMediaQuery} from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DraftsIcon from '@mui/icons-material/Drafts';
import SquareIcon from '@mui/icons-material/Square';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {
  userMeetingHistory,
  clearErrors,
} from '../../../Features/contactUsFeatures/scheduleMeetingSlice';
import Loader from '../../User/layout/Loader';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import NothingToDisplay from '../layout/NothingToDisplay';

const MeetingHistory = () => {
  const dispatch = useDispatch();

  const {userMeetingsHistory, loading, error} = useSelector(
    state => state.scheduleMeeting,
  );
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'bottom-right',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    dispatch(userMeetingHistory());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <ToastContainer />
          <FlexBox
            className={userMeetingsHistory.length === 0 ? 'dispaly_reset' : ''}
            sx={{
              '& > div': {
                gridColumn: isNonMediumScreens ? undefined : 'span 12',
              },
            }}>
            {userMeetingsHistory.length !== 0 ? (
              userMeetingsHistory.map(meeting => (
                <Link to={`/meeting/details/${meeting._id}`} key={meeting._id}>
                  <Card sx={{minWidth: 275, minHeight: 150}}>
                    <Title>
                      <h4>ID: {meeting._id}</h4>
                    </Title>

                    <Cardcontainer>
                      <CardContent>
                        <Typography
                          className={`${meeting.status}`}
                          sx={{
                            fontSize: '16px',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                          variant="h5"
                          component="div">
                          <SquareIcon sx={{mr: '10px'}} />
                          {meeting.status}
                        </Typography>

                        <Typography
                          sx={{mb: 2, display: 'flex', alignItems: 'center'}}
                          variant="h5">
                          <DraftsIcon sx={{mr: '10px'}} />
                          {moment(meeting.startTime).format(
                            'dddd, MMMM D, YYYY h:mm A',
                          )}
                        </Typography>

                        <Typography
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mt: '16px',
                          }}
                          variant="h5">
                          <ContactSupportIcon sx={{mr: '10px'}} />
                          {meeting.inquiryType}
                        </Typography>
                      </CardContent>
                    </Cardcontainer>
                  </Card>
                </Link>
              ))
            ) : (
              <NtgBox>
                <NothingToDisplay data={'Meeting'} />
              </NtgBox>
            )}
          </FlexBox>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #1c1b1f;
  overflow: hidden;
  z-index: 1;
  text-decoration: none;
  .css-yfyja0-MuiPaper-root-MuiCard-root {
    background-color: #151518;
    color: #ffffff;
    transition: all 300ms ease;
    &:hover {
      transform: translateY(-10px);
    }
  }

  .css-yfyja0-MuiPaper-root-MuiCard-root:hover {
    background-color: #1c1b1f;
  }

  span {
    color: #ffff;
  }

  .dispaly_reset {
    display: unset;
  }
`;

const FlexBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 25px;
  @media (max-width: 724px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 920px) {
    margin-left: 0px;
    margin-right: 0px;
  }
  a {
    margin-bottom: 40px;
    @media (max-width: 920px) {
      width: 100%;
    }
  }
`;

const NtgBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  width: 100%;
  padding: 5px 18px;
  background-color: #ff4f47;
  h4 {
    font-size: 16px;
  }
`;

const Cardcontainer = styled.div`
  box-shadow: 0px 10px 39.2px 0.8px rgba(0, 0, 0, 0.1);
  transition: all 500ms ease;
  border-radius: 5px;

  h5 {
    font-size: 16px;
  }
  .pending {
    text-transform: uppercase;
    color: #e4e669;
  }
  .scheduled {
    text-transform: uppercase;
    color: #0075ca;
  }
  .completed {
    text-transform: uppercase;
    color: #008672;
  }
  .Canceled {
    text-transform: uppercase;
    color: #d73a4a;
  }
`;

export default MeetingHistory;
