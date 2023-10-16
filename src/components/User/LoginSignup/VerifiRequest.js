import Dropdown from '../Profile/Dropdown';
import styled from 'styled-components';
import Loader from '../layout/Loader';
import {useDispatch, useSelector} from 'react-redux';
import * as StyleComponent from './StyleComponent';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {motion} from 'framer-motion';
import LinearProgress from '@mui/material/LinearProgress';
import {
  clearMessage,
  verifirequest,
} from '../../../Features/userFeatures/forgotPasswordSlice';
import {toast, ToastContainer} from 'react-toastify';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MetaData from '../layout/MetaData';

const VerifiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user, loading: userLoding} = useSelector(state => state.user);

  const {error, message, loading} = useSelector(state => state.forgotPassword);

  const email = user.email;

  const accountStatus = user.verified;

  const verifiRequestSubmit = e => {
    e.preventDefault();

    const verifiRequestForm = new FormData();
    verifiRequestForm.set('email', email);

    dispatch(verifirequest(verifiRequestForm));
  };

  useEffect(() => {
    if (accountStatus === true) {
      navigate('/account/status');
    }

    if (message) {
      toast.success(message, {
        position: 'bottom-left',
        autoClose: 6000,
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearMessage());
    }
  }, [dispatch, error, message, accountStatus, navigate]);

  return (
    <>
      {userLoding ? (
        <Loader />
      ) : (
        <Container>
          <MetaData
            title="Verify Account | DataPollex | Top It company In Bangladesh | Top It Company In Japan"
            keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
            desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
          />
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
          <VerifyWrapper>
            <ToastContainer />
            {/* Profile Dropdown */}
            <Dropdown />
            {/* Profile Dropdown */}
            <VerifyContainer>
              <StyleComponent.Title>Verify Account</StyleComponent.Title>
              <StyleComponent.SignUpContainer>
                <StyleComponent.Wrapper>
                  <StyleComponent.TitleSpan>
                    send link via email
                  </StyleComponent.TitleSpan>
                  <StyleComponent.Form onSubmit={verifiRequestSubmit}>
                    <StyleComponent.Email
                      type="email"
                      placeholder="Enter Your Email Address*"
                      required
                      name="email"
                      value={email}
                      readOnly
                    />
                    <input
                      type="submit"
                      value="Register"
                      id="sigin"
                      className="signUpBtn"
                      style={{display: 'none'}}
                    />
                    <StyleComponent.Button>
                      <label htmlFor="sigin">
                        <ArrowCircleRightIcon />
                        <span>SUBMIT</span>
                      </label>
                    </StyleComponent.Button>
                  </StyleComponent.Form>
                </StyleComponent.Wrapper>
                {loading ? <LinearProgress color="secondary" /> : <></>}
              </StyleComponent.SignUpContainer>
            </VerifyContainer>
          </VerifyWrapper>
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
  padding: 40px 35px 80px 35px;
  overflow: hidden;
  z-index: 1;
  .css-10jyip1-MuiLinearProgress-root {
    background-color: #1c1b1f;
  }
  .css-p53mz9-MuiLinearProgress-bar1 {
    background-color: #ff4f47;
  }
  .css-xybj4j-MuiLinearProgress-bar2 {
    background-color: #ff4f47;
  }
  @media (max-width: 450px) {
    padding: 40px 15px 80px 15px;
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
const VerifyWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  width: 100%;
`;
const VerifyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 352px) {
    h2 {
      margin: 61px 0 20px 0;
    }
  }
`;

export default VerifiRequest;
