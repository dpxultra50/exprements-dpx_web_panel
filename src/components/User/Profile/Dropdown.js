import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import LogoutIcon from '@mui/icons-material/Logout';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import LockResetIcon from '@mui/icons-material/LockReset';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {logout} from '../../../Features/userFeatures/authSlice';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dropdown = () => {
  const {user} = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiURL = process.env.REACT_APP_SERVER_URL;

  const options = [
    {icon: <ManageAccountsIcon />, name: 'Edit Profile', func: efitProfile},
    {icon: <PersonIcon />, name: 'Profile', func: account},
    {icon: <LockResetIcon />, name: 'Update Password', func: updatepass},
    {icon: <LogoutIcon />, name: 'Logout', func: logoutUser},
  ];

  const [open, setOpen] = useState(false);
  function efitProfile() {
    navigate('/account/update');
  }

  function account() {
    navigate('/account');
  }
  function updatepass() {
    navigate('/password/update');
  }
  function goToAdmin() {
    navigate('/admin');
  }

  function logoutUser() {
    dispatch(logout());
    toast.success('Logout Successfully', {
      position: 'top-left',
      theme: 'dark',
      pauseOnHover: true,
    });
  }

  return (
    <DropProfile>
      <Backdrop open={open} style={{zIndex: '10'}} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{zIndex: '11'}}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={
              user.userImage
                ? `${apiURL}/uploads/user/${user.userImage}`
                : `/images/user.png`
            }
            alt="Profile"
          />
        }>
        {options.map(item => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={true}
          />
        ))}
        {user.role === 'admin' ? (
          <SpeedDialAction
            icon=<AdminPanelSettingsIcon />
            tooltipTitle="Admin Panel"
            onClick={goToAdmin}
            tooltipOpen={true}
          />
        ) : null}
      </SpeedDial>
    </DropProfile>
  );
};

const DropProfile = styled.div`
  .speedDial {
    position: absolute;
    top: 20px;
    right: 20px;
    .MuiSpeedDialAction-staticTooltipLabel {
      color: #ffffff;
      background-color: #151518;
    }
    button {
      color: #ffffff;
      background-color: #ff4f47;
      :nth-child(1) {
        background: transparent;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .speedDialIcon {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      button {
        color: #ffffff;
        background-color: #ff4f47;
      }
    }
  }
`;
export default Dropdown;
