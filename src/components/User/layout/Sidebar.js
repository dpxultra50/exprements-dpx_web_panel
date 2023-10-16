import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import {useSelector} from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';

const Sidebar = ({sidebar, closeSidebar}) => {
  const {isAuthenticated} = useSelector(state => state.user);

  //Open & Close Dropdown Menu
  const [dropdown, setDropdown] = useState(false);

  const toggDropdown = () => {
    setDropdown(prevState => !prevState);
  };

  return (
    <Container toggleStyle={sidebar}>
      <Wraper>
        <Top>
          <Logo>
            <Link to="/home" onClick={closeSidebar}>
              <img src="/images/layouts/datapollex_logo.png" alt="logo" />
            </Link>
          </Logo>
          <Close onClick={closeSidebar}>
            <CloseIcon />
          </Close>
        </Top>

        <MobileNav>
          <NavMenu onClick={closeSidebar}>
            <NavLink to="/home">
              <HomeOutlinedIcon />
              <span>Home</span>
            </NavLink>
          </NavMenu>
          <NavMenu>
            <HeadLine to="/service" onClick={toggDropdown}>
              <MiscellaneousServicesOutlinedIcon />
              <span>Services</span>

              <Dropdown isOpen={dropdown}>
                <KeyboardArrowRightIcon />
              </Dropdown>
            </HeadLine>

            <DropdownMenu isOpen={dropdown}>
              <Link onClick={closeSidebar} to="/service/mobile-app-development">
                <span>Mobile App</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link onClick={closeSidebar} to="/service/web-development">
                <span>Web Development</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link onClick={closeSidebar} to="/service/blockchain-development">
                <span>Blockchain</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link onClick={closeSidebar} to="/service/ecommerce-development">
                <span>Ecommerce</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link onClick={closeSidebar} to="/service/cyber-security">
                <span>Cyber Security </span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link
                onClick={closeSidebar}
                to="/service/artificial-intelligence-and-machine-learning">
                <span>AI & ML</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link onClick={closeSidebar} to="/service/digital-marketing">
                <span>Digital marketing</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link onClick={closeSidebar} to="/service/iot-development">
                <span>IoT & Embedded</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
              <Link onClick={closeSidebar} to="/service/metaverse-development">
                <span>Metaverse</span>
                <KeyboardDoubleArrowRightIcon />
              </Link>
            </DropdownMenu>
          </NavMenu>
          <NavMenu onClick={closeSidebar}>
            <NavLink to="/industries">
              <FindInPageOutlinedIcon />
              <span>Industries</span>
            </NavLink>
          </NavMenu>
          <NavMenu onClick={closeSidebar}>
            <NavLink to="/works">
              <HomeOutlinedIcon />
              <span>Works</span>
            </NavLink>
          </NavMenu>
          <NavMenu onClick={closeSidebar}>
            <NavLink to="/about">
              <ContactSupportOutlinedIcon />
              <span>About</span>
            </NavLink>
          </NavMenu>
          <NavMenu onClick={closeSidebar}>
            <NavLink to="/contactus/meeting/timedate">
              <ConnectWithoutContactOutlinedIcon />
              <span>contact</span>
            </NavLink>
          </NavMenu>
          {isAuthenticated ? (
            <NavMenu onClick={closeSidebar}>
              <NavLink to="/account">
                <PersonIcon />
                <span>Profile</span>
              </NavLink>
            </NavMenu>
          ) : (
            <NavMenu onClick={closeSidebar}>
              <NavLink to="/Login">
                <LoginIcon />
                <span>Login</span>
              </NavLink>
            </NavMenu>
          )}
        </MobileNav>

        <Contact>
          <ContactWrap>
            <ContactIcon>
              <CallIcon />
            </ContactIcon>
            <ContactDetails>
              +880 1963431045 <br />
              +880 1778578738
            </ContactDetails>
          </ContactWrap>
          <ContactWrap>
            <ContactIcon>
              <EmailIcon />
            </ContactIcon>
            <ContactDetails>care@datapollex.com</ContactDetails>
          </ContactWrap>
        </Contact>

        <SocileLinks>
          <SocileWrap>
            <a href="https://www.facebook.com/datapollex" target="blank">
              <TwitterIcon />
            </a>
            <a href="https://www.facebook.com/datapollex" target="blank">
              <FacebookIcon />
            </a>
            <a href="https://www.facebook.com/datapollex" target="blank">
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/datapollex/"
              target="blank">
              <LinkedInIcon />
            </a>
          </SocileWrap>
        </SocileLinks>
      </Wraper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 300px;
  background-color: #1c1b1f;
  z-index: 999;
  transform: translateX(-100%);
  transition: transform 500ms ease 0ms;
  overflow-x: scroll;

  ${props =>
    props.toggleStyle
      ? 'transform: translateX(0%)'
      : 'transform: translateX(-100%)'}
`;

const Wraper = styled.div`
  overflow-y: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;

  li {
    padding: 1rem 2rem;
  }
`;

//Top
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  width: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 83%;
  }
`;

const Close = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: absolute;
  top: 10px;
  right: 15px;

  svg {
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      color: #ff4f47;
    }
  }
`;

//Mobile NavMneu

const MobileNav = styled.div`
  width: 100%;
  height: auto;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  a {
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    line-height: 30px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    height: 46px;
    align-items: center;
    transition: 500ms;
    width: 85%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 500ms ease;

    &.active {
      span,
      svg {
        color: #ff4f47;
      }
      border-bottom: 1px solid #ff4f47;
    }

    span {
      padding-left: 20px;
      letter-spacing: 1px;
      transition: all 500ms ease;
    }
    svg {
      font-size: 24px;
      transition: all 500ms ease;
    }
  }
`;

const Dropdown = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
  border-radius: 10%;
  background-color: #ff4f47;
  border: none;
  outline: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 500ms ease;

  ${props =>
    props.isOpen ? 'transform: rotate(+90deg);' : 'transform: rotate(0deg);'}

  svg {
    font-size: 30px;
  }
`;

const HeadLine = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  line-height: 30px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  height: 46px;
  align-items: center;
  transition: 500ms;
  width: 85%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  span {
    padding-left: 20px;
    letter-spacing: 1px;
  }
  svg {
    font-size: 24px;
  }
`;

const DropdownMenu = styled.div`
  width: 85%;
  transition: all 500ms ease;

  a {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    width: 100%;
    span {
      padding-left: 0;
    }
  }

  padding-left: 42px;
  overflow-y: hidden;
  ${props => (props.isOpen ? 'max-height: 450px' : 'max-height: 0px;')}
`;

//Bottom
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 10px;
`;
const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  margin-bottom: 15px;
  color: #ffffff;
`;
const ContactIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ff4f47;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 16px;
  }
`;
const ContactDetails = styled.p`
  font-size: 14px;
  font-weight: 500;
  transition: all 500ms ease;
  padding-left: 10px;

  &:hover {
    color: #ff4f47;
  }
`;

const SocileLinks = styled.div`
  width: 80%;
`;
const SocileWrap = styled.div`
  display: flex;
  align-items: center;

  a {
    padding-left: 25px;
    svg {
      color: #ffffff;
      font-size: 20px;
    }
  }
`;
export default Sidebar;
