import styled from 'styled-components';
import Header from '../Components/Header';
import {DataGrid} from '@mui/x-data-grid';
import {Box, useTheme, useMediaQuery} from '@mui/material';
import {
  getAllUser,
  clearErrors,
} from '../../../Features/adminFeatures/adminUserSlice';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../User/layout/Loader';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');
  const apiURL = process.env.REACT_APP_SERVER_URL;

  const {loading, error, users} = useSelector(state => state.adminUser);

  const columns = [
    {
      field: 'userId',
      headerName: 'User ID',
      flex: 1,
    },
    {
      field: 'image',
      headerName: 'Image',
      renderCell: params => {
        return (
          <Box>
            <img src={params.row.image} alt="" width={'100%'} height={'60'} />
          </Box>
        );
      },
      flex: 0.5,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      sortable: false,
      renderCell: params => params.value,
    },
    {
      field: 'role',
      headerName: 'Role',
      flex: 0.5,
      renderCell: params => params.value,
    },
    {
      field: 'detailslink',
      headerName: 'Details-link',
      flex: 0.2,
    },
  ];

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'bottom-right',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    dispatch(getAllUser());
  }, [error, dispatch]);

  const rows = users.map(user => ({
    id: user._id,
    userId: user._id,
    image: user.userImage
      ? `${apiURL}/uploads/user/${user.userImage}`
      : '/images/user.png',
    name: user.name,
    email: user.email,
    role: user.role,
    detailslink: 'Link',
  }));

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <ToastContainer />
          <Header title="ALL USERS" subtitle="DataPollex All User's" />

          {/* All Users */}
          <UsersBox>
            <Box m="1.5rem 2.5rem">
              <Box
                mt="20px"
                display="grid"
                gridTemplateColumns="repeat(6, 1fr)"
                gridAutoRows="160px"
                gap="20px"
                sx={{
                  '& > div': {
                    gridColumn: isNonMediumScreens ? undefined : 'span 12',
                  },
                }}>
                <Box
                  gridColumn="span 8"
                  gridRow="span 3"
                  sx={{
                    '& .MuiDataGrid-root': {
                      border: 'none',
                      borderRadius: '5rem',
                    },
                    '& .MuiDataGrid-cell': {
                      borderBottom: 'none',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                      backgroundColor: theme.palette.background.alt,
                      color: theme.palette.secondary[100],
                      borderBottom: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                      backgroundColor: theme.palette.background.alt,
                    },
                    '& .MuiDataGrid-footerContainer': {
                      backgroundColor: theme.palette.background.alt,
                      color: theme.palette.secondary[100],
                      borderTop: 'none',
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                      color: `${theme.palette.secondary[200]} !important`,
                    },
                  }}>
                  <DataGrid rows={rows} columns={columns} />
                </Box>
              </Box>
            </Box>
          </UsersBox>
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

const UsersBox = styled.div`
  margin-top: 60px;
`;

export default AdminUsers;
