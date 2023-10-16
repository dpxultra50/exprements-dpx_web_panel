import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {useEffect, useState} from 'react';
import * as StyleComponent from './StyleComponent';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../../Features/userFeatures/authSlice';
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MetaData from '../layout/MetaData';

const SignupCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isAuthenticated} = useSelector(state => state.user);

  const [user, setUser] = useState({
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmpassword: '',
    companyname: '',
    companyrole: '',
  });

  const {
    name,
    email,
    phonenumber,
    password,
    confirmpassword,
    companyname,
    companyrole,
  } = user;

  const [avatarPreview, setAvatarPreview] = useState();

  const registerSubmit = e => {
    e.preventDefault();

    //Password Match
    if (password !== confirmpassword) {
      toast.error('Password not matched', {
        position: 'top-left',
        theme: 'dark',
        pauseOnHover: true,
      });
      return;
    }

    const regForm = new FormData();
    regForm.set('name', name);
    regForm.set('email', email);
    regForm.set('phonenumber', phonenumber);
    regForm.set('password', password);
    regForm.set('companyname', companyname);
    regForm.set('companyrole', companyrole);
    if (user.userImage) {
      regForm.set('image', user.userImage);
    }

    dispatch(registerUser(regForm));
  };

  const registerDataChange = e => {
    if (e.target.name === 'userImage') {
      setUser({...user, userImage: e.target.files[0]});
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    } else {
      setUser({...user, [e.target.name]: e.target.value});
    }
  };

  const redirect = '/account';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirect);
    }
  }, [navigate, isAuthenticated, redirect]);
  return (
    <StyleComponent.Container>
      <MetaData
        title="Create Account | DataPollex | Top It company In Bangladesh | Top It Company In Japan"
        keywords="top app development company, top website development company in india, top website development company in bangladeshi, top it services companies in bangladesh, top website development companies in usa, top it company in bangladesh,top it companies in dhaka,top it company in usa, app development companies, top app development company, mobile app development company,blockchain development company, top blockchain development company, blockchain development company in bangladesh,  mobile app development companies, ahmedabad, san francisco, USA, UAE,bangladesh, japan, India"
        desc="DataPollex is a leading IT service company specializing in providing innovative solutions to businesses worldwide. With a team of experienced professionals and a passion for technology, we deliver custom software development, web development, and blockchain development services. Our mission is to help businesses leverage the power of technology to achieve their goals and stay ahead in the digital age. Discover more about our company's history, values, and expertise on our About page. Partner with DataPollex and unlock your business's full potential."
      />
      <ToastContainer />
      <StyleComponent.Title>Create Account</StyleComponent.Title>
      <StyleComponent.SignUpContainer>
        <StyleComponent.Wrapper>
          <StyleComponent.Form
            onSubmit={registerSubmit}
            encType="multipart/form-data">
            <StyleComponent.FormWraper>
              <StyleComponent.Name
                type="text"
                placeholder="Name *"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
              <StyleComponent.Email
                type="email"
                placeholder="Email *"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </StyleComponent.FormWraper>
            <StyleComponent.PhoneNumber
              type="text"
              placeholder="Phone Number *"
              required
              name="phonenumber"
              value={phonenumber}
              onChange={registerDataChange}
            />
            <StyleComponent.FormWraper>
              <StyleComponent.Companyname
                type="text"
                placeholder="Company Name"
                required
                name="companyname"
                value={companyname}
                onChange={registerDataChange}
              />
              <StyleComponent.Companyrole
                type="text"
                placeholder="Your Role"
                required
                name="companyrole"
                value={companyrole}
                onChange={registerDataChange}
              />
            </StyleComponent.FormWraper>
            <StyleComponent.FormWraper>
              <StyleComponent.Password
                type="password"
                placeholder="Password *"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
              <StyleComponent.ConfirmPassword
                type="password"
                placeholder="ConfirmPassword *"
                required
                name="confirmpassword"
                value={confirmpassword}
                onChange={registerDataChange}
              />
            </StyleComponent.FormWraper>
            <StyleComponent.Img>
              <StyleComponent.Avatar
                id="imginput"
                type="file"
                name="userImage"
                accept="image/*"
                onChange={registerDataChange}
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
                <span>Sigin Up</span>
              </label>
            </StyleComponent.Button>
          </StyleComponent.Form>
        </StyleComponent.Wrapper>
      </StyleComponent.SignUpContainer>
    </StyleComponent.Container>
  );
};

export default SignupCard;
