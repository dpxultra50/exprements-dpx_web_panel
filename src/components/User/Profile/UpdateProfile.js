import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Dropdown from '../Profile/Dropdown';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {
  updateProfile,
  updateReset,
  clearErrors,
} from '../../../Features/userFeatures/profileSlice';
import {loadUser} from '../../../Features/userFeatures/authSlice';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import * as StyleComponent from '../LoginSignup/StyleComponent';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user} = useSelector(state => state.user);
  const {error, isUpdated, loading} = useSelector(state => state.profile);

  const [updateUser, setUpdateUser] = useState({
    name: '',
    phonenumber: '',
    companyname: '',
    companyrole: '',
  });

  const {name, phonenumber, companyname, companyrole} = updateUser;

  const [avatarPreview, setAvatarPreview] = useState();

  const updateProfileSubmit = e => {
    e.preventDefault();

    const updateUserForm = new FormData();
    updateUserForm.set('name', name);
    updateUserForm.set('phonenumber', phonenumber);
    updateUserForm.set('companyname', companyname);
    updateUserForm.set('companyrole', companyrole);

    if (updateUser.userImage) {
      updateUserForm.set('image', updateUser.userImage);
    }
    dispatch(updateProfile(updateUserForm));
  };

  const updateUseDataChange = e => {
    if (e.target.name === 'userImage') {
      setUpdateUser({...updateUser, userImage: e.target.files[0]});
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    } else {
      setUpdateUser({...updateUser, [e.target.name]: e.target.value});
    }
  };

  useEffect(() => {
    if (user) {
      setUpdateUser(prevState => ({
        ...prevState,
        name: user.name,
        phonenumber: user.phonenumber,
        companyname: user.companyname,
        companyrole: user.companyrole,
      }));
    }

    if (error) {
      toast.error(error, {
        position: 'bottom-left',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success('Profile Updated Successfully', {
        position: 'bottom-left',
        theme: 'dark',
        pauseOnHover: true,
      });

      dispatch(loadUser());
      dispatch(updateReset());
      navigate('/account');
    }
  }, [error, isUpdated, user, setUpdateUser, navigate, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <MetaData
            title="Update Profile | DataPollex | Top It company In Bangladesh | Top It Company In Japan"
            keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
            desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
          />
          <ToastContainer />
          <Shape1
            as={motion.div}
            animate={{
              x: [-40, 5, -40],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}>
            <img src="/images/services-shape-1.png" alt="" />
          </Shape1>
          <Shape2>
            <img src="/images/services-shape-2.png" alt="" />
          </Shape2>
          <ContWrapper>
            {/* Profile Dropdown */}
            <Dropdown />
            {/* Profile Dropdown */}

            {/* CARD */}
            <CardContainer>
              <StyleComponent.Title>Update Profile</StyleComponent.Title>
              <StyleComponent.SignUpContainer>
                <StyleComponent.Wrapper>
                  <StyleComponent.Form
                    onSubmit={updateProfileSubmit}
                    encType="multipart/form-data">
                    <StyleComponent.FormWraper>
                      <StyleComponent.Name
                        type="text"
                        placeholder="Name *"
                        required
                        name="name"
                        value={name}
                        onChange={updateUseDataChange}
                      />
                    </StyleComponent.FormWraper>
                    <StyleComponent.PhoneNumber
                      type="text"
                      placeholder="Phone Number *"
                      required
                      name="phonenumber"
                      value={phonenumber}
                      onChange={updateUseDataChange}
                    />
                    <StyleComponent.FormWraper>
                      <StyleComponent.Companyname
                        type="text"
                        placeholder="Company Name"
                        required
                        name="companyname"
                        value={companyname}
                        onChange={updateUseDataChange}
                      />
                      <StyleComponent.Companyrole
                        type="text"
                        placeholder="Your Role"
                        required
                        name="companyrole"
                        value={companyrole}
                        onChange={updateUseDataChange}
                      />
                    </StyleComponent.FormWraper>
                    <StyleComponent.Img>
                      <StyleComponent.Avatar
                        id="imginput"
                        type="file"
                        name="userImage"
                        accept="image/*"
                        onChange={updateUseDataChange}
                      />
                      <StyleComponent.AvatarLabel htmlFor="imginput">
                        <span>Upload Image</span>
                        <span>Choose file</span>
                      </StyleComponent.AvatarLabel>
                      {avatarPreview && avatarPreview != null ? (
                        <StyleComponent.Preview>
                          <StyleComponent.AvatarPreview
                            src={avatarPreview}
                            alt="Avatar Preview"
                          />
                        </StyleComponent.Preview>
                      ) : null}
                    </StyleComponent.Img>
                    <input
                      type="submit"
                      value="Register"
                      id="registersubmit"
                      className="signUpBtn"
                      style={{display: 'none'}}
                    />
                    <StyleComponent.Button>
                      <label htmlFor="registersubmit">
                        <ArrowCircleRightIcon />
                        <span>UPDATE</span>
                      </label>
                    </StyleComponent.Button>
                  </StyleComponent.Form>
                </StyleComponent.Wrapper>
              </StyleComponent.SignUpContainer>
            </CardContainer>
          </ContWrapper>
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
  padding: 40px 35px 40px 35px;
  overflow: hidden;
  z-index: 1;
  overflow: hidden;

  .css-18lrjg1-MuiCircularProgress-root {
    color: #ff4f47;
  }
  @media (max-width: 450px) {
    padding: 40px 15px 40px 15px;
  }
`;

const Shape1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  img {
    opacity: 0.06;
  }
`;

const Shape2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: luminosity;
  img {
    width: auto;
    opacity: 0.02;
  }
`;

const ContWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 90%;
  }
  @media (max-width: 451px) {
    width: 100%;
  }
  @media (max-width: 352px) {
    h2 {
      margin: 61px 0 20px 0;
    }
  }
`;

export default UpdateProfile;
