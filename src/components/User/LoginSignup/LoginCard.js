import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import * as StyleComponent from './StyleComponent';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../Features/userFeatures/authSlice';
import {Link, useNavigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MetaData from '../layout/MetaData';

const LoginCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isAuthenticated} = useSelector(state => state.user);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const {email, password} = credentials;

  const signinSubmit = e => {
    e.preventDefault();

    const signinForm = new FormData();
    signinForm.set('email', email);
    signinForm.set('password', password);

    dispatch(login(signinForm));
  };

  const registerDataChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const redirect = '/account';

  let calnum = 0;
  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [navigate, isAuthenticated, redirect, calnum]);
  return (
    <StyleComponent.Container>
      <MetaData
        title="Login | DataPollex | Top It company In Bangladesh | Top It Company In Japan"
        keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
        desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
      />
      <ToastContainer />
      <StyleComponent.Title>Login</StyleComponent.Title>
      <StyleComponent.SignUpContainer>
        <StyleComponent.Wrapper>
          <StyleComponent.Form onSubmit={signinSubmit}>
            <StyleComponent.Email
              type="email"
              placeholder="Email *"
              required
              name="email"
              value={email}
              onChange={registerDataChange}
            />
            <StyleComponent.Password
              type="password"
              placeholder="Password *"
              required
              name="password"
              value={password}
              onChange={registerDataChange}
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
                <span>Sigin</span>
              </label>
            </StyleComponent.Button>
            <StyleComponent.Forgot>
              <StyleComponent.More>
                <Link to="/password/forgot">
                  <span>Forgotten password ?</span>
                  <ArrowCircleRightIcon />
                </Link>
              </StyleComponent.More>
            </StyleComponent.Forgot>
          </StyleComponent.Form>
        </StyleComponent.Wrapper>
      </StyleComponent.SignUpContainer>
    </StyleComponent.Container>
  );
};

export default LoginCard;
