import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import * as StyleComponent from './StyleComponent';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  clearMessage,
  forgotpassword,
} from '../../../Features/userFeatures/forgotPasswordSlice';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinearProgress from '@mui/material/LinearProgress';
import MetaData from '../layout/MetaData';

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const {error, message, loading} = useSelector(state => state.forgotPassword);

  const [userEmail, setuserEmail] = useState({
    email: '',
  });

  const {email} = userEmail;

  const forgotPassSubmit = e => {
    e.preventDefault();

    const forgotPassForm = new FormData();
    forgotPassForm.set('email', email);

    dispatch(forgotpassword(forgotPassForm));
  };

  const forgotPassDataChange = e => {
    setuserEmail({...userEmail, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-left',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message, {
        position: 'top-left',
        autoClose: 6000,
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <StyleComponent.Container>
        <MetaData
          title="Forgot Password | DataPollex | Top It company In Bangladesh | Top It Company In Japan"
          keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
          desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
        />
        <ToastContainer />
        <StyleComponent.Title>Forgot Password</StyleComponent.Title>
        <StyleComponent.SignUpContainer>
          <StyleComponent.Wrapper>
            <StyleComponent.TitleSpan>
              Send code via email
            </StyleComponent.TitleSpan>
            <StyleComponent.Form onSubmit={forgotPassSubmit}>
              <StyleComponent.Email
                type="email"
                placeholder="Enter Your Email Address*"
                required
                name="email"
                value={email}
                onChange={forgotPassDataChange}
              />
              <input
                type="submit"
                value="Register"
                id="sigin"
                className="signUpBtn"
                style={{display: 'none'}}
              />
              <StyleComponent.Button htmlFor="sigin">
                <label htmlFor="sigin">
                  <ArrowCircleRightIcon />
                  <span>SUBMIT</span>
                </label>
              </StyleComponent.Button>
            </StyleComponent.Form>
          </StyleComponent.Wrapper>
        </StyleComponent.SignUpContainer>
        {loading ? <LinearProgress color="secondary" /> : <></>}
      </StyleComponent.Container>
      {/* )} */}
    </>
  );
};

export default ForgotPassword;
