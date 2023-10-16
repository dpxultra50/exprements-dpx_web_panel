import {Link, NavLink, Outlet} from 'react-router-dom';
import styled from 'styled-components';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors} from '../../../Features/userFeatures/authSlice';
import {useEffect} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSignup = () => {
  const {error} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-left',
        theme: 'dark',
        pauseOnHover: true,
      });
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  return (
    <Container>
      <ToastContainer />
      <BackImg></BackImg>
      <Wrapper>
        <OutletContainer>
          <>
            <OutletTitle>
              <h2>Get Started</h2>
              <NavLink to="/signup">
                <span>Sign Up</span>
              </NavLink>

              <NavLink to="/login">
                <span>Sign In</span>
              </NavLink>
            </OutletTitle>
          </>
          <>
            <Outlet />
          </>
        </OutletContainer>
        <Display>
          <DisplayWrapper>
            <ImageOver>
              <img src="/images/ico_landing_promo.png" alt="" />
            </ImageOver>
            <TextOver>
              <h5>BLOCKCHAIN SERVICES</h5>
              <p>
                Experience a Decentralized Future with our Expert Blockchain &
                Web3 Services.
              </p>
              <More>
                <Link to="/service/blockchain-development">
                  <span> Discover more</span>
                  <ArrowCircleRightIcon />
                </Link>
              </More>
              <Button>
                <Link to="/contactus/meeting/timedate">
                  <ArrowCircleRightIcon />
                  <span>Get A Quote </span>
                </Link>
              </Button>
            </TextOver>
          </DisplayWrapper>
        </Display>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: block;
  padding: 80px 35px 80px 35px;
  overflow: hidden;
  @media (max-width: 510px) {
    padding: 80px 15px 80px 15px;
  }
`;
const BackImg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  mix-blend-mode: luminosity;
  opacity: 0.08;
  background-image: url('images/noiseback.gif');
  z-index: -1;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Display = styled.div`
  flex: 1;
  max-width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1c1b1f;
  border-radius: 12px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-bottom: 4px solid transparent;
  transition: all 500ms ease;
  &:hover {
    border-bottom: 4px solid #ff4f47;
  }
  @media (max-width: 991px) {
    width: 80%;
    margin-top: 45px;
    max-width: unset;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
  @media (max-width: 510px) {
    width: 100%;
  }
`;
const DisplayWrapper = styled.div`
  padding: 1.5rem;
`;
const ImageOver = styled.div`
  background-color: #09080d;
  border-radius: 12px;
  img {
    width: 100%;
  }
`;
const TextOver = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  h5 {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
  }
  p {
    text-align: center;
    margin: 10px 0px;
    font-size: 16px;
  }
`;

const OutletContainer = styled.div`
  flex: 2;
  max-width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 991px) {
    flex: 1;
    width: 80%;
    max-width: unset;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
  @media (max-width: 510px) {
    width: 100%;
  }
`;
const OutletTitle = styled.div`
  width: 100%;
  h2 {
    font-size: 1.5rem;
    background: -webkit-linear-gradient(#ff4b2b, #ff416c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    margin-bottom: 15px;
    &::after {
      position: absolute;
      content: '';
      height: 3.5px;
      width: 70px;
      background-image: linear-gradient(#ff4b2b, #ff416c);
      top: 55%;
      left: 150px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
  a {
    text-decoration: none;
    color: #6c6b6f;
    position: relative;
    &.active {
      span {
        color: #ffffff;
      }
      &:before {
        height: 5px;
        visibility: visible;
        opacity: 1 !important;
      }
    }
    &:before {
      background-color: #ff4f47;
      bottom: -10px;
      content: '';
      height: 0px;
      width: 100% !important;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transition: all 0.3s ease-in-out;
      visibility: hidden;
      display: block;
    }
    &:hover {
      &:before {
        height: 5px;
        visibility: visible;
        opacity: 1 !important;
        color: #ffffff;
      }
      span,
      svg {
        color: #ffffff;
      }

      div {
        opacity: 1;
        visibility: visible;
        transform: scaleY(1) translateZ(0px);
      }
    }
    span {
      text-align: center;
      font-size: 18px;
      margin: 20px 0px;
      transition: all 500ms ease;

      &:hover {
        cursor: pointer;
        color: #ffffff;
      }
    }
    &:nth-child(3) {
      margin-left: 20px;
    }
  }
`;

const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 15px 40px 15px;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s linear;
    position: relative;
    overflow: hidden;
    z-index: 1;
    @media (max-width: 427px) {
      padding: 12px 25px 12px;
    }
    span {
      z-index: 2;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180%;
      transition: all 0.5s linear;
      background: #ff4f47;
      z-index: 2;
      transition: 0.8s;
    }
    &:hover {
      color: #ff4f47;
      &::before {
        border-radius: 0% 0% 50% 50%;
        height: 0%;
      }
    }

    svg {
      margin-right: 4px;
      padding-left: 2px;
      font-size: 20px;
      z-index: 2;
    }
  }
`;
const More = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 15px 40px 15px;
    border-radius: 5px;
    transition: all 0.5s ease;
    span {
      transition: all 0.5s ease-in-out;
      border-bottom: 1px solid transparent;
    }
    &:hover {
      color: #ff4f47;
      svg {
        transform: translateX(8px);
      }
      span {
        border-bottom: 1px solid #ffffff;
      }
    }
    svg {
      margin-right: 4px;
      padding-left: 2px;
      font-size: 20px;
      z-index: 2;
      transition: all 0.5s ease;
    }
  }
`;
export default LoginSignup;
