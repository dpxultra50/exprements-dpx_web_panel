import Header from '../Components/Header';
import styled from 'styled-components';
import {Typography, useMediaQuery} from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PublicIcon from '@mui/icons-material/Public';
import DraftsIcon from '@mui/icons-material/Drafts';
import SquareIcon from '@mui/icons-material/Square';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import {
  getAllMeetings,
  clearErrors,
} from '../../../Features/contactUsFeatures/scheduleMeetingSlice';
import Loader from '../../User/layout/Loader';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import Pagination from 'react-js-pagination';

const Meetings = () => {
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState({
    status: '',
  });
  const {status} = filterData;

  const [currentPage, setCurrentPage] = useState(1);

  const {
    userMeetings,
    loading,
    error,
    meetingsCount,
    resultPerPage,
    filteredMeetingsCount,
  } = useSelector(state => state.scheduleMeeting);

  const filterDataChange = e => {
    setFilterData({...filterData, [e.target.name]: e.target.value});
  };

  const setCurrentPageNo = e => {
    setCurrentPage(e);
  };

  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');

  let count = filteredMeetingsCount;
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'bottom-left',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    dispatch(getAllMeetings({keyword: status, currentPage: currentPage}));
  }, [dispatch, getAllMeetings, status, currentPage, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <ToastContainer />
          <Header title="USER MEETING'S" subtitle="DataPollex user meetings" />
          <StatusFilter>
            <FormControl variant="outlined" style={{minWidth: 200}}>
              <InputLabel id="selector-label">Status</InputLabel>
              <Select
                sx={{
                  '&:focus': {
                    outline: 'none',
                  },
                }}
                labelId="selector-label"
                label="Select Option"
                name="status"
                value={status}
                onChange={filterDataChange}
                inputProps={{'aria-label': 'Select Option'}}>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="scheduled">Scheduled</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="canceled">Canceled</MenuItem>
              </Select>
            </FormControl>
          </StatusFilter>

          <FlexBox
            sx={{
              '& > div': {
                gridColumn: isNonMediumScreens ? undefined : 'span 12',
              },
            }}>
            {userMeetings &&
              userMeetings.map(meeting => (
                <Link
                  to={`/admin/meeting/verify/${meeting._id}`}
                  key={meeting._id}>
                  <Card sx={{minWidth: 275, minHeight: 150}}>
                    <Title>
                      <h4>ID: {meeting._id}</h4>
                    </Title>

                    <Cardcontainer>
                      <CardContent>
                        <Typography
                          className={`${meeting.status}`}
                          sx={{mb: 2, display: 'flex', alignItems: 'center'}}
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
                          sx={{display: 'flex', alignItems: 'center'}}
                          variant="h5">
                          <PublicIcon sx={{mr: '10px'}} />
                          {meeting.timeZone}
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
              ))}
          </FlexBox>
          {resultPerPage < count && (
            <PaginationBox className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={meetingsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </PaginationBox>
          )}
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

const FlexBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 10px;
  margin-right: 10px;
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
const Title = styled.div`
  width: 100%;
  padding: 5px 18px;
  background-color: #ff4f47;

  h4 {
    font-size: 18px;
  }
`;

const StatusFilter = styled.div`
  margin: 40px 0px 20px 0px;
  .css-y5180i-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
    background-color: rgba(155, 155, 155, 0.16);
  }
  .css-ku0b1u-MuiFormLabel-root-MuiInputLabel-root {
    color: #ff4f47 !important;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 3px;
  }
  .css-1nrlq1o-MuiFormControl-root {
    background-color: #151518;
    color: #817e87;
  }
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    color: rgb(142, 142, 142, 0.5);
    font-size: 1rem;
    font-weight: 600;
  }

  .css-bpeome-MuiSvgIcon-root-MuiSelect-icon,
  .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
    color: rgb(142, 142, 142, 0.5);
    font-size: 2rem;
  }
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
    color: rgb(142, 142, 142, 0.5);
    font-weight: 700;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root,
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #ff4f47;
    font-size: 18px;
    background: #151518;
    padding-right: 4px;
  }
`;
const Cardcontainer = styled.div`
  background: #121113;
  box-shadow: 0px 10px 39.2px 0.8px rgba(0, 0, 0, 0.1);
  transition: all 500ms ease;
  &:hover {
    background-color: #1c1b1f;
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

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 1vmax;

  .pagination {
    display: flex;
    justify-content: center;
    padding: 0;
    box-shadow: 0px 10px 39.2px 0.8px rgba(0, 0, 0, 0.1);
    @media (max-width: 439px) {
      flex-wrap: wrap;
    }
  }

  .page-item {
    background: #121113;
    list-style: none;
    border: 1px solid rgba(0, 0, 0, 0.178);
    padding: 1vmax 1.5vmax;
    transition: all 0.3s;
    cursor: pointer;
    @media (max-width: 927px) {
      padding: 1.2vmax 1.5vmax;
    }
  }
  .page-item:first-child {
    border-radius: 5px 0 0 5px;
  }

  .page-item:last-child {
    border-radius: 0 5px 5px 0;
  }
  .page-link {
    text-decoration: none;
    font-size: 12px;
    font-family: Inter, sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    color: #ffffffff;
    transition: all 0.3s;
    text-transform: uppercase;
  }

  .page-item:hover {
    background-color: rgba(155, 155, 155, 0.16);
    .page-link {
      color: #ff4f47 !important;
    }
  }

  .page-item:hover .page-link {
    color: rgb(0, 0, 0);
  }

  .pageItemActive {
    background-color: #ff4f47;
  }

  .pageLinkActive {
    color: white;
  }
`;

export default Meetings;
